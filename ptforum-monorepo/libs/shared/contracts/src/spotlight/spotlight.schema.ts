/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/contracts – Spotlight Schema             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas for spotlighted community features such as
 * members, clubs, churches, and businesses showcased in the
 * PFSA platform. Used in carousels, highlights, and more.
 */

import { z } from 'zod';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 🌟 Spotlight Schema
 * ───────────────────────────────────────────────────────────── */
export const SpotlightSchema = z.object({
  id: uuidBrand().describe('Spotlight ID'),
  type: z
    .enum(['MEMBER', 'CLUB', 'CHURCH', 'BUSINESS'])
    .describe('Spotlight type'),
  name: z.string().min(2).max(100).describe('Spotlight name'),
  bio: z.string().min(10).optional().describe('Spotlight biography'),
  photoUrl: z.string().url().optional().describe('Spotlight photo URL'),
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
});

/* ─────────────────────────────────────────────────────────────
 * ✍️ DTO Schemas
 * ───────────────────────────────────────────────────────────── */
export const CreateSpotlightDTOSchema = z.object({
  type: z
    .enum(['MEMBER', 'CLUB', 'CHURCH', 'BUSINESS'])
    .describe('Spotlight type'),
  name: z.string().min(2).max(100).describe('Spotlight name'),
  bio: z.string().min(10).optional().describe('Spotlight biography'),
  photoUrl: z.string().url().optional().describe('Spotlight photo URL'),
});

export const UpdateSpotlightDTOSchema = CreateSpotlightDTOSchema.partial().describe(
  'Partial spotlight update'
);

/* ─────────────────────────────────────────────────────────────
 * 📘 Inferred Types
 * ───────────────────────────────────────────────────────────── */
export type Spotlight = z.infer<typeof SpotlightSchema>;
export type CreateSpotlightDTO = z.infer<typeof CreateSpotlightDTOSchema>;
export type UpdateSpotlightDTO = z.infer<typeof UpdateSpotlightDTOSchema>;
