---
sidebar_position: 2
title: Folder Structure
description: Modular folder layout and file roles in the @ptforum Nx monorepo
---

# 📁 Folder Structure Explained

This section describes the architecture of the Portuguese Forum’s Nx Monorepo — from top-level configuration files to app and library structures — helping contributors navigate and collaborate confidently.

---

## 🗂 2.1 Top-Level Files & Configuration

These files govern the core behavior of the monorepo, from formatting to dependency resolution and CI workflows.

| File | Purpose |
|------|---------|
| `nx.json` | Nx project graph setup, caching, and tag-based boundaries |
| `tsconfig.base.json` | Shared TypeScript config with strict rules and path aliases (e.g., `@ptforum/*`) |
| `pnpm-workspace.yaml` | Declares workspace boundaries for apps and libs |
| `.eslintrc.json` | Linting rules for TypeScript, React, accessibility |
| `.prettierrc`, `.prettierignore` | Code formatting rules (Prettier) |
| `vitest.config.ts` | Central Vitest setup for unit/integration testing |
| `.editorconfig` | IDE consistency (indentation, EOF, charset) |
| `.gitignore` | Excludes `.env`, builds, `node_modules`, etc. |
| `.dockerignore`, `Dockerfile` | Supports containerization (used in API app, CI/CD) |
| `README.md` | Intro to the repo and quick start |
| `CONTRIBUTING.md` | Onboarding checklist, commit conventions |
| `LICENSE` | Project license (e.g. MIT) |
| `.env.example` | Example `.env` with secure defaults |
| `CODEOWNERS` | Defines reviewers for PR auto-assignment |
| `.husky/` | Git hooks (`pre-commit`, `commit-msg`) |
| `.github/workflows/` | CI pipelines for linting, testing, deploy |

---

## 📂 2.2 `apps/` – Deployable Applications

Each app is self-contained with its own runtime, routing, and features.

| App | Framework | Purpose | Highlights | Consumes |
|-----|-----------|---------|------------|----------|
| `forum` | **Next.js 15** | Public website | Club listings, gamified tools, Sanity CMS | `auth`, `api-client`, `state`, `forms`, `i18n`, `ui` |
| `admin` | **Next.js 15** | Internal dashboard | RBAC, moderation, analytics | `auth`, `state`, `metrics`, `logger`, `errors` |
| `api` | **Hono** | REST API (Edge-ready) | JWT auth, Zod validation, typed routes | `contracts`, `security`, `env`, `migrations` |
| `docs` | **Docusaurus 3.8.1** | Documentation site | Developer guides, multilingual, searchable | `ui`, `i18n`, `types`, `env` |

> Each app consumes only what it needs from the `libs/` directory for lean builds and dependency separation.

---

## 🧱 2.3 `libs/` – Shared and Domain Libraries

Libraries are grouped into:

- 🔁 **Shared**: Used across multiple apps
- 🧩 **Domain-specific**: Scoped to features or modules

### 2.3.1 Shared Libraries

| Library | Description | Depends On |
|---------|-------------|------------|
| `types` | Central TS types (e.g. `UserId`, `PostId`) | — |
| `contracts` | Zod DTO schemas | `types` |
| `env` | Zod validation for `.env` | `types` |
| `utils` | Pure JS utilities (formatting, math) | `types` |
| `logger` | Logging interface (Pino, console) | `env`, `types` |
| `metrics` | Analytics abstraction | `env`, `types` |
| `auth` | JWT sessions, OTP, guards | `contracts`, `security` |
| `i18n` | Localization framework | `env`, `types` |
| `hooks` | Custom React hooks | `contracts`, `auth`, `forms` |
| `ui` | ShadCN-based component library | `i18n`, `types` |
| `api-client` | Typed HTTP/WebSocket clients | `contracts`, `env` |
| `state` | React Query/Zustand setup | `api-client`, `hooks` |
| `forms` | React Hook Form wrappers | `ui`, `hooks`, `contracts` |
| `websocket` | WebSocket client abstractions | `api-client`, `logger` |
| `errors` | Custom error classes | `logger`, `types` |
| `security` | CSRF/XSS helpers | `env`, `logger` |
| `mocks` | API stubs, mock data | `contracts`, `api-client` |
| `performance` | Lazy loading, observability | `hooks`, `metrics` |
| `migrations` | DB schema changes | `logger`, `env` |
| `plugins` | Third-party extension framework (Planned) | `api-client`, `contracts` |

---

### 2.3.2 Domain Libraries

| Library | Purpose | Substructure | Depends On |
|---------|---------|--------------|------------|
| `forum` | Public site logic & UI | `components/`, `features/`, `data-access/` | `hooks`, `forms`, `content` |
| `admin` | Dashboard logic & UI | `components/`, `features/`, `data-access/` | `auth`, `errors`, `performance` |
| `membership` | Member data + UI | `core/`, `features/` | `api-client`, `forms` |
| `content` | News, CMS, articles | `news/`, `ui/` | `ui`, `integrations/cms` |
| `distribution` | Newsletters & mailers | `core/`, `ui/` | `email`, `hooks` |
| `alerts` | Notifications UI | `core/`, `ui/` | `websocket`, `api-client` |
| `integrations` | CMS, Payfast, Email | `cms/`, `payments/`, `maps/` | `logger`, `env`, `security` |

---

## 🧭 2.4 Monorepo Diagram

```txt
ptforum-monorepo/
├── apps/
│   ├── forum/
│   ├── admin/
│   ├── api/
│   └── docs/
├── libs/
│   ├── shared/
│   │   ├── types/
│   │   ├── contracts/
│   │   └── ...
│   ├── forum/
│   ├── admin/
│   └── integrations/
├── .github/workflows/
├── .husky/
├── nx.json
├── tsconfig.base.json
├── pnpm-workspace.yaml
├── README.md
└── ...
