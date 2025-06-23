---
sidebar_position: 8
title: Testing Strategy
description: Unit, integration, and E2E tests for the @ptforum/forum app
---

# 🧪 Testing Strategy

The public website undergoes rigorous testing to ensure **stability**, **accessibility**, and **user confidence** across devices and languages.

---

## 🔍 Testing Types

| Type           | Tooling                          | Scope                           |
|----------------|----------------------------------|----------------------------------|
| **Unit**       | Vitest + React Testing Library   | Components, hooks, utilities     |
| **Integration**| Vitest + Mocks                   | API clients, CMS interactions    |
| **E2E**        | Playwright (optional)            | Signup, newsletter, quizzes      |
| **Linter**     | ESLint + WCAG rules              | Code quality + accessibility     |

---

## 🧪 Example Unit Test

```tsx
// components/features/EventCard.spec.tsx
import { render, screen } from '@testing-library/react'
import { EventCard } from './EventCard'

it('displays event title', () => {
  render(<EventCard title="Fado Night" date="2025-07-10" />)
  expect(screen.getByText('Fado Night')).toBeInTheDocument()
})
````

---

## 🧪 Example E2E Test (Optional MVP)

```tsx
// e2e/signup.spec.ts
import { test, expect } from '@playwright/test'

test('user signs up successfully', async ({ page }) => {
  await page.goto('/signup')
  await page.fill('input[name="email"]', 'test@demo.org')
  await page.fill('input[name="password"]', 'secure123')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/dashboard')
})
```

---

## 📈 Coverage

* **80%+** minimum per app
* Key flows (event signup, content loading) tested with Vitest
* `pnpm test forum --coverage` for reports

---

## ♿ Accessibility Tests

* Axe-core + ESLint plugin
* Checks for: alt text, heading order, keyboard nav, color contrast

---

## ✅ Testing Best Practices

| ✅ Do                                    | ❌ Don’t                              |
| --------------------------------------- | ------------------------------------ |
| Write isolated tests with mock data     | Depend on real API calls             |
| Use `screen.getByText()` for assertions | Query DOM arbitrarily                |
| Test both EN and PT content if possible | Assume default language always loads |
| Automate critical paths (e.g., signup)  | Skip testing form validations        |

---

## 🔗 Related Docs

* [Nx Monorepo – Testing](../../nx-monorepo/10-testing.md)
* [CMS Integration](./6-cms.md)
* [Environment Setup](../../nx-monorepo/3-environment.md)

