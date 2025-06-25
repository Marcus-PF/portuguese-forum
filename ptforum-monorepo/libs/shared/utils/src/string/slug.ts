/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @ptforum/utils – String Utilities           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Helpers for slug generation & capitalization.
 */

/* ─────────────────────────────────────────────────────────────
 * 🌐 Slug
 * ───────────────────────────────────────────────────────────── */

/**
 * Converts arbitrary text into a kebab-case, ASCII-only slug.
 * @example generateSlug('Olá Mundo!') ➜ 'ola-mundo'
 */
export function generateSlug(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9]+/g, '-') // replace gaps
    .replace(/^-+|-+$/g, ''); // trim dashes
}

/* ─────────────────────────────────────────────────────────────
 * 🔠 Capitalize
 * ───────────────────────────────────────────────────────────── */

/**
 * Upper-cases the first letter of `input`.
 * @example capitalize('forum') ➜ 'Forum'
 */
export function capitalize(input: string): string {
  return input ? input[0].toUpperCase() + input.slice(1) : '';
}
