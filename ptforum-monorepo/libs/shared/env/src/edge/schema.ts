/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/env – Edge Environment Schema         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Variables available in serverless edge environments.
 */

import { z } from 'zod';

export const edgeEnvSchema = z.object({
  EDGE_RUNTIME: z.string().optional().describe('Edge runtime flag'),
  DATABASE_URL: z.string().url().describe('Edge-compatible DB URL'),
  JWT_SECRET: z.string().min(32).describe('JWT secret'),
});

export type EdgeEnv = z.infer<typeof edgeEnvSchema>;
