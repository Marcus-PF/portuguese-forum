/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/contracts – Pagination Schema          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schema for common pagination query parameters used
 * across list endpoints in the PFSA API and frontend forms.
 */

import { z } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 📄 Pagination Query Schema
 * ───────────────────────────────────────────────────────────── */
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1).describe('Page number'),
  size: z.coerce.number().int().positive().max(100).default(10).describe('Items per page'),
});

export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
