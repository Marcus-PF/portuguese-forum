/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃                 @ptforum/types – Index                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central export hub for all shared type definitions and
 * branded primitives used throughout the Forum monorepo.
 * Organized by domain for clarity and consistent, type-safe access.
 */

/* ─────────────────────────────────────────────────────────────
 * 🧱 Branded Primitives & Tagged Types
 * ───────────────────────────────────────────────────────────── */
export * from './brand';

/* ─────────────────────────────────────────────────────────────
 * 👤 User Domain Types
 * ───────────────────────────────────────────────────────────── */
export * from './user';

/* ─────────────────────────────────────────────────────────────
 * 📰 Post / Content Types
 * ───────────────────────────────────────────────────────────── */
export * from './post';
export * from './comment';
export * from './tag';

/* ─────────────────────────────────────────────────────────────
 * 🏘  Community & Membership Types
 * ───────────────────────────────────────────────────────────── */
export * from './club';
export * from './membership';

/* ─────────────────────────────────────────────────────────────
 * 📅 Event & Notification Types
 * ───────────────────────────────────────────────────────────── */
export * from './event';
export * from './alert';

/* ─────────────────────────────────────────────────────────────
 * 🧩 Common Utilities & Interfaces
 * ───────────────────────────────────────────────────────────── */
export * from './common';

/* ─────────────────────────────────────────────────────────────
 * 🌐 API Contracts & DTOs
 * ───────────────────────────────────────────────────────────── */
export * from './api';
