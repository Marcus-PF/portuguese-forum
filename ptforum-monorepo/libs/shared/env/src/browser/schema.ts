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
});

export type BrowserEnv = z.infer<typeof browserEnvSchema>;
