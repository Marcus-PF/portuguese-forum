---
sidebar_position: 12
title: Maintenance & Observability
description: Ongoing health, updates, and monitoring practices for the public website
---

# 🛠️ Website Maintenance & Observability

Ongoing upkeep is essential to ensure the PFSA website remains secure, performant, and relevant to the community.

---

## 🔄 Content Updates

- **Sanity CMS**:
  - Maintain editorial content through the Sanity Studio.
  - All changes are reflected instantly or via `revalidateTag()` ISR.
  - Editors are trained on Studio interface.
- **Static Pages**:
  - Keep About, Membership, and Resources up to date in markdown or CMS blocks.
- **Events & News**:
  - Use CMS forms or Studio to add/remove articles and event details.

---

## 🧪 Testing & QA

- CI tests run on every pull request:
  - `nx test forum`
  - `nx lint forum`
  - `nx e2e forum`
- Manual QA:
  - After major feature additions.
  - Pre-deployment UAT (user acceptance testing).

---

## 🔍 Analytics & Monitoring

| Tool | Purpose |
|------|---------|
| **Plausible** | Pageviews, event tracking, exit points |
| **Sentry** | Error tracking (client + server) |
| **Vercel Analytics** | Web Vitals (LCP, FCP, CLS) |
| **GitHub Actions** | CI health (build/test/lint success) |

---

## 🛡️ Security Audits

- Dependencies checked weekly via GitHub Dependabot.
- API endpoints tested via Postman and Playwright.
- Sanity webhooks and client credentials are scoped and regenerated periodically.
- Next.js security headers (e.g. `X-Frame-Options`, `Content-Security-Policy`) set in `next.config.js`.

---

## 🚀 Deployment Pipeline

| Stage | Description |
|-------|-------------|
| **Preview** | Vercel PR preview with GitHub integration |
| **Staging** | `dev` branch for final testing |
| **Production** | Auto-deploy on `main` branch merge |
| **Rollback** | Vercel dashboard offers instant rollback per deploy |

---

## 🧹 Regular Maintenance Tasks

| Task | Frequency |
|------|-----------|
| **CMS schema updates** | Monthly / as needed |
| **Package upgrades** | Weekly (`pnpm up`) |
| **Vulnerability patching** | Immediately on report |
| **Sanity dataset backup** | Monthly or pre-major deployment |
| **Accessibility audit** | Quarterly |
| **SEO metadata review** | Biannually |

---

## 📋 Maintenance Contacts

- **Technical Lead**: [marci@portugueseforum.org.za](mailto:marci@portugueseforum.org.za)
- **CMS/Content Editor**: Assigned via Sanity Studio
- **Issue Tracker**: [GitHub Issues](https://github.com/portugueseforum/monorepo/issues)

---

## 🔗 Related Docs

- [CI/CD & Deployment](./9-deployment.md)
- [CMS Integration](./6-cms.md)
- [Analytics & SEO](./8-analytics.md)
- [Security Practices](./10-security.md)
