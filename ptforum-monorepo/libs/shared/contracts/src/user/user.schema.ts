// src/user/user.schema.ts
import { z } from 'zod';
import type { UserId, UserRole } from '@ptforum/types';

export const UserSchema = z.object({
  id: z.string().uuid().describe('User ID') as z.ZodType<UserId>,
  name: z.string().min(2).max(100).describe('User full name'),
  email: z.string().email().describe('User email address'),
  role: z.enum(['ADMIN', 'MANAGER', 'MEMBER', 'GUEST']).describe('User role') as z.ZodType<UserRole>,
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
  profileImageUrl: z.string().url().optional().describe('Profile image URL'),
});

export type User = z.infer<typeof UserSchema>;