---
sidebar_position: 13
title: Community & Extensibility
description: Public API exposure, plugin architecture, and contribution pathways in the @ptforum monorepo
---

# 🌍 13. Community & Extensibility

This section outlines how the Portuguese Forum platform promotes open collaboration and extensibility — including public APIs, a planned plugin system, and community contribution practices.

---

## 🔗 13.1 Public API

The `@ptforum/api` exposes a **read-only public API** for third-party clients, apps, or embeddable widgets. These endpoints are versioned and documented via Swagger or Redoc in `@ptforum/docs/api`.

### 📘 Example Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/public/news` | Fetch latest public news entries |
| `GET` | `/api/public/events` | Fetch upcoming community events |
| `GET` | `/api/public/clubs` _(planned)_ | Access public club directory |
| `GET` | `/api/public/memberships/stats` _(planned)_ | Membership stats for public dashboards |

> These endpoints return validated DTOs (Zod) and are safe for public consumption.

---

## 🔌 13.2 Plugin System (Planned)

We are designing a modular **plugin architecture** under `@ptforum/plugins` (slated for Q1 2026). It will allow developers to extend platform functionality without modifying core logic.

### 🧩 Plugin Types

- **UI Components**: Embed custom cards, banners, form widgets
- **API Hooks**: Extend backend routes or trigger event handlers
- **Data Processors**: Import/export tools, data pipelines

### 🛠 Registration Workflow

Each plugin will be registered via a lightweight manifest:

```json
// plugin.json
{
  "name": "cms-image-gallery",
  "type": "ui",
  "entry": "./dist/index.js",
  "permissions": ["cms:read", "ui:embed"],
  "version": "1.0.0"
}
````

* **Registration**: Handled by `@ptforum/api-client` + manifest loader
* **Isolation**: Plugins will run in sandboxed frames or limited scopes
* **Security**: No access to private routes or admin endpoints without explicit approval

> ⚠️ Plugins will undergo code review and testing before inclusion in core apps.

---

## 🤝 13.3 Community Contributions

We actively welcome contributors from the Portuguese-South African diaspora and beyond.

### 🔧 How to Contribute

* **Report Issues**: Use GitHub issues for bugs or feature suggestions
* **Open PRs**: Follow the [CONTRIBUTING.md](https://github.com/portugueseforum/monorepo/blob/main/CONTRIBUTING.md)
* **Discussions**: Join GitHub Discussions or comment on Roadmap items
* **Add Translations**: Help localize content via `@ptforum/i18n`

### ✅ Good First Issues

Look for `good first issue` or `help wanted` labels in the repo.

---

## 🔗 Related Pages

* [API Reference (Planned)](./api.md)
* [Testing](./10-testing.md)
* [Docs Contribution](./11-documentation.md)