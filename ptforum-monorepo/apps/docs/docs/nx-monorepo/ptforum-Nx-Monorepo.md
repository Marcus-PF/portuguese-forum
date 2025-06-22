---
sidebar_position: 1
---

-----

# @ptforum Nx Monorepo – Full Documentation

This documentation provides a comprehensive guide for team members to understand and effectively contribute to the Portuguese Forum Monorepo. Here, you'll find information on:

  * **Understanding why Nx powers the Portuguese Forum Monorepo**
  * **Navigating the project structure and tooling**
  * **Following workspace standards and best practices**
  * **Contributing effectively and troubleshooting issues**

-----

## 🚀 1. Introduction to the Monorepo

### 1.1 What is a Monorepo?

A **monorepo** is a single repository that hosts multiple projects, including applications and libraries. This approach centralizes tooling, simplifies dependency management, enables code sharing, and supports coordinated development at scale.

### 1.2 Why We Chose Nx

We chose **Nx** because it aligns with the Portuguese Forum of South Africa's (PFSA) vision for a scalable digital ecosystem. Nx offers:

  * **Modular Architecture**: Enforces boundaries with tags like `scope:shared` and `type:lib`.
  * **Developer Experience**: Provides a powerful CLI, task caching, and dependency graph visualization.
  * **Consistent Tooling**: Standardizes builds, tests, and linting across frontend, backend, and documentation.
  * **Scalability**: Optimizes CI pipelines with affected workflows for large-scale development.

### 1.3 Monorepo Overview

The `@ptforum` monorepo currently contains:

  * **Applications**:
      * `apps/forum`: The public-facing website (Next.js 15, React 19)
      * `apps/admin`: The multi-tenant admin dashboard (Next.js 15)
      * `apps/api`: The backend API (Hono, TypeScript)
      * `apps/docs`: This documentation site (Docusaurus v3.8.1)
  * **Libraries**:
      * `libs/shared`: Reusable utilities, types, and UI components
      * Domain-specific libraries for forum, admin, membership, content, distribution, alerts, and integrations

This monorepo supports PFSA’s mission to empower its community through civic engagement, events, language education, and digital tools, offering multilingual (English, Portuguese) and accessible features.

-----

## 📁 2. Folder Structure Explained

The monorepo is organized for modularity, clarity, and scalability. Below is a detailed breakdown.

### 2.1 Top-Level Files

These files configure the monorepo’s tooling and standards. They are version-controlled and should be modified carefully.

| File                      | Purpose                                                                                                                              |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `nx.json`                 | Configures Nx project graph, task caching, and dependency boundaries using tags (`type`, `scope`).                                   |
| `tsconfig.base.json`      | Root TypeScript config with shared compiler options, path aliases (`@ptforum/*`), and strict type rules.                             |
| `pnpm-workspace.yaml`     | Declares workspace structure for PNPM, linking `apps/**` and `libs/**`.                                                              |
| `.eslintrc.json`          | Central ESLint config with rules for TypeScript, React, and accessibility, extended by project-specific configs.                       |
| `.prettierrc`, `.prettierignore` | Prettier formatting rules for consistent code style, integrated with ESLint.                                                         |
| `vitest.config.ts`        | Global Vitest config for unit and integration testing, with support for React components.                                            |
| `.editorconfig`           | Enforces consistent editor settings (tabs, newlines) across IDEs.                                                                    |
| `.gitignore`              | Excludes build artifacts, `.env`, caches, and `node_modules`.                                                                        |
| `.dockerignore`, `Dockerfile` | Supports containerization for `@ptforum/api` and CI pipelines.                                                                       |
| `README.md`               | Root-level introduction with setup instructions, project graph, and links to `@ptforum/docs`.                                      |
| `CONTRIBUTING.md`         | Guidelines for contributing, including onboarding checklist and code standards.                                                      |
| `LICENSE`                 | Defines the project’s licensing terms (e.g., MIT).                                                                                   |
| `.env.example`            | Template for environment variables, with secure defaults.                                                                            |
| `CODEOWNERS`              | Specifies code ownership for GitHub reviews.                                                                                         |
| `.husky/`                 | Pre-commit and commit-msg hooks for linting and commit message validation (via Commitlint).                                          |
| `.github/workflows/`      | GitHub Actions for CI/CD (build, lint, test, deploy).                                                                                |

#### 2.1.1 Example `nx.json`

