---
sidebar_position: 3
title: Environment Setup
description: Local setup guide, tooling, VSCode configuration, and environment variables for the Portuguese Forum monorepo
---

# ⚙️ Environment Setup

This guide walks you through configuring your local development environment for contributing to the Portuguese Forum Nx Monorepo.

---

## 🧰 3.1 Prerequisites

Ensure the following are installed:

| Tool | Version | Notes |
|------|---------|-------|
| **Node.js** | `v20.x` or higher | Auto-managed via `.nvmrc` |
| **PNPM** | `v9.x` or higher | `npm install -g pnpm` |
| **Nx CLI** | Global or via `pnpm dlx` | `pnpm add -g nx` or use `npx nx` |
| **Git** | Latest | GitHub integration |
| **VSCode** | Recommended | + Extensions listed below |

> 📘 *Run `nvm use` in the project root to align your Node version with `.nvmrc`.*

---

## 📦 3.2 Install Dependencies

From the project root:

```bash
pnpm install
````

This installs all apps and libraries declared in `pnpm-workspace.yaml`.

---

## 🧪 3.3 Run Apps Locally

| Command          | App          | Localhost Port          | Description                     |
| ---------------- | ------------ | ----------------------- | ------------------------------- |
| `nx serve forum` | `apps/forum` | `http://localhost:3000` | Community-facing public site    |
| `nx serve admin` | `apps/admin` | `http://localhost:3001` | Admin dashboard                 |
| `nx serve api`   | `apps/api`   | `http://localhost:8787` | REST API server (Hono)          |
| `nx serve docs`  | `apps/docs`  | `http://localhost:3002` | Documentation site (Docusaurus) |

> Use `nx graph` to visualize app and library dependencies.

---

## 🧠 3.4 VSCode Configuration

### 🔌 Recommended Extensions

| Extension                     | Purpose                |
| ----------------------------- | ---------------------- |
| **Nx Console**                | GUI for Nx commands    |
| **ESLint**                    | Inline linting         |
| **Prettier**                  | Formatting             |
| **Tailwind CSS IntelliSense** | Utility class hints    |
| **Vitest**                    | Test runner UI         |
| **Playwright**                | End-to-end test runner |

### ⚙️ `.vscode/settings.json`

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

> 💡 Customize further in `.vscode/launch.json` or `.vscode/tasks.json` for debugging support.

---

## 🔐 3.5 Environment Variables

### 📁 Setup Steps

1. Duplicate the template:

```bash
cp .env.example .env
```

2. Populate the new `.env` file with secrets and service config:

```env
NEXT_PUBLIC_API_URL=http://localhost:8787
SANITY_PROJECT_ID=abc123
PLAUSIBLE_DOMAIN=portugueseforum.org.za
PAYFAST_MERCHANT_ID=123456
```

### 🔍 Validation

* Environment variables are validated with Zod via `@ptforum/env`
* Missing or malformed values throw runtime errors during startup

### ☁️ Production Secrets

Use provider-specific secret managers instead of `.env` in production:

| Platform               | Usage                                    |
| ---------------------- | ---------------------------------------- |
| **Vercel**             | Project Settings → Environment Variables |
| **Cloudflare Workers** | `wrangler.toml` or `secrets` command     |
| **GitHub Actions**     | Configure via repo → Settings → Secrets  |

> 🛡 Do **not** commit `.env` files to version control.

---

## 🔗 Related Pages

* [📁 Folder Structure](./2-folder-structure.md)
* [📘 Documentation Standards](../company-information/docs-standards.md)
* [🧱 API & Auth Setup](../architecture/authentication.md)
