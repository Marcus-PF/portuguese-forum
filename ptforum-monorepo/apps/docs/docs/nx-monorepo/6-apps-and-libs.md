---
sidebar_position: 6
title: Apps & Libraries
description: How to generate, structure, and name apps and libraries in the @ptforum monorepo
---

# 🏗️ Creating Apps & Libraries

This section explains how to create new apps and libraries within the Nx monorepo, including recommended naming conventions, tags, and alias configuration.

---

## ⚙️ 6.1 Generating a New App

To scaffold a new application (e.g., Next.js), use the Nx generator:

```bash
nx g @nx/next:app new-app \
  --directory=apps/new-app \
  --tags=scope:new-app,type:app
````

### 🔍 Example Use Case

```bash
nx g @nx/next:app events \
  --directory=apps/events \
  --tags=scope:events,type:app
```

This will create `apps/events/` with its own Next.js setup and tagged for dependency enforcement.

---

## 📦 6.2 Generating a Shared Library

Use this to create utility or feature libraries under `libs/shared`:

```bash
nx g @nx/js:lib new-lib \
  --directory=libs/shared \
  --bundler=none \
  --unitTestRunner=vitest \
  --tags=scope:shared,type:lib
```

### 📘 Example

```bash
nx g @nx/js:lib currency-utils \
  --directory=libs/shared \
  --tags=scope:shared,type:lib
```

You can also use `@nx/react:lib` for UI components or `@nx/js:lib` for logic libraries.

---

## 🧩 6.3 Naming Conventions

Consistent naming improves maintainability and automated boundary checks.

### 🔖 Tags

| Type            | Example                        | Description                  |
| --------------- | ------------------------------ | ---------------------------- |
| **Apps**        | `scope:forum`, `type:app`      | Used for deployable projects |
| **Shared Libs** | `scope:shared`, `type:lib`     | Reusable logic/components    |
| **Domain Libs** | `scope:membership`, `type:lib` | App-specific domains         |

### 🧾 Files & Folders

* **Files**: `kebab-case` (e.g., `use-auth.ts`)
* **Components**: `PascalCase` (e.g., `UserCard.tsx`)
* **Folders**: Match domain (e.g., `hooks/`, `features/`, `data-access/`)

---

## 📚 6.4 Path Aliases

To simplify imports, aliases are defined in `tsconfig.base.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@ptforum/types": ["libs/shared/types/src/index.ts"],
      "@ptforum/contracts": ["libs/shared/contracts/src/index.ts"],
      "@ptforum/*": ["libs/shared/*/src/index.ts"]
    }
  }
}
```

### ✅ Example Usage

```ts
import { UserId } from '@ptforum/types'
import { userSchema } from '@ptforum/contracts'
```

> ℹ️ Aliases help avoid long relative paths (`../../../types`) and are validated by TypeScript.

---

## 🧭 Related Docs

* [📁 Folder Structure](./2-folder-structure.md)
* [📦 Dependency Graph](./5-dependency.md)
* [🧪 Tooling Setup](./4-tooling.md)