```json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "lint", "test"]
      }
    }
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  },
  "nx": {
    "tags": [
      { "name": "type:app" },
      { "name": "type:lib" },
      { "name": "scope:shared" },
      { "name": "scope:forum" },
      { "name": "scope:admin" }
    ]
  }
}
```

#### 2.1.2 Example `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/**'
  - 'libs/**'
```

### 2.2 Apps Directory

The `apps/` directory contains deployable applications, each with a specific runtime and purpose.

| App     | Framework              | Purpose                                       | Key Features                                                                                                 | Consumes (`@ptforum/`)                                                                                                                                                                                                                                                                                                     |
| :------ | :--------------------- | :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `forum` | Next.js 15 (App Router)| Public-facing website for community engagement.| Club/youth directory, gamified language tools, events, member signup, Sanity CMS pages.                        | `types`, `contracts`, `api-client`, `ui`, `i18n`, `auth`, `hooks`, `metrics`, `env`, `state`, `forms`, `websocket`, `errors`, `security`, `performance`                                                                                                                                                                 |
| `admin` | Next.js 15 (App Router)| Multi-tenant admin dashboard for moderators and staff.| User/club management, content moderation, alerts, RBAC, real-time analytics.                                   | `auth`, `types`, `contracts`, `logger`, `api-client`, `i18n`, `metrics`, `env`, `state`, `forms`, `websocket`, `errors`, `security`, `performance`                                                                                                                                                                      |
| `api`   | Hono                   | Edge-compatible REST API for clients and integrations.| JWT auth, Zod validation, rate-limiting, CORS, typed endpoints.                                                | `contracts`, `types`, `auth`, `env`, `logger`, `metrics`, `api-client`, `errors`, `security`, `migrations`                                                                                                                                                                                                                 |
| `docs`  | Docusaurus v3.8.1      | Documentation site for developers and users.  | Developer guides, API references, UI previews, multilingual, searchable.                                       | `ui`, `i18n`, `types`, `env`, `api-client`                                                                                                                                                                                                                                                                                   |

### 2.3 Libs Directory

The `libs/` directory contains reusable libraries, organized by scope (`shared` for cross-app utilities, domain-specific for app features).

#### 2.3.1 Shared Libraries

| Library      | Purpose                                                         | Key Files                                                | Consumes (`@ptforum/`)                                        |
| :----------- | :-------------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------------ |
| `types`      | Canonical TypeScript types and branded primitives (e.g., `UserId`, `PostId`, `UserRole`).| `index.ts`, categorized folders (e.g., `users.ts`, `posts.ts`)| None                                                          |
| `contracts`  | Zod schemas for input/output validation (DTOs for users, news, events, memberships, clubs).| `index.ts`, `users/`, `news/`, `events/`, `memberships/`, `clubs/`| `types`                                                       |
| `env`        | Zod-based environment variable validation for frontend, backend, and CI.| `index.ts`, `client.ts`, `server.ts`                   | `types`                                                       |
| `utils`      | Pure functions for formatting, transformations, and math (no side effects).| `index.ts`, categorized folders (e.g., `string.ts`, `date.ts`)| `types`                                                       |
| `logger`     | Centralized logging with console or structured loggers (e.g., Pino).| `index.ts`, `browser.ts`, `server.ts`                  | `env`, `types`                                                |
| `metrics`    | Analytics/event abstraction for Plausible or internal tracking. | `index.ts`, `tracker.ts`, `serverTracker.ts`, `hooks.ts`, `AnalyticsScript.tsx`| `env`, `types`                                                |
| `auth`       | Authentication and session management logic.                    | `core/index.ts` (JWT, TOTP, sessions), `hono/index.ts` (Hono middleware)| `types`, `contracts`, `env`, `logger`, `security`             |
| `i18n`       | Localization framework for SSR and client apps.                 | `core/index.ts` (i18n provider), `locales/en.ts`, `locales/pt.ts`| `types`, `env`                                                |
| `hooks`      | Shared React hooks (e.g., `useAuth`, `useUsers`, `useToggle`, `useFormState`).| `index.ts`, `auth/`, `api/`, `state/`                  | `types`, `contracts`, `api-client`, `auth`, `state`, `forms`  |
| `ui`         | Component library with Tailwind v4 and ShadCN (e.g., `Button`, `Card`).| `index.ts`, `components/`, `theme/`                    | `types`, `i18n`                                               |
| `api-client` | Typed HTTP/WebSocket client for API calls.                      | `index.ts`, `client.ts`, `users.ts`, `news.ts`         | `types`, `contracts`, `env`, `logger`, `errors`, `websocket`  |
| `state`      | Global/server state management with React Query and Zustand.    | `index.ts`, `query/`, `stores/`                        | `types`, `contracts`, `api-client`, `hooks`                   |
| `forms`      | Form handling with React Hook Form and Zod integration.         | `index.ts`, `hooks.ts`, `components.ts`                | `types`, `contracts`, `ui`, `hooks`                           |
| `websocket`  | WebSocket client for real-time updates.                         | `index.ts`, `client.ts`, `hooks.ts`, `types.ts`        | `types`, `api-client`, `env`, `logger`, `errors`              |
| `errors`     | Custom error classes and handling utilities.                    | `index.ts`, `errors.ts`, `utils.ts`                    | `types`, `logger`                                             |
| `security`   | Security utilities for CSRF, XSS, and cookie management.        | `index.ts`, `utils.ts`, `middleware.ts`                | `types`, `env`, `logger`                                      |
| `mocks`      | Mock data and API stubs for testing/development.                | `index.ts`, `data/`, `handlers.ts`                     | `types`, `contracts`, `api-client`                            |
| `performance`| Utilities for lazy loading, image optimization, and monitoring. | `index.ts`, `utils.ts`, `hooks.ts`                     | `types`, `hooks`, `metrics`                                   |
| `migrations` | Database schema migrations for `@ptforum/api`.                  | `index.ts`, `migrations/`, `runner.ts`                 | `types`, `contracts`, `env`, `logger`                         |
| `plugins`    | Framework for third-party extensions (planned).                 | `index.ts`, `core/`, `types/`                          | `types`, `contracts`, `api-client`, `env`                     |

#### 2.3.2 Domain-Specific Libraries

| Library        | Purpose                                                     | Subfolders                  | Consumes (`@ptforum/`)                                                                   |
| :------------- | :---------------------------------------------------------- | :-------------------------- | :--------------------------------------------------------------------------------------- |
| `forum`        | Forum-specific UI and logic for the public website.         | `components/`, `features/`, `data-access/`| `ui`, `hooks`, `api-client`, `state`, `forms`, `websocket`, `content`, `membership`, `performance`|
| `admin`        | Admin-specific UI and logic for the dashboard.              | `components/`, `features/`, `data-access/`| `ui`, `hooks`, `api-client`, `state`, `forms`, `websocket`, `errors`, `security`, `performance`|
| `membership`   | Logic and UI for membership management.                     | `core/`, `features/`, `data-access/`| `types`, `contracts`, `api-client`, `ui`, `hooks`, `integrations/payments`               |
| `content`      | Logic and UI for news and CMS content.                      | `news/`, `ui/`              | `types`, `contracts`, `api-client`, `ui`, `hooks`, `integrations/cms`                    |
| `distribution` | Logic and UI for newsletters and campaigns.                 | `core/`, `ui/`              | `types`, `api-client`, `ui`, `hooks`, `integrations/email`                               |
| `alerts`       | Logic and UI for notifications and warnings.                | `core/`, `ui/`              | `types`, `api-client`, `ui`, `hooks`, `websocket`                                        |
| `integrations` | Wrappers for third-party services.                          | `cms/`, `payments/payfast/`, `email/`, `maps/`| `types`, `contracts`, `api-client`, `env`, `logger`, `security`                          |

### 2.4 Folder Structure Diagram

```
nx-monorepo/
├── apps/
│   ├── forum/
│   ├── admin/
│   ├── api/
│   ├── docs/
├── libs/
│   ├── shared/
│   │   ├── types/
│   │   ├── contracts/
│   │   ├── env/
│   │   ├── utils/
│   │   ├── logger/
│   │   ├── metrics/
│   │   ├── auth/
│   │   │   ├── core/
│   │   │   ├── hono/
│   │   ├── i18n/
│   │   │   ├── core/
│   │   │   ├── locales/
│   │   ├── hooks/
│   │   ├── ui/
│   │   ├── api-client/
│   │   ├── state/
│   │   ├── forms/
│   │   ├── websocket/
│   │   ├── errors/
│   │   ├── security/
│   │   ├── mocks/
│   │   ├── performance/
│   │   ├── migrations/
│   │   ├── plugins/
│   ├── forum/
│   │   ├── components/
│   │   ├── features/
│   │   ├── data-access/
│   ├── admin/
│   │   ├── components/
│   │   ├── features/
│   │   ├── data-access/
│   ├── membership/
│   │   ├── core/
│   │   ├── features/
│   │   ├── data-access/
│   ├── content/
│   │   ├── news/
│   │   ├── ui/
│   ├── distribution/
│   │   ├── core/
│   │   ├── ui/
│   ├── alerts/
│   │   ├── core/
│   │   ├── ui/
│   ├── integrations/
│   │   ├── cms/
│   │   ├── payments/
│   │   │   ├── payfast/
│   │   ├── email/
│   │   ├── maps/
├── .editorconfig
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── nx.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── vitest.config.ts
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .env.example
├── CODEOWNERS
├── .husky/
│   ├── pre-commit
│   ├── commit-msg
├── .github/
│   ├── workflows/
│   │   ├── build.yml
│   │   ├── lint.yml
│   │   ├── test.yml
│   │   ├── deploy.yml
```

-----

## ⚙️ 3. Environment Setup

### 3.1 Prerequisites

Before you begin, ensure you have the following installed:

  * **Node.js**: v20 or higher (use `.nvmrc` for version alignment)
  * **PNPM**: v9 or higher (`npm install -g pnpm`)
  * **Nx CLI**: Install globally (`pnpm add -g nx`) or use `pnpm dlx nx`
  * **Git**: For version control
  * **IDE**: VSCode recommended with extensions (see below)

### 3.2 Install Dependencies

Navigate to the monorepo root and run:

```bash
pnpm install
```

### 3.3 Start Projects Locally

To run projects in development mode:

| Command           | Purpose                                  |
| :---------------- | :--------------------------------------- |
| `nx serve forum`  | Runs the public website at `http://localhost:3000` |
| `nx serve admin`  | Runs the admin dashboard at `http://localhost:3001` |
| `nx serve api`    | Runs the Hono API at `http://localhost:8787` |
| `nx serve docs`   | Runs the Docusaurus site at `http://localhost:3002` |

