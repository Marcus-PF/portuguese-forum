---
sidebar_position: 6
title: CMS Integration (Sanity)
description: How Sanity powers the public website’s content
---

# 🧱 CMS Integration – Sanity

The `@ptforum/forum` app uses [Sanity](https://www.sanity.io/) as a **headless CMS** for managing dynamic content across pages. It provides a structured, real-time content backend with a visual editor (Studio) for PFSA administrators.

---

## 🧩 Sanity Content Types

| Type        | Purpose                                 |
|-------------|-----------------------------------------|
| `post`      | News articles, blogs, public updates    |
| `event`     | Upcoming and archived community events  |
| `club`      | Registered Portuguese community clubs   |
| `spotlight` | Highlights of members, clubs, youth     |
| `heroSection` | Homepage banner text/images           |
| `translation` | Multilingual copy for CMS-managed UI |

---

## 🧠 Schema Management

- Stored in `libs/integrations/cms/schemas/`
- Organized by content type (`post.ts`, `event.ts`, etc.)
- Uses Sanity’s `defineType()` and Portable Text
- Shared type definitions reused across `@ptforum/api`, `@ptforum/types`, and `@ptforum/api-client`

---

## 🔍 Querying Data

We use `next-sanity` with server components for optimal performance and SSR.

```ts
// apps/forum/data-access/posts.ts
import { sanityFetch } from './client'
export const getLatestPosts = async () =>
  sanityFetch({ query: `*[_type == "post"] | order(_createdAt desc)[0...3]` })
````

---

## 🖼 Images & Media

* Uploaded to Sanity’s CDN
* Rendered using `next/image` with URL builder helpers
* Responsive, optimized for size and format

```tsx
import { urlFor } from './image'
<Image src={urlFor(post.mainImage).width(800).url()} alt={post.title} />
```

---

## 🔔 Revalidation & Previews

| Feature           | Details                                              |
| ----------------- | ---------------------------------------------------- |
| `revalidateTag()` | Called on publish/update webhooks                    |
| Previews          | Real-time CMS preview via `draftMode()`              |
| ISR               | Pages (e.g., news, events) use ISR fallback strategy |

---

## 🔐 Admin Access

Sanity Studio is hosted at:
**`https://studio.portugueseforum.org.za`** (authenticated admin access)

> Tip: Use Sanity’s built-in roles to manage editorial access vs schema editing.

---

## 🚀 Planned Enhancements

* **Custom CMS Blocks**: For spotlight sliders, timelines
* **Live Studio Previews**: With layout-matching React components
* **Migration Scripts**: From legacy WordPress content

---

## 🔗 Related Pages

* [Site Pages & Routing](./5-pages.md)
* [Localization](./7-localization.md)

