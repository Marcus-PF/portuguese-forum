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
  NEXT_PUBLIC_ANALYTICS_PROVIDER: z.enum(['plausible', 'console', 'posthog']).optional(),
  NEXT_PUBLIC_ANALYTICS_DOMAIN: z
    .string()
    .min(1)
    .describe('Domain for Plausible or other analytics'),
  POSTHOG_API_KEY: z
    .string()
    .optional()
    .describe('PostHog project API key (if enabled)'),
  POSTHOG_HOST: z
    .string()
    .optional()
    .describe('PostHog instance host (default: https://app.posthog.com)'),
});

export type NodeEnv = z.infer<typeof nodeEnvSchema>;