### 3.4 VSCode Setup

Install the following extensions in VSCode for an optimal development experience:

  * **Nx Console**: For Nx command integration
  * **ESLint**: For linting feedback
  * **Prettier**: For auto-formatting
  * **Tailwind CSS IntelliSense**: For Tailwind autocompletion
  * **Vitest**: For test running/debugging
  * **Playwright**: For E2E test support

Add the following to your `.vscode/settings.json` file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "nx.workspaceLayout": {
    "appsDir": "apps",
    "libsDir": "libs"
  }
}
```

### 3.5 Environment Variables

Copy `.env.example` to `.env` and populate it with the required values (e.g., Sanity API keys, PayFast credentials). The `@ptforum/env` library will validate these variables.

Example `.env` file:

```
NEXT_PUBLIC_API_URL=http://localhost:8787
SANITY_PROJECT_ID=abc123
PLAUSIBLE_DOMAIN=portugueseforum.org.za
PAYFAST_MERCHANT_ID=123456
```

**Important**: Secrets for production environments should be stored in Vercel Environment Variables or Cloudflare Secrets, **not** directly in `.env`.

-----

## 🧪 4. Tooling & Workspace Configuration

### 4.1 Nx CLI Commands

Here are some commonly used Nx CLI commands:

| Command             | Purpose                                     |
| :------------------ | :------------------------------------------ |
| `nx serve <project>`| Runs a project in development mode          |
| `nx build <project>`| Builds a project for production             |
| `nx test <project>` | Runs unit and integration tests             |
| `nx lint <project>` | Lints code for errors and style issues      |
| `nx format:write`   | Formats code with Prettier                  |
| `nx affected:<target>`| Runs a target for changed projects          |
| `nx graph`          | Visualizes the project dependency graph     |

### 4.2 Testing Setup

  * **Framework**: **Vitest** for unit and integration tests, with **React Testing Library** for UI components.
  * **E2E Testing**: **Playwright** for critical user flows (e.g., signup, moderation).
  * **Coverage**: A minimum of **80% coverage** is enforced in CI.
  * **Mocks**: Use `@ptforum/mocks` for API stubs and test data.

**Example unit test**:

```typescript
// apps/admin/components/Dashboard.spec.tsx
import { render, screen } from '@testing-library/react'
import { Dashboard } from './Dashboard'

