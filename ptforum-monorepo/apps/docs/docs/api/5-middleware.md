---
sidebar_position: 5
title: Middleware Stack
description: Request validation, logging, security, and rate-limiting
---

---

## 🧱 5. Middleware Stack

Middleware functions in `@ptforum/api` intercept and process requests before they reach route handlers. These provide authentication, validation, logging, and security guarantees across the platform.

---

### 🔐 5.1 Authentication Middleware

```ts
// middleware/auth.ts
export const authMiddleware = (requiredRole?: UserRole) => ...
````

* **Verifies**: JWT access tokens (via `Authorization` header or cookies).
* **Attaches**: `c.req.user` context to requests.
* **Enforces Roles**: Optional role-based access (e.g., `MEMBER`, `ADMIN`).
* **Errors**: Responds with `401 Unauthorized` or `403 Forbidden`.

Used across secure routes:

```ts
router.get('/me', authMiddleware('MEMBER'), async (c) => { ... });
```

---

### ⛔ 5.2 Rate Limiting

```ts
// middleware/rateLimit.ts
import { rateLimit } from 'hono-rate-limiter';
```

* **Global**: 100 requests/minute per IP for public routes.
* **Login Throttling**: 5 requests/minute for `/auth/login`.
* **Storage**: In-memory (dev), Redis/S3 recommended in prod.

```ts
router.use('/auth/login', rateLimit({ windowMs: 60000, max: 5 }));
```

---

### 🌐 5.3 CORS Middleware

```ts
// middleware/cors.ts
import { cors } from 'hono/cors';
```

* **Origins**: Whitelisted from `.env` (`CORS_ORIGIN`).
* **Methods**: GET, POST, PUT, DELETE, OPTIONS.
* **Headers**: Authorization, Content-Type.

Configured globally in `src/index.ts`:

```ts
app.use('*', cors({ origin: env.CORS_ORIGIN }));
```

---

### 📋 5.4 Request Logging

```ts
// middleware/logger.ts
import { logger } from '@ptforum/logger';
```

* **Logs**: Path, method, status, duration.
* **Format**: Structured JSON via [Pino](https://getpino.io/).
* **Destination**: stdout (local), external collector (prod).

```ts
app.use('*', loggerMiddleware);
```

Example log:

```json
{
  "method": "GET",
  "path": "/event",
  "status": 200,
  "duration": 23
}
```

---

### 🛡 5.5 Secure Headers

```ts
// middleware/secureHeaders.ts
import { secureHeaders } from 'hono/secure-headers';
```

* **Sets**: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, etc.
* **Enforces**: Best practices for frontend API security.

```ts
app.use('*', secureHeaders());
```

---

### ❌ 5.6 Error Handler

```ts
// middleware/errorHandler.ts
app.onError((err, c) => { ... });
```

* **Standardizes**: JSON error format (`{ error: string }`)
* **Hides**: Stack traces in production.
* **Logs**: Server-side via `@ptforum/logger`.

Example output:

```json
{ "error": "Unauthorized access" }
```

---

## ✅ Summary

| Middleware       | Purpose                         |
| ---------------- | ------------------------------- |
| `authMiddleware` | JWT + role-based authentication |
| `rateLimit`      | Request throttling              |
| `cors`           | Origin/method protection        |
| `logger`         | Structured request logs         |
| `secureHeaders`  | Adds security-related headers   |
| `errorHandler`   | Unified error responses         |

Each layer of middleware ensures that the API remains **secure**, **performant**, and **maintainable** — especially as new route groups and integrations are added.

