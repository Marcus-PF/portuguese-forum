---
sidebar_position: 7
title: Localization Strategy
description: Bilingual routing, translation system, and i18n tooling
---

# 🌍 Localization Strategy

The public website supports both **English 🇬🇧** and **Portuguese 🇵🇹** to serve PFSA’s multilingual audience across generations.

---

## 🗺️ Routing Structure

- All pages use localized subpaths: `/en/...`, `/pt/...`
- Next.js middleware auto-detects browser language
- Visitors are redirected based on cookie (`NEXT_LOCALE`)

Example:
```

/en/news/post-title
/pt/noticias/titulo-da-publicacao

```

---

## 🛠 i18n Tooling

| Tool              | Purpose                                  |
|-------------------|------------------------------------------|
| `next-intl`       | Translation hooks and providers          |
| `@ptforum/i18n`   | Wrapper around `next-intl` for consistency |
| CMS Localization  | Sanity schemas with `title_en`, `title_pt` fields |

---

## 🧪 Translation Files

Located in `apps/forum/locales/`:

```

locales/
├── en.json
├── pt.json

````

- Flat JSON format (key-value)
- Loaded by `next-intl` based on locale
- Keys reused across pages for consistency

---

## 🔄 Language Switcher

- Toggle in header between 🇬🇧 and 🇵🇹
- Updates the `NEXT_LOCALE` cookie
- Triggers `router.push(localePath)` to switch languages

---

## 🧠 CMS Multilingual Support

Sanity documents use language-specific fields:

```ts
{
  title_en: "Join the Forum",
  title_pt: "Junte-se ao Fórum"
}
````

Fetched based on route locale using dynamic GROQ queries.

---

## 💡 Fallback Strategy

* English (`en`) is the default fallback
* Missing keys in `pt.json` fall back to `en.json`
* 404 or “Not translated” banners shown on partial content

---

## 🧪 SSR/Hydration

* Server-rendered localized content
* Hydration mismatch detection in dev
* Lint rules for key existence

---

## 🚀 Future Enhancements

* **Crowdin integration** for collaborative translation
* **Right-to-left support** for broader inclusivity (planned)
* **Per-field translator UI** in Sanity Studio

---

## 🔗 Related Pages

* [CMS Integration](./6-cms.md)
* [Pages & Routes](./5-pages.md)

