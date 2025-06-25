/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/contracts – User Schema Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates core user schema and auth DTOs.
 */

import { describe, it, expect } from 'vitest';
import { UserSchema } from './user.schema';
import { AuthLoginSchema, AuthRegisterSchema } from './auth.schema';

describe('UserSchema', () => {
  it('validates a correct user', () => {
    const result = UserSchema.parse({
      id: '00000000-0000-0000-0000-000000000000',
      name: 'Maria João',
      email: 'maria@example.com',
      role: 'MEMBER',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    expect(result.name).toBe('Maria João');
  });

  it('rejects invalid email', () => {
    expect(() =>
      UserSchema.parse({
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Bad Email',
        email: 'notanemail',
        role: 'MEMBER',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ).toThrow();
  });
});

describe('AuthLoginSchema', () => {
  it('accepts valid credentials', () => {
    expect(() =>
      AuthLoginSchema.parse({
        email: 'joao@example.com',
        password: 'secure123',
      }),
    ).not.toThrow();
  });

  it('rejects short passwords', () => {
    expect(() =>
      AuthLoginSchema.parse({
        email: 'joao@example.com',
        password: '123',
      }),
    ).toThrow();
  });
});

describe('AuthRegisterSchema', () => {
  it('uses default role if not specified', () => {
    const parsed = AuthRegisterSchema.parse({
      name: 'Joana',
      email: 'joana@example.com',
      password: 'validpass123',
    });
    expect(parsed.role).toBe('MEMBER');
  });
});
