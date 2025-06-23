---
id: intro
title: Getting Started
sidebar_position: 1
---

# Welcome to the Portuguese Forum Docs

This documentation site is built with [Docusaurus](https://docusaurus.io) and serves as the **central reference** for developers working in the Portuguese Forum monorepo.

> 💡 If you're new here, start with the structure overview, then follow the steps below to preview the docs locally.

---

## 🚀 Quick Start

To get your local dev environment running:

```bash
cd apps/docs
pnpm install       # or yarn / npm install
pnpm start         # or yarn start / npm run start
````

Then open your browser to:
👉 [`http://localhost:3000`](http://localhost:3000)

---

## 📦 Project Structure

This docs app lives inside a modular Nx monorepo.

| Path              | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `apps/docs/`      | Docusaurus app (this site)                  |
| `libs/*/`         | Shared business logic, contracts, utilities |
| `apps/forum/`     | Frontend app (React + ShadCN)               |
| `libs/ui/`        | Design system components                    |
| `libs/contracts/` | Zod schemas + validation for APIs           |

---

## 🛠 Tooling & Requirements

Make sure you have the following installed:

* [Node.js](https://nodejs.org/en/download/) **v20+**
* [`pnpm`](https://pnpm.io) (preferred) or `yarn` / `npm`
* [Nx CLI](https://nx.dev) (optional for generators)

```bash
npm install -g nx
```

---

## 📖 Editing Documentation

Edit any `.md` or `.mdx` file in `apps/docs/docs/`:

* This page: `docs/intro.md`
* New pages: Create `.md(x)` files and register them in `sidebars.ts`

Docusaurus will auto-reload your changes in the browser ✨

---

## 🔗 Useful Commands

```bash
pnpm nx run docs:serve     # Run locally
pnpm nx run docs:build     # Static export
pnpm nx run docs:lint      # Lint markdown / config
```

---

## 🙋 Need Help?

Reach out in `#dev-docs` on Slack or check the [`@ptforum/docs`](https://github.com/ptforum) package for shared configs and design patterns.

---