describe('Dashboard', () => {
  it('renders user count', () => {
    render(<Dashboard userCount={10} />)
    expect(screen.getByText('Total Users: 10')).toBeInTheDocument()
  })
})
```

**Example E2E test**:

```typescript
// apps/forum/e2e/signup.spec.ts
import { test, expect } from '@playwright/test'

test('user can sign up', async ({ page }) => {
  await page.goto('/signup')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="password"]', 'secure123')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/dashboard')
})
```

### 4.3 Linting and Formatting

  * **ESLint**: Extends Nx presets with custom rules for TypeScript, React, and accessibility.
  * **Prettier**: Enforces consistent formatting (2-space tabs, single quotes, trailing commas).
  * **Husky**: Pre-commit hooks are configured for linting and formatting.
  * **Commitlint**: Enforces conventional commit messages (e.g., `feat: add user signup`).

**Example `.husky/pre-commit` hook**:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
pnpm nx format:write
pnpm nx affected:lint
pnpm nx affected:test
```

### 4.4 Package Scripts

The `package.json` includes several convenience scripts:

```json
{
  "scripts": {
    "start": "nx run-many --target=serve --all",
    "build": "nx run-many --target=build --all",
    "test": "nx run-many --target=test --all",
    "lint": "nx run-many --target=lint --all",
    "format": "nx format:write",
    "graph": "nx graph",
    "migrate": "nx run api:migrate",
    "seed": "nx run api:seed",
    "analyze": "nx run forum:bundle-analyze",
    "e2e": "nx run forum:e2e"
  }
}
```

