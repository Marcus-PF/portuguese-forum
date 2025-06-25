/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃ @ptforum/contracts – Search Query Schema              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Schema for search keywords passed to filter API results.
 */

import { z } from 'zod';

export const SearchQuerySchema = z.object({
  q: z.string().min(1).max(100).describe('Search keyword'),
});

export type SearchQuery = z.infer<typeof SearchQuerySchema>;
