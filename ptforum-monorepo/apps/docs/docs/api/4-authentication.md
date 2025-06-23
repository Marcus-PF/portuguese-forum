---
sidebar_position: 4
title: Authentication
description: JWT, OAuth, 2FA, and role-based access in @ptforum/api
---

# 🔐 4. Authentication

Authentication in `@ptforum/api` is powered by **JWT**, **OAuth**, and optional **TOTP 2FA**, supporting secure user sessions across frontend apps (`forum`, `admin`). Middleware enforces access control and attaches verified user context to requests.

---

## 🔑 4.1 Auth Flows

### 🔄 Login

- **POST /auth/login**
- Accepts email + password
- Returns access (15m) and refresh (7d) JWTs
- Tokens are set as **HttpOnly cookies** or returned via header

### 🆕 Register

- **POST /auth/register**
- Creates a new user with `Member` role
- May trigger email verification (TBD)

### 🔁 Refresh Token

- **POST /auth/refresh**
- Requires valid refresh token (HttpOnly cookie)
- Issues new access token

### 🚪 Logout

- **POST /auth/logout**
- Clears tokens from cookies

---

## 🪪 4.2 JWT Tokens

| Type | Use | Storage | Expiry |
|------|-----|---------|--------|
| **Access Token** | API authorization | Header / Cookie | 15 minutes |
| **Refresh Token** | Token renewal | HttpOnly Cookie | 7 days |

JWTs encode user ID, roles, and expiration. Verified in `authMiddleware`.

---

## 🔐 4.3 Middleware

```ts
// middleware/auth.ts

export const authMiddleware = (role?: UserRole) =>
  async (c, next) => {
    const token = extractJWT(c.req);
    const user = await verifyJWT(token);
    if (!user || (role && !user.roles.includes(role))) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    c.set('user', user);
    await next();
  };
````

* Ensures the presence and validity of JWT
* Attaches user object to request context
* Role-based access: `authMiddleware("ADMIN")`, etc.

---

## 🧪 4.4 2FA (TOTP)

Optional **two-factor authentication** (Time-based One-Time Password) is supported:

* Uses [Speakeasy](https://github.com/speakeasyjs/speakeasy)
* Enables per-user TOTP via `/auth/setup-totp`
* Stores TOTP secret encrypted in DB
* Validates token on login if enabled

---

## 🌐 4.5 OAuth (Social Login)

Integrated via `@hono/oauth-providers`:

* **Google** and **Facebook** supported
* Routes:

  * **GET /auth/oauth/google**
  * **GET /auth/oauth/facebook**
* Exchanges code for token → creates/fetches user → issues JWT

OAuth secrets stored in env:

```env
OAUTH_GOOGLE_ID=...
OAUTH_GOOGLE_SECRET=...
```

---

## 🧠 4.6 Roles

| Role          | Description                             |
| ------------- | --------------------------------------- |
| **Admin**     | Full access to all APIs                 |
| **Moderator** | Limited admin access (e.g., moderation) |
| **Member**    | Authenticated community member          |
| **Guest**     | Anonymous visitor (default)             |

Assigned during registration or via admin dashboard.

---

## 🧪 4.7 Test User Auth

Use test credentials in `.env` and `@ptforum/mocks` to simulate login flows.
