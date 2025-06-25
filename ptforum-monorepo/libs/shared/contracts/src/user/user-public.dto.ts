// src/user/user-public.dto.ts
import { z } from 'zod';
import type { UserId, UserRole } from '@ptforum/types';

export const UserPublicDTOSchema = z.object({
  id: z.string().uuid().describe('User ID') as z.ZodType<UserId>,
  name: z.string().describe('User full name'),
  role: z.enum(['ADMIN', 'MANAGER', 'MEMBER', 'GUEST']).describe('User role') as z.ZodType<UserRole>,
});

export type UserPublicDTO = z.infer<typeof UserPublicDTOSchema>;