---
sidebar_position: 10
title: Website Security
description: CSRF protection, form validation, secure cookies, and other best practices
---

# 🔐 Website Security

Security is critical for protecting user data, preserving trust, and ensuring safe community participation. The public site integrates multiple layers of frontend and backend protection.

---

## 🧱 Key Security Layers

| Area | Implementation |
|------|----------------|
| **Authentication** | JWT-based login via `@ptforum/auth` |
| **Form Handling** | Validated via Zod (via `@ptforum/contracts`) |
| **CSRF Protection** | Anti-CSRF tokens + SameSite cookies |
| **API Rate Limits** | Enforced in `@ptforum/api` with IP-based guards |
| **Error Masking** | Custom error messages via `@ptforum/errors` |
| **Input Sanitization** | Zod + SSR safety + React autoescaping |
| **Secure Headers** | Set in `next.config.js` (`Content-Security-Policy`, `Referrer-Policy`) |
| **Cookie Security** | HttpOnly, Secure, SameSite=Lax by default |

---

## 🧪 Secure Form Example

```tsx
<form method="POST" action="/api/signup">
  <input type="hidden" name="csrfToken" value={csrfToken} />
  <input type="email" name="email" required />
  <input type="password" name="password" required />
  <button type="submit">Sign up</button>
</form>
````

* `csrfToken` is injected via SSR from `@ptforum/auth`
* POST route uses Zod to validate the payload

---

## 🔧 next.config.js

```js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: "default-src 'self'" },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      }
    ]
  }
}
```

---

## 🚫 Common Threats Mitigated

| Threat           | Protection                                       |
| ---------------- | ------------------------------------------------ |
| **XSS**          | React autoescaping, no `dangerouslySetInnerHTML` |
| **CSRF**         | SameSite cookies + CSRF token                    |
| **Clickjacking** | `X-Frame-Options` header                         |
| **Injection**    | Zod validation and sanitization                  |
| **Replay**       | JWT expiration and refresh controls              |

---

## ✅ Developer Guidelines

* Never expose secrets in client code
* Use `@ptforum/auth` for session checks
* Keep dependencies up to date (automated alerts via GitHub Dependabot)
* Test with Playwright for auth/session edge cases
* Run security headers locally (`curl -I localhost:3000`)

---

## 🔗 Related Docs

* [@ptforum/auth](../../shared-libraries/ptforum-auth.md)
* [@ptforum/contracts](../../shared-libraries/ptforum-contracts.md)
* [API Security](../../api/3-security.md)
