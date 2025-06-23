---
sidebar_position: 7
title: Branching & CI/CD
description: Git workflows, CI pipelines, deployment strategies for the @ptforum monorepo
---

# 🔀 Branching & CI/CD

This section documents the branching model and continuous integration/deployment (CI/CD) pipelines for the @ptforum Nx monorepo, including how environments are managed and secured.

---

## 🌿 7.1 Branching Strategy

We follow a simplified **Git Flow-inspired** strategy for collaborative development:

| Branch | Purpose |
|--------|---------|
| `main` | Stable, production-ready code |
| `dev` | Integration branch for QA and testing |
| `feature/*` | New features and functionality |
| `fix/*` | Bug fixes or patches |
| `chore/*` | Internal maintenance, dependencies, or tooling changes |

> 🔖 Use semantic commit messages and always open a PR into `dev` or `main` with proper labels and reviewers.

---

## ⚙️ 7.2 CI/CD Pipeline

CI/CD is powered by **GitHub Actions** and deploys to **Vercel** (for frontend/docs) and **Cloudflare Workers** (for the API).

### 🛠 Tools Used

| Tool | Purpose |
|------|---------|
| **GitHub Actions** | CI workflows for linting, testing, building, deploying |
| **Vercel** | Deploys `forum`, `admin`, `docs` (auto-rollbacks, env vars) |
| **Cloudflare Workers** | Deploys `api` with edge performance |
| **Wrangler** | CLI for deploying to Cloudflare Workers |

---

### 📜 Workflow Files

#### 🔧 `build.yml`

Runs affected builds on PRs and pushes to `main`/`dev`.

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
````

#### 🧪 `test.yml`

Runs tests (unit, integration, E2E) with coverage report.

```yaml
name: Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: pnpm install
      - run: pnpm nx affected:test --coverage
```

#### ✅ `lint.yml`

Lints changed files.

```yaml
name: Lint
on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: pnpm install
      - run: pnpm nx affected:lint
```

#### 🚀 `deploy.yml`

Deploys to **Vercel** and **Cloudflare** when changes hit `main`.

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

---

## 🌍 7.3 Deployment Strategy

| Environment             | Hosting                              | Apps             |
| ----------------------- | ------------------------------------ | ---------------- |
| **Staging** (`dev`)     | Vercel (Preview), Cloudflare Preview | Pre-prod testing |
| **Production** (`main`) | Vercel (Prod), Cloudflare Workers    | Live platform    |

### 🔒 Secrets & Environment Variables

* Stored in **Vercel Project Settings** (frontend)
* Stored in **Cloudflare Secrets** (API)
* Local `.env` files for dev (based on `.env.example`)
* Use `@ptforum/env` for strict runtime validation

---

## 📬 Deployment Tips

* Always test on `dev` before merging to `main`
* Use `nx affected:*` for selective deploys
* Monitor deployments via Vercel Dashboard & Wrangler CLI
* Tag PRs with `type:build`, `type:ci`, or `type:deploy` as appropriate

---

## 🧭 Related Pages

* [Tooling Configuration](./4-tooling.md)
* [Environment Setup](./3-environment.md)
* [Dependency Graph](./5-dependency.md)
