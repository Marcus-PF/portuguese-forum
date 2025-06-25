/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/types – Branded Type Utility (Safe)      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * A lightweight utility to define nominal "branded" types
 * over primitives. Prevents misuse of structurally similar
 * types (like multiple `string` IDs). The `readonly` tag
 * helps enforce immutability and clarity.
 */

export type Branded<T, Tag extends string> = T & {
  readonly __brand: Tag;
};
