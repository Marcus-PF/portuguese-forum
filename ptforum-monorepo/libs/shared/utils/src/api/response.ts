/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            @ptforum/utils – API Utilities             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Helpers for consistent API responses.
 */

import type { UserId } from '@ptforum/types';

/* ─────────────────────────────────────────────────────────────
 * ✅ Success Envelope
 * ───────────────────────────────────────────────────────────── */

/**
 * Wraps data in a standard PFSA API success envelope.
 */
export function successResponse<T>(
  data: T,
  meta?: Record<string, unknown>,
): { status: 'success'; data: T; meta?: Record<string, unknown> } {
  return { status: 'success', data, meta };
}

/* ─────────────────────────────────────────────────────────────
 * 🆔 Branded ID Helpers
 * ───────────────────────────────────────────────────────────── */

/**
 * Strips the brand wrapper from a UserId for plain JSON.
 */
export const formatUserId = (id: UserId): string => id as unknown as string;
