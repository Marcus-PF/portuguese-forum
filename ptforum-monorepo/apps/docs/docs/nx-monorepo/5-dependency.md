---
sidebar_position: 5
title: Dependency Graph
description: Visualizing and optimizing project relationships with Nx
---

# 📦 Dependency Graph & Affected Workflows

Nx provides built-in tooling to help visualize and manage project relationships within the monorepo. This structure ensures clear boundaries and enables intelligent builds, testing, and linting.

---

## 📈 5.1 Nx Project Graph

To view the live dependency graph:

```bash
nx graph
````

This will launch a browser window displaying all apps and libraries, grouped by relationships.

### 📐 Graph Features

* **Clickable Nodes**: Explore direct and indirect dependencies
* **Filter by Scope/Tag**: e.g., `type:app`, `scope:shared`, `scope:admin`
* **Affected Highlighting**: View only projects changed in your current branch

---

## 🧩 5.2 Tagging & Dependency Constraints

Tag-based enforcement is configured in `nx.json`:

| Tag                | Meaning                                         |
| ------------------ | ----------------------------------------------- |
| `type:app`         | Deployable app (forum, admin, api, docs)        |
| `type:lib`         | Reusable library (shared or domain-specific)    |
| `scope:shared`     | Core utilities reused across apps               |
| `scope:forum`      | Forum app–specific logic                        |
| `scope:admin`      | Admin app–specific logic                        |
| `scope:membership` | Membership domain logic                         |
| `scope:content`    | News and CMS logic                              |
| ...                | (others include `alerts`, `integrations`, etc.) |

> ❌ Invalid dependencies are blocked during `nx lint` if configured via `enforceModuleBoundaries`.

### ✅ Valid Dependency Examples

* `apps/forum` ➜ ✅ can depend on `scope:shared`, `scope:forum`, `scope:membership`
* `libs/membership` ➜ ✅ can depend on `scope:shared`, but ❌ cannot depend on `apps/forum`

---

## ⚡ 5.3 Affected Workflows

Nx can determine which projects are impacted by recent changes (git diff) and run only what’s needed:

```bash
nx affected:build
nx affected:test
nx affected:lint
```

### 🎯 Benefits

* ⏱ **Faster CI/CD pipelines**
* 🧪 **Targeted testing**
* 🔍 **Smaller surface area for review**
* 📊 **Clearer audit trail of affected domains**

> 📘 Use `--base=main` or `--head=HEAD` to customize the affected range.

Example:

```bash
nx affected:test --base=main --head=HEAD
```

---

## 📚 Related Docs

* [Nx CLI Reference](https://nx.dev/core-features/command-reference)
* [Nx Module Boundaries](https://nx.dev/structure/monorepo-tags)
* [Monorepo Folder Structure](./2-folder-structure.md)
* [Tooling Configuration](./4-tooling.md)
