/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/env – validateEnv Utility             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central helper that parses & validates raw environment
 * variables against a runtime-specific Zod schema.
 */

import { z, type ZodSchema } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 🔎 Validation Helper
 * ───────────────────────────────────────────────────────────── */
export function validateEnv<T extends ZodSchema>(
  rawEnv: unknown,
  schema: T,
): z.infer<T> {
  const result = schema.safeParse(rawEnv);
  if (!result.success) {
    console.error(
      '❌ Invalid environment variables:',
      result.error.flatten().fieldErrors,
    );
    throw new Error('Failed to load environment variables');
  }
  return result.data;
}
