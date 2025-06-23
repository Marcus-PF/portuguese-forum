---
sidebar_position: 1
title: Introduction
description: Overview of the @ptforum/api backend service powering PFSA apps
---

---

# 🚀 @ptforum/api – Hono API Documentation

The `@ptforum/api` is the edge-optimized, modular **REST API backend** of the Portuguese Forum of South Africa (PFSA), built using [Hono](https://hono.dev/) and deployed to environments like **Cloudflare Workers** or **Vercel Edge Functions**.

This service supports the core functionality of the public-facing website (`@ptforum/forum`), the admin dashboard (`@ptforum/admin`), and future integrations. It is tightly integrated within the `@ptforum/` **Nx monorepo**, and utilizes shared libraries to ensure consistent types, schemas, and tooling across the stack.

---

## 🎯 Purpose

| **Objective**         | **Description**                                                                 |
|----------------------|----------------------------------------------------------------------------------|
| 🔐 Secure Access      | Provides JWT-based authentication, OAuth support, and role-based access control |
| 📊 Data Services      | Offers CRUD operations for posts, events, clubs, memberships, and users         |
| 🗳️ Community API      | Enables endpoints for club data, spotlights, and user engagement                |
| 📤 File Uploads       | Manages secure avatar/media uploads via signed URLs                             |
| ⚡ Edge Performance   | Optimized for low-latency serverless environments (e.g., Cloudflare Workers)     |
| 🧩 Extensibility      | Modular route design supports scalable feature growth                           |

---

## 📦 Monorepo Context

The API is one of several applications in the PFSA Nx workspace:

- **Location**: `apps/api/`
- **Tech stack**: TypeScript, Hono, MongoDB (via Mongoose), Zod, JWT
- **Deployment targets**: Cloudflare Workers, Vercel (Node/Edge), or traditional Node environments
- **Shared dependencies**: `@ptforum/types`, `@ptforum/contracts`, `@ptforum/auth`, `@ptforum/logger`, `@ptforum/env`

This service is tagged in `nx.json` as:

```json
{
  "tags": ["scope:app", "type:backend", "platform:api", "runtime:hono"]
}
