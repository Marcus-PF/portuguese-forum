---
sidebar_position: 10
title: Testing & Quality Assurance
description: End-to-end testing strategy, tooling, and QA standards for the Portuguese Forum monorepo
---

# 🧪 10. Testing & Quality Assurance

The Portuguese Forum monorepo integrates **robust testing practices** across all layers — from unit and integration tests to full end-to-end (E2E) coverage. Our QA strategy ensures stability, reliability, and confidence in deployments.

---

## ✅ 10.1 Testing Strategy

| Type | Tooling | Description |
|------|---------|-------------|
| **Unit Tests** | [Vitest](https://vitest.dev/) | For testing components, hooks, and logic functions |
| **Integration Tests** | Vitest + Mocks | For APIs, services, and library interactions |
| **E2E Tests** | [Playwright](https://playwright.dev/) | Full user flow testing (signup, moderation, payments) |
| **Mocking** | `@ptforum/mocks` | Shared utilities for fake data and API handlers |

> 📈 **Coverage Target**: Minimum 80% across critical libraries and apps

---

## 🧪 10.2 Test Commands

| Command | Description |
|--------|-------------|
| `nx test <project>` | Runs unit and integration tests for the specified project |
| `nx test <project> --coverage` | Generates a detailed code coverage report |
| `nx e2e forum` | Executes E2E test suite for the public website |

---

## 🎯 10.3 Example E2E Test Suite

```tsx
// apps/forum/e2e/signup.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Signup Flow', () => {
  test('user can sign up successfully', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'secure123')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/dashboard')
  })

  test('displays error for invalid email', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('input[name="email"]', 'invalid')
    await page.fill('input[name="password"]', 'secure123')
    await page.click('button[type="submit"]')
    await expect(page.getByText('Invalid email')).toBeVisible()
  })
})
````

---

## 📦 10.4 Testing Libraries Used

| Library                  | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| `@testing-library/react` | Component rendering and user interaction simulation |
| `vitest`                 | Unit and integration test runner                    |
| `@ptforum/mocks`         | API handlers and test datasets                      |
| `playwright`             | Headless browser automation for E2E testing         |
| `@vitest/coverage-c8`    | Code coverage reporter for Vitest                   |

---

## 🧠 Best Practices

* Use **descriptive test names** and **grouping** via `describe()`
* Keep **unit tests fast and isolated**
* Structure E2E tests to mimic real user behavior
* Prefer **data-testid** or accessible roles/selectors for targeting elements
* Commit tests alongside the feature or fix they cover

---

## 🔗 Related Pages

* [Tooling & Scripts](./4-tooling.md)
* [Security](./9-security.md)
* [Apps & Libraries](./6-apps-and-libs.md)