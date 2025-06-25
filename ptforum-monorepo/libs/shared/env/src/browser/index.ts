/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/env – Browser Env Loader               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

import { validateEnv } from '../utils/zod-env';
import { browserEnvSchema } from './schema';
import type { BrowserEnv } from './schema';

/* ─────────────────────────────────────────────────────────────
 * 🌐 Client-side Variables
 * ───────────────────────────────────────────────────────────── */
const raw: Record<string, unknown> =
  typeof window !== 'undefined' && '__ENV__' in window
    ? (window as unknown as { __ENV__: Record<string, unknown> }).__ENV__
    : process.env;

export const browserEnv: Readonly<BrowserEnv> = validateEnv(raw, browserEnvSchema);
