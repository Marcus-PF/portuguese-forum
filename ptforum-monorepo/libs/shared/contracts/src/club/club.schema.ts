/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          @ptforum/contracts – Club Schema             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Schema and DTO definitions for clubs in the PFSA
 * ecosystem. Clubs represent organized community groups.
 */

import { z } from 'zod';
import type { ClubId, UserId } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 🏛️ Core Club Schema
 * ───────────────────────────────────────────────────────────── */
export const ClubSchema = z.object({
  id: uuidBrand<ClubId>().describe('Club ID'),
  name: z.string().min(3).max(100).describe('Club name'),
  description: z.string().min(10).describe('Club description'),
  leaderId: uuidBrand<UserId>().describe('Club leader user ID'),
  memberIds: z
    .array(uuidBrand<UserId>())
    .describe('Club member IDs'),
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
});

/* ─────────────────────────────────────────────────────────────
 * ✍️ DTOs
 * ───────────────────────────────────────────────────────────── */
export const CreateClubDTOSchema = z.object({
  name: z.string().min(3).max(100).describe('Club name'),
  description: z.string().min(10).describe('Club description'),
  leaderId: uuidBrand<UserId>().describe('Club leader user ID'),
});

export const UpdateClubDTOSchema = CreateClubDTOSchema
  .partial()
  .describe('Partial club update');

/* ─────────────────────────────────────────────────────────────
 * 🧩 Inferred Types
 * ───────────────────────────────────────────────────────────── */
export type Club = z.infer<typeof ClubSchema>;
export type CreateClubDTO = z.infer<typeof CreateClubDTOSchema>;
export type UpdateClubDTO = z.infer<typeof UpdateClubDTOSchema>;
