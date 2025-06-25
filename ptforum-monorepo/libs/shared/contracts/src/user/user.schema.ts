/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/contracts – User Schema              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

import { z } from 'zod';
import type { UserId, UserRole } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 👤 User Model
 * ───────────────────────────────────────────────────────────── */
export const UserSchema = z.object({
  id: uuidBrand<UserId>().describe('User ID'),
  name: z.string().min(2).max(100).describe('User full name'),
  email: z.string().email().describe('User email address'),
  role: z
    .enum(['ADMIN', 'MANAGER', 'MEMBER', 'GUEST'])
    .describe('User role') as z.ZodType<UserRole>,
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
  profileImageUrl: z.string().url().optional().describe('Profile image URL'),
});

export type User = z.infer<typeof UserSchema>;