-----

## 📦 5. Dependency Graph & Affected Workflows

### 5.1 Nx Dependency Graph

Visualize project dependencies by running:

```bash
nx graph
```

The dependency graph enforces clear boundaries:

  * `scope:shared` libraries can only depend on other shared libraries.
  * Applications (`scope:forum`, `scope:admin`) can depend on shared and domain-specific libraries.
  * Domain-specific libraries (e.g., `scope:membership`) **cannot** depend on applications.

### 5.2 Affected Workflows

Nx's "affected" commands allow you to run tasks only for projects that have been changed or are dependent on changed projects:

  * `nx affected:build`
  * `nx affected:test`
  * `nx affected:lint`

Benefits of affected workflows include:

  * **Faster CI pipelines**
  * **Incremental builds**
  * **Clear dependency tracking**

-----

## 🏗 6. Creating Apps & Libraries

### 6.1 Generating a New App

To generate a new Next.js application:

```bash
nx g @nx/next:app new-app --tags=scope:new-app,type:app --directory=apps/new-app
```

### 6.2 Generating a Shared Library

To generate a new shared TypeScript library:

```bash
nx g @nx/js:lib new-lib --directory=libs/shared --bundler=none --unitTestRunner=vitest --tags=scope:shared,type:lib
```

### 6.3 Naming Conventions

  * **Apps**: `scope:<app-name>`, `type:app` (e.g., `scope:forum`, `type:app`)
  * **Libraries**: `scope:shared` or `scope:<domain>`, `type:lib` (e.g., `scope:membership`, `type:lib`)
  * **Files**: **Kebab-case** for files (e.g., `use-auth.ts`), **PascalCase** for components (e.g., `DataTable.tsx`)

### 6.4 Path Aliases

Path aliases are defined in `tsconfig.base.json` to simplify imports:

```json
{
  "compilerOptions": {
    "paths": {
      "@ptforum/types": ["libs/shared/types/src/index.ts"],
      "@ptforum/contracts": ["libs/shared/contracts/src/index.ts"],
      "@ptforum/*": ["libs/shared/*/src/index.ts"]
    }
  }
}
```

-----

## 🔀 7. Branching & CI/CD

### 7.1 Branching Strategy

We follow a structured branching strategy:

  * `main`: Production-ready code
  * `dev`: Integration branch for testing
  * `feature/`: New features or enhancements
  * `fix/`: Bug fixes
  * `chore/`: Maintenance tasks

### 7.2 CI/CD Pipeline

  * **Tools**: **GitHub Actions** for CI, **Vercel** for `forum`, `admin`, `docs`, and **Cloudflare Workers** for `api`.
  * **Workflows**:
      * `build.yml`: Builds all affected projects
      * `lint.yml`: Runs ESLint on changed files
      * `test.yml`: Runs Vitest and Playwright tests with coverage
      * `deploy.yml`: Deploys to Vercel/Cloudflare with rollback support

