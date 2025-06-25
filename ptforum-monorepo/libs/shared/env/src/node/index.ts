/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/env – Node Env Loader                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

import { validateEnv } from '../utils/zod-env';
import { nodeEnvSchema } from './schema';
import type { NodeEnv } from './schema';

/* ─────────────────────────────────────────────────────────────
 * 🌳 Lazy-validated Singleton
 * ───────────────────────────────────────────────────────────── */
export const env: Readonly<NodeEnv> = (() => {
  if (typeof window !== 'undefined') {
    throw new Error('Attempted to access server env in the browser');
  }
  return validateEnv(process.env, nodeEnvSchema);
})();
