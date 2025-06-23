---
sidebar_position: 8
title: Scripts & Utilities
description: Developer scripts, CLI orchestration, and database tools used in the @ptforum monorepo
---

# 🛠 8. Scripts & Utilities

This page outlines the key scripts and utilities used in the @ptforum Nx monorepo to simplify development, testing, deployments, and infrastructure setup.

---

## 🔧 8.1 Custom Scripts

Defined in the root `package.json`:

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
````

| Script         | Description                                        |
| -------------- | -------------------------------------------------- |
| `pnpm start`   | Runs all apps (`forum`, `admin`, `api`, `docs`)    |
| `pnpm build`   | Builds all apps and libraries                      |
| `pnpm test`    | Runs all unit/integration tests using Vitest       |
| `pnpm lint`    | Lints all projects using ESLint                    |
| `pnpm format`  | Formats all files using Prettier                   |
| `pnpm graph`   | Opens interactive Nx dependency graph              |
| `pnpm migrate` | Applies database migrations for `@ptforum/api`     |
| `pnpm seed`    | Seeds dev database with test data                  |
| `pnpm analyze` | Analyzes bundle size for `@ptforum/forum`          |
| `pnpm e2e`     | Runs E2E tests via Playwright for `@ptforum/forum` |

---

## ⚙️ 8.2 Nx Task Orchestration

Use `nx run-many` to run tasks across multiple projects:

```bash
nx run-many --target=build --projects=forum,admin
```

Other useful commands:

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `nx affected:build` | Builds only affected apps/libs based on Git diff |
| `nx affected:test`  | Runs tests for changed projects                  |
| `nx affected:lint`  | Lints only affected files                        |
| `nx format:write`   | Formats changed files                            |
| `nx graph`          | Visualizes project dependency graph              |

> 🧠 Use these in CI to speed up builds and focus on relevant changes.

---

## 🧰 8.3 Developer Utilities

These helper commands support infrastructure and dev workflows.

| Utility             | Command        | Description                                      |
| ------------------- | -------------- | ------------------------------------------------ |
| **Bundle Analysis** | `pnpm analyze` | Runs webpack analysis for `@ptforum/forum`       |
| **Migrations**      | `pnpm migrate` | Applies latest DB migrations using custom runner |
| **Seeding**         | `pnpm seed`    | Seeds dev database with mock content             |
| **E2E Testing**     | `pnpm e2e`     | Runs full E2E suite using Playwright             |

---

## 📦 Related Pages

* [Tooling Setup](./4-tooling.md)
* [CI/CD Pipelines](./7-ci-cd.md)
* [Environment Setup](./3-environment.md)
