---
sidebar_position: 14
title: Resources & Glossary
description: Official documentation links, platform resources, and key terminology used in the Portuguese Forum monorepo
---

# 📚 14. Resources & Glossary

This section provides links to key documentation and defines frequently used terms across the @ptforum Nx monorepo.

---

## 🔗 Resources

| Resource | Description |
|----------|-------------|
| [Nx Documentation](https://nx.dev/) | Core tool for managing the monorepo architecture, builds, and caching |
| [Next.js](https://nextjs.org/) | React framework powering the `forum` and `admin` apps |
| [Hono](https://hono.dev/) | Fast web framework for the `api` app (Edge-first, TypeScript native) |
| [Docusaurus](https://docusaurus.io/) | Powers the `docs` app for documentation and internal guides |
| [PFSA Website](https://portugueseforum.org.za/) | Public-facing site of the Portuguese Forum of South Africa |
| [Monorepo GitHub](https://github.com/portugueseforum/monorepo) | Source code and collaboration repository |

---

## 📖 Glossary

| Term | Definition |
|------|------------|
| **Nx** | A monorepo tool that provides code generation, task orchestration, dependency graphing, and caching. |
| **Monorepo** | A single repository containing multiple projects (apps and libs), enabling shared tooling and cohesive development. |
| **App Router** | Next.js 15 routing model used in `forum` and `admin` apps. |
| **Library (lib)** | A reusable module (e.g., types, auth, forms) consumed by one or more applications. |
| **Scope** | A tag defining logical grouping (e.g., `scope:shared`, `scope:admin`) used in lint rules and graphs. |
| **Zod** | A TypeScript-first schema validation library used for runtime checks and input/output enforcement. |
| **TOTP** | Time-based One-Time Password, used in two-factor authentication (2FA). |
| **CI/CD** | Continuous Integration / Continuous Deployment pipelines powered by GitHub Actions, Vercel, and Cloudflare Workers. |
| **Playwright** | E2E test runner used to simulate full user flows in `forum`, `admin`, and more. |
| **Vitest** | A fast unit test framework used for components, hooks, and utilities in the monorepo. |
| **Sanity** | The headless CMS used for content and media in the public website. |
| **Plausible** | A lightweight, privacy-friendly analytics platform used via `@ptforum/metrics`. |
| **Vercel** | Deployment platform for frontend apps (forum, admin, docs) with automatic preview and rollback. |
| **Cloudflare Workers** | Edge computing environment where `@ptforum/api` is deployed. |
| **Changesets** | CLI tool for managing library versioning and changelogs in coordinated releases. |

---

## 🧭 Related Pages

- [Introduction](./1-introduction.md)
- [Tooling Configuration](./4-tooling.md)
- [Documentation & Contribution](./11-documentation.md)