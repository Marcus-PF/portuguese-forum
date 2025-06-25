/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/types – Brand Primitives Index        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Barrel re-exports for the Branded<T, Tag> utility and
 * all nominal ID primitives. Import from here to guarantee
 * consistent, type-safe identifiers across the monorepo.
 */

/* ─────────────────────────────────────────────────────────────
 * 🛠  Branded Type Utility
 * ───────────────────────────────────────────────────────────── */
export * from './brand';

/* ─────────────────────────────────────────────────────────────
 * 🔑  Entity ID Primitives
 * ───────────────────────────────────────────────────────────── */
export * from './user-id';
export * from './post-id';
export * from './comment-id';
export * from './tag-id';
export * from './club-id';
export * from './event-id';
export * from './alert-id';
export * from './membership-id';
