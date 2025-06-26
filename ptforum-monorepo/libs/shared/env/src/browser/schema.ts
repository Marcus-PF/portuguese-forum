/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @ptforum/env – Browser Environment Schema        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Only NEXT_PUBLIC_* vars are allowed here.
 */

import { z } from 'zod';

export const browserEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().describe('Backend API URL'),
  NEXT_PUBLIC_ANALYTICS_ID: z
    .string()
    .optional()
    .describe('Analytics provider ID'),
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

export type BrowserEnv = z.infer<typeof browserEnvSchema>;
