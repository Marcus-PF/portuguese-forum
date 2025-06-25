/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @ptforum/utils – Error Utilities            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Safe error formatting helpers for APIs & logging.
 */

/* ─────────────────────────────────────────────────────────────
 * 📝 Formatter
 * ───────────────────────────────────────────────────────────── */

export function formatError(
  err: unknown,
): { message: string; code?: string } {
  return err instanceof Error
    ? { message: err.message, code: err.name }
    : { message: String(err) };
}

/* ─────────────────────────────────────────────────────────────
 * 🌐 Network Detector
 * ───────────────────────────────────────────────────────────── */

export function isNetworkError(err: unknown): boolean {
  return (
    err instanceof Error &&
    /fetch|network|axios/i.test(err.message ?? '')
  );
}
