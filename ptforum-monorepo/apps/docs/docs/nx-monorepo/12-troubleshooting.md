---
sidebar_position: 12
title: Troubleshooting
description: Common setup and runtime issues with the @ptforum Nx Monorepo
---

# 🗺 12. Troubleshooting & Common Pitfalls

This section lists common setup issues and runtime errors encountered when working with the @ptforum monorepo, along with quick fixes.

---

## ❗ Common Issues & Fixes

| **Issue** | **Likely Cause** | **Solution** |
|-----------|------------------|--------------|
| **Outdated `pnpm-lock.yaml`** | Local lockfile desync | Run `pnpm install` to regenerate |
| **ESLint errors** | Code style or rule violation | Run `nx affected:lint --fix` or check `.eslintrc.json` for overrides |
| **Build fails for `@ptforum/api`** | Misconfigured `wrangler.toml` or missing env variables | Ensure your `.env` and `wrangler.toml` files are present and valid |
| **Vitest failures** | Missing mocks or async issues | Verify `@ptforum/mocks` setup and try increasing test timeout |
| **Dependency mismatch or resolution errors** | Incompatible or duplicate versions | Run `pnpm dedupe` and verify `pnpm-workspace.yaml` scopes |
| **Weird behavior or old artifacts** | Nx task caching or output desync | Run `nx reset` to clear the cache |

---

## 🛠 Helpful Commands

```bash
# Reset Nx and clear local state
nx reset

# Fix lint issues across changed projects
nx affected:lint --fix

# Regenerate dependency tree
pnpm install

# Analyze workspace graph
nx graph

# Manually format all files
nx format:write
````

> 🧪 Still stuck? Use `nx graph` to inspect the full dependency tree or rerun with `--verbose` to see detailed logs.

---

## 🧭 Related Pages

* [Environment Setup](./3-environment.md)
* [Tooling & CLI](./4-tooling.md)
* [Testing](./10-testing.md)