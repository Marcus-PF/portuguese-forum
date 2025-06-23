---
sidebar_position: 4
title: Tooling Configuration
description: Nx commands, testing setup, formatting standards, and dev scripts
---

# 🧪 Tooling & Workspace Configuration

This guide covers essential CLI commands, testing strategies, linting rules, and helpful scripts used across the Portuguese Forum monorepo.

---

## 🚀 4.1 Nx CLI Commands

Nx provides a unified interface for working with projects in the monorepo.

| Command | Purpose |
|--------|---------|
| `nx serve <project>` | Start a dev server for any app (e.g., forum, admin, api, docs) |
| `nx build <project>` | Create a production build |
| `nx test <project>` | Run unit/integration tests via Vitest |
| `nx lint <project>` | Run ESLint checks |
| `nx format:write` | Auto-format files using Prettier |
| `nx affected:<target>` | Run target (e.g., test, lint) on affected projects only |
| `nx graph` | Visualize project dependencies in the browser |

> 💡 Run `nx list` to see all available plugins and generators.

---

## 🧪 4.2 Testing Setup

| Tool | Purpose |
|------|---------|
| **Vitest** | Fast unit + integration tests for TS/JS |
| **React Testing Library** | UI component tests |
| **Playwright** | End-to-end testing for real user journeys |
| **@ptforum/mocks** | Utilities and stub data for test isolation |
| **CI Enforcement** | Minimum 80% code coverage on PRs |

### ✅ Example: Unit Test

```tsx
// apps/admin/components/Dashboard.spec.tsx
import { render, screen } from '@testing-library/react'
import { Dashboard } from './Dashboard'

describe('Dashboard', () => {
  it('renders user count', () => {
    render(<Dashboard userCount={10} />)
    expect(screen.getByText('Total Users: 10')).toBeInTheDocument()
  })
})
````

### ✅ Example: E2E Test

```tsx
// apps/forum/e2e/signup.spec.ts
import { test, expect } from '@playwright/test'

test('user can sign up', async ({ page }) => {
  await page.goto('/signup')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="password"]', 'secure123')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/dashboard')
})
```

> 📘 Run E2E tests with: `nx run forum:e2e`

---

## 🧹 4.3 Linting & Formatting

We enforce code consistency across all apps and libs.

### 🔍 ESLint

* Extended from `@nrwl/eslint-plugin-nx` and `@typescript-eslint`
* Rules for React, accessibility, and import boundaries

### ✨ Prettier

* 2-space indent
* Single quotes
* Trailing commas
* Integrated with ESLint and Husky

### ✅ Husky (Pre-commit)

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
pnpm nx format:write
pnpm nx affected:lint
pnpm nx affected:test
```

### 🔒 Commitlint

* Ensures semantic commits:

  * `feat(auth): add login token validation`
  * `fix(api): handle null events gracefully`

> 📘 Run `pnpm prepare` after cloning to set up hooks

---

## 📜 4.4 Package Scripts

Defined in the root `package.json` for quick access:

```json
{
  "scripts": {
    "start": "nx run-many --target=serve --all",
    "build": "nx run-many --target=build --all",
    "test": "nx run-many --target=test --all",
    "lint": "nx run-many --target=lint --all",
    "format": "nx format:write",
    "graph": "nx graph",
    "migrate": "nx run api:migrate",
    "seed": "nx run api:seed",
    "analyze": "nx run forum:bundle-analyze",
    "e2e": "nx run forum:e2e"
  }
}
```

> 🛠 These scripts are CI-safe and work locally or in GitHub Actions.

---

## 🔗 Related Pages

* [📁 Folder Structure](./2-folder-structure.md)
* [⚙️ Environment Setup](./3-environment.md)
* [📚 Documentation Standards](../company-information/docs-standards.md)