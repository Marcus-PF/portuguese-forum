/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃ @ptforum/contracts – Sort Query Schema                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Schema for sorting resources by field and direction.
 */

import { z } from 'zod';

export const SortQuerySchema = z.object({
  sortBy: z.string().min(1).max(50).describe('Field to sort by'),
  sortOrder: z.enum(['asc', 'desc']).default('asc').describe('Sort direction'),
});

export type SortQuery = z.infer<typeof SortQuerySchema>;
