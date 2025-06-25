/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/contracts – Branded Helper Utilities     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Factory helpers for common branded primitive schemas
 * (e.g. UUID-based entity identifiers).
 */

import { z, ZodType } from 'zod';

/**
 * Returns a UUID string schema branded as `<TId>`.
 * @example const UserIdSchema = uuidBrand<UserId>();
 */
export const uuidBrand = <TId>() =>
  z.string().uuid() as unknown as ZodType<TId>;
