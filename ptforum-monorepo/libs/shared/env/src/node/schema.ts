/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/env – Node Environment Schema          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates server-only variables such as DATABASE_URL.
 */

import { z } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 🖥️  Node-only Variables
 * ───────────────────────────────────────────────────────────── */
export const nodeEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).describe(
    'Environment mode',
  ),
  DATABASE_URL: z.string().url().describe('PostgreSQL connection string'),
  AUTH_SECRET: z.string().min(32).describe('Auth.js session secret'),
  JWT_SECRET: z.string().min(32).describe('JWT secret'),
  OAUTH_GOOGLE_CLIENT_ID: z.string().describe('Google OAuth client ID'),
  OAUTH_GOOGLE_CLIENT_SECRET: z
    .string()
    .describe('Google OAuth client secret'),
});

export type NodeEnv = z.infer<typeof nodeEnvSchema>;
