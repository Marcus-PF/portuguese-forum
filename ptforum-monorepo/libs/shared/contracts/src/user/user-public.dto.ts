/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃   @ptforum/contracts – UserPublic DTO Schema          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Publicly exposed representation of a user. Used in
 * APIs and frontend without sensitive information.
 */

import { z } from 'zod';
import type { UserId, UserRole } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 👤 Public-facing User DTO
 * ───────────────────────────────────────────────────────────── */
export const UserPublicDTOSchema = z.object({
  id: uuidBrand<UserId>().describe('User ID'),
  name: z.string().describe('User full name'),
  role: z.enum(['ADMIN', 'MANAGER', 'MEMBER', 'GUEST']).describe('User role') as z.ZodType<UserRole>,
});

export type UserPublicDTO = z.infer<typeof UserPublicDTOSchema>;
