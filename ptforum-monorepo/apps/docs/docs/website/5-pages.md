---
sidebar_position: 5
title: Site Pages & Routing
description: A breakdown of routes and pages within the @ptforum/forum website
---

# 🧭 Site Pages & Routing

The `@ptforum/forum` app is organized by purpose-driven pages, each mapped to localized routes (`/en`, `/pt`). Pages are powered by CMS data, API integration, or local components, and follow a consistent layout with SSR, i18n, and accessibility in mind.

---

## 🏠 Homepage (`/[locale]`)

- **Hero Section**: Mission tagline + call-to-action buttons
- **Quick Links**: Cards for language learning, advocacy, youth, etc.
- **Highlights**: Latest 3 posts and events (CMS-powered)
- **Mission**: Brief mission text + link to About Us

---

## ℹ️ About (`/[locale]/about`)

- **History**: Timeline of PFSA’s evolution since 2001
- **Leadership**: Profile photos, names, bios
- **Mission & Vision**: Statement from Manny Ferreirinha, Bernardo Agostinho
- **Structure**: Rendered from CMS or Mermaid graph

---

## 📰 News (`/[locale]/news`)

- **List Page**: Grid/list of articles with:
  - Title, excerpt, author, publish date
  - Filters: categories, tags
- **Detail Page**: `/news/[slug]`
  - Portable Text body
  - Related articles and author bio
  - Optimized images via Sanity

---

## 🎉 Events (`/[locale]/events`)

- **Upcoming Events**: Shown in card or calendar format
- **Event Detail**: `/events/[slug]`
  - Date, venue, image gallery, RSVP
- **Past Events**: Archive section with summaries, photos

---

## 👥 Membership (`/[locale]/membership`)

- **Benefits**: List of perks for joining
- **Signup Form**: Connected to `@ptforum/api`
- **Tiers**: Planned sections for different membership types
- **Member Resources**: Available post-login

---

## 🌟 Community (`/[locale]/community`)

- **Spotlights**: Profiles for people, clubs, and churches
- **Map**: OpenStreetMap view with geotagged club pins
- **Youth Programs**: Callouts for participation and events
- **Conduct Guidelines**: Friendly, inclusive participation policy

---

## 📚 Resources (`/[locale]/resources`)

- **Publications**: Newsletters, brochures
- **Downloads**: Posters, guides in PDF
- **Media**: Audio/video content
- **Reports**: Annual or research outputs

---

## 🗣️ Language Learning (`/[locale]/language`)

- **Gamified Lessons**:
  - Vocab, grammar modules (MVP content)
  - Multiple choice and audio questions
- **Progress Tracker**:
  - Local state for guests
  - Authenticated state synced via API
- **Leaderboard**: Planned feature for engagement

---

## 🧩 Additional Routes

| Route | Description |
|-------|-------------|
| `/[locale]/spotlight` | Aggregated community spotlights |
| `/[locale]/error`     | Custom error fallback page |
| `/api/*`              | Edge API routes (handled in @ptforum/api) |

---

## 🔗 Related Pages

- [CMS Integration](./6-cms.md)
- [Localization](./7-localization.md)
