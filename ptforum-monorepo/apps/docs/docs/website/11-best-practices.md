---
sidebar_position: 11
title: Best Practices
description: Development, structure, and accessibility standards for the PFSA website
---

# ✅ Website Best Practices

To ensure long-term maintainability, accessibility, and performance, the `@ptforum/forum` app follows strict best practices across architecture, styling, and behavior.

---

## ⚙️ Development Standards

| Do | Don't |
|----|-------|
| Use `@ptforum/ui` components | Avoid writing custom unstyled UI |
| Fetch data with `@ptforum/api-client` | Avoid raw `fetch` unless edge-specific |
| Validate with `@ptforum/contracts` | Skip input validation |
| Keep files scoped (components/ui, layout, features) | Dump everything in one directory |
| Write atomic tests | Skip test coverage |
| Use RSC (React Server Components) where possible | Overuse client-side logic |

---

## 📦 Architecture Patterns

- **App Router**: All routes live under `/app/[locale]` for SSR and layout sharing.
- **Client Components**: Use `use client` only when interactivity is needed.
- **Layouts**: Co-locate per-section layouts (e.g., `about/layout.tsx`).
- **Feature Folders**: Encapsulate logic and views (e.g., `/features/Spotlight.tsx`).
- **CMS Integration**: Always fetch Sanity data using server components.

---

## 🧠 Naming & Style Conventions

| Rule | Example |
|------|---------|
| Kebab-case for files | `language-quiz.tsx` |
| PascalCase for components | `AboutSection.tsx` |
| camelCase for variables | `userScore`, `eventId` |
| Use Tailwind utilities | `className="text-sm text-muted"` |
| Avoid inline styles | ❌ `style={{ marginTop: 10 }}` |

---

## ♿ Accessibility

- Use semantic HTML (`<section>`, `<article>`, `<nav>`)
- All images must have `alt` text
- Ensure 4.5:1 contrast minimum
- Keyboard navigable interactive components
- Announce dynamic content with `aria-live`
- Run `axe-core` or Lighthouse for WCAG 2.1 checks

---

## 🚀 Performance

- Use `<Image>` from `next/image` for optimization
- Lazy-load non-critical content (e.g. carousels, videos)
- Prefer Edge caching with `revalidateTag` triggers
- Avoid client-heavy logic during initial load
- Always test with Chrome Lighthouse or WebPageTest

---

## 🌐 Internationalization

- Use `next-intl` for all copy
- Store messages in `locales/en.json`, `pt.json`
- Avoid hardcoding strings — use `<Trans>` or `t()` helpers
- Handle fallback content gracefully

---

## 🧪 Testing

- **Vitest**: Unit test key logic/components
- **Playwright**: Validate signup, navigation, protected routes
- Mock API via `@ptforum/mocks`
- Minimum 80% test coverage expected for PRs

---

## 🧼 Clean Code Checklist

- [ ] All components typed with `FC<Props>`
- [ ] Uses `z.object({...})` for schema validation
- [ ] No console.logs or debugger statements
- [ ] Extracts reusable logic into hooks/util files
- [ ] Fully i18n-compatible (`next-intl`)
- [ ] Accessible and tested

---

## 🔗 Related Docs

- [Website Directory](./2-directory.md)
- [CMS & Content](./6-cms.md)
- [Localization](./7-localization.md)
- [Security](./10-security.md)
