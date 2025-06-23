---
sidebar_position: 3
title: Stack & Tooling
description: Technologies, frameworks, and packages powering the public website
---

# ⚙️ Stack & Tooling

The `@ptforum/forum` application is architected for **performance**, **scalability**, and **developer efficiency**, using modern web standards and a modular Nx structure.

---

## 🧰 Core Tech Stack

| **Layer**       | **Technology**                         | **Notes**                                  |
|------------------|----------------------------------------|---------------------------------------------|
| Frontend         | Next.js 15 (App Router, Vite)          | Edge-ready rendering with RSC support       |
| Styling          | Tailwind CSS v4 + ShadCN (via `@ptforum/ui`) | Utility-first, accessible design system     |
| CMS              | Sanity Studio (Portable Text)          | Structured content authoring, multilingual  |
| State Mgmt       | React Context (minimal client state)   | Quiz progress, UI toggles, etc.             |
| Deployment       | Vercel                                  | ISR, Edge functions, automatic rollbacks    |
| Analytics        | Plausible via `@ptforum/metrics`       | Privacy-first page + event tracking         |
| Validation       | Zod via `@ptforum/contracts`           | Strong type-safe validation                 |
| Environment      | `@ptforum/env`                         | Centralized .env schema & parsing           |
| Localization     | `@ptforum/i18n`                        | SSR-compatible with Next.js                 |

---

## 📦 Integrated Libraries

| **Library**            | **Purpose**                          |
|------------------------|--------------------------------------|
| `@ptforum/ui`          | Component system with Tailwind & ShadCN |
| `@ptforum/types`       | Canonical data models (Post, Club, Event) |
| `@ptforum/contracts`   | Zod validation schemas               |
| `@ptforum/api-client`  | Typed API fetch & mutations          |
| `@ptforum/i18n`        | Localization framework               |
| `@ptforum/utils`       | Utility functions (e.g., slugify)    |
| `@ptforum/metrics`     | Pageview/event tracking              |
| `@ptforum/logger`      | Logging abstraction (console, errors)|
| `@ptforum/auth`        | JWT login & client auth guard logic  |

---

## 🌍 Platform Features

| Feature           | Details                                                       |
|------------------|---------------------------------------------------------------|
| **Edge-first**    | API and page rendering optimized via Vercel Edge + Hono       |
| **Bilingual**     | English and Portuguese via CMS + runtime translations         |
| **Modular Design**| ShadCN-based component architecture with theme support        |
| **CI/CD**         | GitHub Actions for linting, build, and deploy                 |
| **SEO**           | Dynamic metadata, JSON-LD, sitemap automation                 |
| **Accessibility** | WCAG 2.1 AA compliance, screen reader testing                 |

---

## 🚀 Deployment

- **Platform**: [Vercel](https://vercel.com)
- **Preview**: For each PR via GitHub integration
- **Production**: Auto-deploy on main branch merge
- **CDN**: Optimized via Edge CDN and smart caching
- **Monitoring**: Vercel Web Vitals + Plausible + optional Sentry

---

## 🔐 Security Practices

- **CSRF-safe**: Via tokenized form actions
- **Input Sanitization**: Zod + typeguards
- **Secure Cookies**: HttpOnly, Secure, SameSite
- **Headers**: via `next.config.js` security headers

---

## 🔗 Related Pages

- [Features](./2-features.md)
- [Directory Layout](./4-structure.md)
