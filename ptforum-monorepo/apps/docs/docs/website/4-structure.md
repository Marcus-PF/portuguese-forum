---
sidebar_position: 4
title: Directory Structure
description: Folder layout of the @ptforum/forum app and its organization
---

# 📁 Directory Structure

The `@ptforum/forum` app follows the [App Router](https://nextjs.org/docs/app/building-your-application/routing) structure in **Next.js 15**, with a modular Nx-aligned layout for shared UI, CMS content, and API integration.

---

## 🗂️ Folder Overview

```

apps/forum/
├── app/                       # Next.js App Router
│   ├── \[locale]/             # Localized routes (en, pt)
│   │   ├── page.tsx          # Homepage route
│   │   ├── layout.tsx        # Root layout (i18n, header/footer)
│   │   ├── about/            # About Us
│   │   ├── events/           # Events pages
│   │   ├── news/             # News/blog
│   │   ├── membership/       # Membership flow
│   │   ├── community/        # Community section
│   │   ├── language/         # Language learning module
│   │   ├── spotlight/        # Club/Member highlights
│   │   └── error.tsx         # Custom error boundaries
├── components/               # React components
│   ├── ui/                  # Re-exported ShadCN elements
│   ├── layout/              # Header, Footer, Menu
│   ├── sections/            # Page-specific sections
│   └── features/            # Interactive widgets (map, carousel, leaderboard)
├── data-access/              # CMS integration (Sanity queries)
│   ├── posts.ts
│   ├── events.ts
│   ├── clubs.ts
│   ├── spotlight.ts
├── lib/                      # Utilities, hooks, helpers
├── locales/                  # i18n translations (en.json, pt.json)
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind theme config
├── tsconfig.json             # TypeScript config
└── next.config.js            # Runtime config + headers

````

---

## 📦 Key Subfolders Explained

### `/app/[locale]/`

- Handles **localized routing** (`/en`, `/pt`)
- Every route here is **server-rendered by default**
- Uses `layout.tsx` for shared shells

### `/components/`

- Structured into:
  - `ui/`: Re-exported ShadCN components
  - `layout/`: Navbar, Footer, Mobile Menu
  - `sections/`: HeroSection, MissionSection, etc.
  - `features/`: Interactive widgets (e.g., Map, Quiz)

### `/data-access/`

- Encapsulates all **Sanity queries** via `next-sanity`
- Returns fully typed responses using `@ptforum/contracts` + `@ptforum/types`

### `/lib/`

- Small, pure **utility functions** and React **hooks**
- Examples: `useSlug`, `useProgress`, `mergeClasses`

### `/locales/`

- Language files (JSON), loaded via `@ptforum/i18n`
- Example: `locales/en.json`, `locales/pt.json`

---

## 🌍 Localization Setup

- Uses Next.js **App Router i18n routing**
- Dynamic route handling via `NEXT_LOCALE` and middleware
- All UI strings stored in `/locales/`
- Sanity CMS supports multilingual fields (`title_en`, `title_pt`)

---

## 🧩 Example Import Paths

```tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { getPosts } from '@/data-access/posts'
import { useTranslation } from '@ptforum/i18n'
````

---

## 🔗 Related Pages

* [Stack & Tooling](./3-stack.md)
* [Site Pages](./5-pages.md)

