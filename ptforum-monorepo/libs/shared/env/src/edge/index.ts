/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/env – Edge Env Loader                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

import { validateEnv } from '../utils/zod-env';
import { edgeEnvSchema } from './schema';
import type { EdgeEnv } from './schema';

export const edgeEnv: Readonly<EdgeEnv> = validateEnv(
  process.env,
  edgeEnvSchema,
);
