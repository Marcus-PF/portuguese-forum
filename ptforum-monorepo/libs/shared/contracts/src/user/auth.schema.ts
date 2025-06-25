// src/user/auth.schema.ts
import { z } from 'zod';

export const AuthLoginSchema = z.object({
  email: z.string().email().describe('User email address'),
  password: z.string().min(8).describe('User password'),
});

export const AuthRegisterSchema = AuthLoginSchema.extend({
  name: z.string().min(2).max(100).describe('User full name'),
  role: z.enum(['MEMBER', 'GUEST']).default('MEMBER').describe('User role'),
});

export type AuthLoginInput = z.infer<typeof AuthLoginSchema>;
export type AuthRegisterInput = z.infer<typeof AuthRegisterSchema>;