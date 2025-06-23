---
sidebar_position: 2
title: Route Groups
description: Modular API domains for posts, users, events, and more
---

# 📚 2. Route Groups

The `@ptforum/api` is structured into **modular route groups** that align with specific domains — each with its own handlers, services, validation, and access rules. This modularity ensures security, testability, and performance.

---

## 🔑 2.1 Authentication

Supports traditional login, refresh tokens, and OAuth social login.

- JWT-based authentication (15m expiry, 7d refresh)
- 2FA support via TOTP
- Social login via Google and Facebook

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/auth/login` | POST | Authenticate user credentials |
| `/auth/register` | POST | Register a new account |
| `/auth/refresh` | POST | Refresh JWT access token |
| `/auth/logout` | POST | Terminate user session |
| `/auth/oauth/google` | GET | Google OAuth login |
| `/auth/totp/setup` | POST | Set up TOTP for 2FA |
| `/auth/totp/verify` | POST | Verify 2FA token |

---

## 👤 2.2 Users

Provides user profiles and administrative access.

- Roles: Guest, Member, Moderator, Admin
- Profile visibility: public/private fields

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/user/me` | GET | Get current user |
| `/user/:id` | GET | View another user |
| `/user` | PUT | Update own profile |
| `/user/admin/all` | GET | List users (admin only) |

---

## 📰 2.3 Posts

Manages community content and discussion threads.

- Posts are public by default
- Comments nested under posts
- Tags for filtering and discovery

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/post` | GET | List all posts |
| `/post` | POST | Create new post |
| `/post/:id` | PUT | Update post |
| `/post/:id` | DELETE | Delete post |
| `/post/:id/comment` | POST | Add comment |

---

## 🎉 2.4 Events

Supports event discovery and registration.

- Can be public or member-only
- Tracks attendees, capacity, and metadata

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/event` | GET | List events |
| `/event` | POST | Create event |
| `/event/:id` | GET | Get event details |
| `/event/:id` | PUT | Update event |
| `/event/:id/attend` | POST | Register for event |

---

## 🏛 2.5 Clubs

API for PFSA-aligned clubs and regional bodies.

- Includes member roles and contact info
- Media gallery support

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/club` | GET | List clubs |
| `/club/:id` | GET | View club |
| `/club` | POST | Create or join club |
| `/club/:id` | PUT | Update club |

---

## 🌟 2.6 Spotlights

Showcases members, businesses, churches, and youth leaders.

- Admin-curated highlights
- Type field for filtering (e.g., business, club)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/spotlight` | GET | List spotlights |
| `/spotlight` | POST | Create spotlight |
| `/spotlight/:id` | DELETE | Delete spotlight (admin) |

---

## 💳 2.7 Memberships

Supports subscription plans and payment integration.

- Free and paid tiers
- PayFast webhook handling

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/membership/tiers` | GET | List all plans |
| `/membership` | POST | Subscribe to tier |
| `/membership` | PUT | Update membership |
| `/membership` | DELETE | Cancel membership |

---

## 📤 2.8 Uploads

Secure file handling with optional CDN.

- Supports avatar and media uploads
- Enforces size/type validation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/upload` | POST | Upload file |
| `/upload/:id` | GET | Get file metadata |

---

## 🪝 2.9 Webhooks

Receives events from external services like PayFast.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/webhook/payfast` | POST | Payment confirmation |
| `/webhook/mailchimp` | POST | Email event listener |