**Example `build.yml`**:

```yaml
name: Build
on:
  push:
    branches: [main, dev]
  pull_request:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: pnpm install
      - run: pnpm nx affected:build
```

**Example `deploy.yml`**:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: pnpm install
      - run: pnpm nx affected:build
      - name: Deploy to Vercel
        run: npx vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
      - name: Deploy API to Cloudflare
        run: npx wrangler deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

### 7.3 Deployment

  * **Vercel**: Hosts `forum`, `admin`, and `docs` with automatic scaling and rollback capabilities.
  * **Cloudflare Workers**: Hosts `api` for edge performance, with `wrangler rollback` support for failures.
  * **Environments**: Separate staging (`dev`) and production (`main`) environments with distinct `.env` files.
  * **Secrets**: Managed via Vercel Environment Variables or Cloudflare Secrets.

-----

## 🛠 8. Scripts & Utilities

### 8.1 Custom Scripts

The `package.json` includes custom scripts for common development tasks:

```json
{
  "scripts": {
    "start": "nx run-many --target=serve --all",
    "build": "nx run-many --target=build --all",
    "test": "nx run-many --target=test --all",
    "lint": "nx run-many --target=lint --all",
    "format": "nx format:write",
    "graph": "nx graph",
    "migrate": "nx run api:migrate",
    "seed": "nx run api:seed",
    "analyze": "nx run forum:bundle-analyze",
    "e2e": "nx run forum:e2e"
  }
}
```

### 8.2 Nx Task Orchestration

You can run multiple tasks for specific projects using `nx run-many`:

```bash
nx run-many --target=build --projects=forum,admin
```

### 8.3 Developer Utilities

| Command           | Purpose                                              |
| :---------------- | :--------------------------------------------------- |
| `pnpm analyze`    | Runs bundle analysis for `@ptforum/forum`            |
| `pnpm migrate`    | Applies database migrations for `@ptforum/api`       |
| `pnpm seed`       | Seeds the database with test data                    |
| `pnpm e2e`        | Runs Playwright E2E tests                            |

-----

## 🛑 9. Security & Compliance

### 9.1 Security Practices

  * **Authentication**: `@ptforum/auth` uses JWT, TOTP, and secure sessions.
  * **Validation**: `@ptforum/contracts` enforces strict Zod schemas for data validation.
  * **Security Utilities**: `@ptforum/security` provides CSRF protection, XSS sanitization, and secure cookie management.
  * **Secrets**: Store in Vercel/Cloudflare Secrets for production, not in `.env`.

### 9.2 Compliance

  * **GDPR/POPIA**: User data in `@ptforum/membership` and `@ptforum/payments` is anonymized and opt-in.
  * **Audit Logging**: `@ptforum/logger` tracks administrative actions for auditing purposes.
  * **Data Retention**: Policies defined in `@ptforum/docs` for user data deletion.

-----

## 🧪 10. Testing & Quality Assurance

### 10.1 Testing Strategy

Our testing strategy encompasses:

  * **Unit Tests**: **Vitest** for components, hooks, and utilities (minimum 80% coverage).
  * **Integration Tests**: To test API endpoints and library interactions.
  * **E2E Tests**: **Playwright** for critical user flows (signup, moderation, payment).
  * **Mocks**: `@ptforum/mocks` for API stubs and test data.

### 10.2 Test Commands

| Command                     | Purpose                              |
| :-------------------------- | :----------------------------------- |
| `nx test <project>`         | Runs unit/integration tests          |
| `nx test <project> --coverage`| Generates coverage report            |
| `nx e2e forum`              | Runs Playwright E2E tests            |

### 10.3 Example E2E Test Suite

```typescript
// apps/forum/e2e/signup.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Signup Flow', () => {
  test('user can sign up successfully', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'secure123')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/dashboard')
  })

  test('displays error for invalid email', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('input[name="email"]', 'invalid')
    await page.fill('input[name="password"]', 'secure123')
    await page.click('button[type="submit"]')
    await expect(page.getByText('Invalid email')).toBeVisible()
  })
})
```

-----

## 📂 11. Documentation & Contribution

### 11.1 Documentation Structure

