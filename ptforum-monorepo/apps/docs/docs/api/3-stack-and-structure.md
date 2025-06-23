
---

## 🔐 3.4 Middleware Stack

| Middleware | Function |
|------------|----------|
| `authMiddleware` | JWT verification, user roles |
| `rateLimit` | IP throttle per route |
| `cors` | CORS headers for frontend domains |
| `logger` | Structured request logging |
| `errorHandler` | Consistent JSON error response |
| `secureHeaders` | CSP, HSTS, referrer policy, XSS |

> Middleware is registered in `index.ts` before routes are mounted.

---

## 🌐 3.5 Environments

Handled by `@ptforum/env` with validation for each deployment target:

```env
MONGO_URL=mongodb+srv://...
JWT_SECRET=super-secret
CORS_ORIGIN=https://portugueseforum.org.za
UPLOAD_PROVIDER=s3
SENTRY_DSN=...
