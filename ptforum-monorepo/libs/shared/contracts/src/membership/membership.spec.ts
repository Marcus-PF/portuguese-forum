/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/contracts – Membership Schema Tests      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests ensuring Membership schemas correctly accept
 * and reject data according to business rules.
 */

import { describe, it, expect } from 'vitest';
import {
  MembershipSchema,
  CreateMembershipDTOSchema,
} from './membership.schema';

describe('MembershipSchema', () => {
  it('validates a correct membership', () => {
    expect(() =>
      MembershipSchema.parse({
        id: '111e4567-e89b-12d3-a456-426614170000',
        userId: '222e4567-e89b-12d3-a456-426614170111',
        tier: 'PREMIUM',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).not.toThrow();
  });

  it('rejects invalid tier', () => {
    expect(() =>
      MembershipSchema.parse({
        id: '111e4567-e89b-12d3-a456-426614170000',
        userId: '222e4567-e89b-12d3-a456-426614170111',
        tier: 'VIP', // ❌ not in enum
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toThrow();
  });
});

describe('CreateMembershipDTOSchema', () => {
  it('requires userId and tier', () => {
    expect(() =>
      CreateMembershipDTOSchema.parse({
        userId: '333e4567-e89b-12d3-a456-426614170222',
        tier: 'STANDARD',
      })
    ).not.toThrow();
  });

  it('fails when tier missing', () => {
    expect(() =>
      CreateMembershipDTOSchema.parse({
        userId: '333e4567-e89b-12d3-a456-426614170222',
      })
    ).toThrow();
  });
});