The `@ptforum/docs` application hosts detailed guides, organized as follows:

  * `introduction.md`: Monorepo overview
  * `folder-structure.md`: File and project layout
  * `environment-setup.md`: Setup instructions
  * `workspace-tooling.md`: Tooling and CLI usage
  * `dependency-graph.md`: Nx graph and affected workflows
  * `generators-and-libs.md`: Creating apps/libs
  * `branching-and-ci.md`: Branching and CI/CD
  * `scripts.md`: Custom scripts and utilities
  * `troubleshooting.md`: Common issues and solutions
  * `security-compliance.md`: Security and compliance guidelines
  * `testing.md`: Testing strategy and examples
  * `api.md`: Public API reference (Swagger/Redoc planned)

### 11.2 Contribution Guidelines

Refer to `CONTRIBUTING.md` for full details. Key points include:

  * **Onboarding Checklist**:
      * Clone the repo: `git clone https://github.com/portugueseforum/monorepo`
      * Install dependencies: `pnpm install`
      * Copy `.env.example` to `.env` and configure (e.g., Sanity, PayFast)
      * Run `nx graph` to understand dependencies
      * Start a project: `nx serve forum`
      * Set up third-party accounts (Sanity, PayFast, Cloudflare) as needed
  * **Commit Messages**: Use conventional commits (e.g., `feat(auth): add TOTP support`).
  * **Pull Requests**: Include tests, update documentation, and assign reviewers from `CODEOWNERS`.
  * **Code Standards**: Follow ESLint, Prettier, and TypeScript rules; ensure WCAG 2.1 accessibility.

### 11.3 Versioning

  * **Libraries**: Use **semantic versioning** (e.g., `1.0.0`) with Changesets for changelog automation.
  * **Apps**: Deployed independently with version tags in CI.
  * **Changelog**: Maintained in `CHANGELOG.md` for major releases.

**Example Changeset commands**:

```bash
pnpm changeset
pnpm changeset version
```

### 11.4 Deprecation Strategy

  * Mark deprecated features in code with JSDoc (`@deprecated`) and in `@ptforum/docs`.
  * Provide migration guides in `@ptforum/docs` for breaking changes.
  * Remove deprecated code after two minor releases.

-----

## 🗺 12. Troubleshooting & Common Pitfalls

| Issue                  | Solution                                                              |
| :--------------------- | :-------------------------------------------------------------------- |
| Outdated lockfile      | Run `pnpm install` to regenerate `pnpm-lock.yaml`.                    |
| Lint errors            | Run `nx affected:lint --fix` or check `.eslintrc.json`.               |
| Build failures         | Verify `wrangler.toml` for `@ptforum/api` or `.env` settings.         |
| Test failures          | Check `@ptforum/mocks` setup or increase Vitest timeout.              |
| Dependency conflicts   | Run `pnpm dedupe` or check `pnpm-workspace.yaml`.                     |
| Nx cache issues        | Clear the cache with `nx reset`.                                      |

-----

## 🌍 13. Community & Extensibility

### 13.1 Public API

A subset of `@ptforum/api` endpoints will be exposed for external integrations, documented in `@ptforum/docs/api` using Swagger/Redoc. Example endpoints:

  * `GET /api/public/news`
  * `GET /api/public/events`

### 13.2 Plugin System

The `@ptforum/plugins` library (planned for Q1 2026) will allow third-party extensions, such as custom CMS blocks or payment gateways. High-level design:

  * **Plugin Types**: UI components, API hooks, data processors
  * **Registration**: Plugins register via a manifest file (`plugin.json`) and integrate with `@ptforum/api-client`.
  * **Security**: Plugins will run in a sandboxed environment with restricted API access.

### 13.3 Community Contributions

Contributions are highly encouraged via GitHub issues, pull requests, and discussions. Please refer to `CONTRIBUTING.md` for detailed guidelines.

-----

## 🔗 14. Resources

  * **Nx Documentation**: [nx.dev](https://nx.dev)
  * **Next.js Documentation**: [nextjs.org](https://nextjs.org)
  * **Hono Documentation**: [hono.dev](https://hono.dev)
  * **Docusaurus Documentation**: [docusaurus.io](https://docusaurus.io)
  * **PFSA Website**: [portugueseforum.org.za](https://portugueseforum.org.za)
  * **GitHub Repository**: [github.com/portugueseforum/monorepo](https://github.com/portugueseforum/monorepo)

-----
