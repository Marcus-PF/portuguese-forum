---
sidebar_position: 9
title: Security & Compliance
description: Security libraries, authentication strategies, and legal compliance in the Nx monorepo
---

# 🛑 9. Security & Compliance

The @ptforum monorepo integrates best practices for security and data protection across all services. This includes authentication, input validation, secure storage, and adherence to international and local compliance standards.

---

## 🔐 9.1 Security Practices

| Category | Description |
|----------|-------------|
| **Authentication** | Powered by `@ptforum/auth` with secure JWT sessions, TOTP for 2FA, and Hono middleware guards |
| **Data Validation** | Enforced via `@ptforum/contracts` using Zod schemas across API and forms |
| **Web Security** | `@ptforum/security` provides protection against CSRF, XSS, and manages secure HTTP cookies |
| **Environment Secrets** | Stored securely in **Vercel Environment Variables** (for forum, admin, docs) and **Cloudflare Secrets** (for API). No secrets are committed or stored in `.env` files in production |

> ⚠️ Use `.env.example` as a local development reference only. Production keys should never be committed.

---

## 📋 9.2 Compliance Requirements

| Standard | Status | Notes |
|----------|--------|-------|
| **POPIA (South Africa)** | ✅ Active | Enforced for user data, forms, and payment interactions |
| **GDPR (EU)** | 🟡 Partial | Relevant only for events involving EU-based participants |
| **CIPC Registration** | ✅ Maintained | Forum registered as a legal NPC with South African regulators |

> See [`company-information/legal.md`](../company-information/legal.md) for detailed disclosures and draft contributor agreements.

---

## 📘 9.3 Key Libraries Supporting Compliance

| Library | Compliance Role |
|--------|------------------|
| `@ptforum/auth` | Handles authentication strategies (JWT, sessions, RBAC) |
| `@ptforum/contracts` | Zod schemas ensure data shape conformity |
| `@ptforum/security` | Sanitation, cookie config, client-server security helpers |
| `@ptforum/logger` | Tracks sensitive admin activity for audit purposes |
| `@ptforum/membership` | Anonymizes personal data; built with opt-in logic |
| `@ptforum/payments` | Validates payment details; restricts exposure of sensitive info |

---

## 🧹 9.4 Data Retention & Deletion

- User-generated data is stored with minimal personally identifiable information.
- Deletion requests follow internal workflows defined in:
  - [`@ptforum/docs/company-information/security-privacy.md`](../company-information/security-privacy.md)
- Logs and form submissions are purged based on expiration policies configured in services like Sentry or custom cron jobs.

---

## 🔗 Related Pages

- [Authentication](../architecture/authentication.md)
- [Security & Privacy](../company-information/security-privacy.md)
- [Legal & Regulatory](../company-information/legal-regulatory.md)
