/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/contracts – Membership Schema          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas for membership records and DTOs. A membership
 * links a user to a tier (STANDARD, PREMIUM, etc.) and tracks
 * activity status over time.
 */

import { z } from 'zod';
import type {
  MembershipId,
  UserId,
  MembershipTier,
} from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 🎫 Core Membership Schema
 * ───────────────────────────────────────────────────────────── */
export const MembershipSchema = z.object({
  id: uuidBrand<MembershipId>().describe('Membership ID'),
  userId: uuidBrand<UserId>().describe('User ID'),
  tier: z
    .enum(['STANDARD', 'PREMIUM', 'STUDENT', 'YOUTH'])
    .describe('Membership tier') as z.ZodType<MembershipTier>,
  active: z.boolean().describe('Membership status'),
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
});

/* ─────────────────────────────────────────────────────────────
 * 📝 DTO Schemas
 * ───────────────────────────────────────────────────────────── */
export const CreateMembershipDTOSchema = z.object({
  userId: uuidBrand<UserId>().describe('User ID'),
  tier: z
    .enum(['STANDARD', 'PREMIUM', 'STUDENT', 'YOUTH'])
    .describe('Membership tier') as z.ZodType<MembershipTier>,
});

export const UpdateMembershipDTOSchema = CreateMembershipDTOSchema.extend({
  active: z.boolean().optional().describe('Membership status'),
})
  .partial()
  .describe('Partial membership update');

/* ─────────────────────────────────────────────────────────────
 * 🧩 Inferred Types
 * ───────────────────────────────────────────────────────────── */
export type Membership = z.infer<typeof MembershipSchema>;
export type CreateMembershipDTO = z.infer<typeof CreateMembershipDTOSchema>;
export type UpdateMembershipDTO = z.infer<typeof UpdateMembershipDTOSchema>;
