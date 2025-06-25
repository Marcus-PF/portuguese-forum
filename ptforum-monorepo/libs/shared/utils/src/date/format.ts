/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            @ptforum/utils – Date Utilities            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Lightweight helpers built on date-fns for international
 * formatting and common date predicates.
 */

import { format, parseISO } from 'date-fns';
import { enZA, pt } from 'date-fns/locale';

/* ─────────────────────────────────────────────────────────────
 * 📆 Formatting
 * ───────────────────────────────────────────────────────────── */

/**
 * Formats a date to `dd MMM yyyy` in the requested locale.
 * @param date   Date object or ISO string
 * @param locale 'en-ZA' | 'pt-PT' (default 'en-ZA')
 * @example formatDate('2025-01-10', 'pt-PT') ➜ '10 Jan 2025'
 */
export function formatDate(date: Date | string, locale: 'en-ZA' | 'pt-PT' = 'en-ZA'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const raw = format(dateObj, 'dd MMM yyyy', { locale: locale === 'pt-PT' ? pt : enZA });
  return raw.replace(/\b([a-z])/g, (m) => m.toUpperCase());
}

/* ─────────────────────────────────────────────────────────────
 * 🔮 Predicates
 * ───────────────────────────────────────────────────────────── */

/**
 * Checks whether a date lies in the future (UTC compare).
 * @example isFutureDate('2030-01-01') ➜ true
 */
export function isFutureDate(date: Date | string): boolean {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return d.getTime() > Date.now();
}
