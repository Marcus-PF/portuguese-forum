/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/contracts – Club Schema Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for validation of club Zod schemas and DTOs.
 */

import { describe, it, expect } from 'vitest';
import { ClubSchema, CreateClubDTOSchema } from './club.schema';

describe('ClubSchema', () => {
  it('validates a correct club', () => {
    expect(() =>
      ClubSchema.parse({
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Youth Club',
        description: 'A vibrant community for youth in the PFSA.',
        leaderId: '789e4567-e89b-12d3-a456-426614174999',
        memberIds: [
          '123e4567-e89b-12d3-a456-426614174111',
          '123e4567-e89b-12d3-a456-426614174222',
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).not.toThrow();
  });

  it('fails with short name or description', () => {
    expect(() =>
      ClubSchema.parse({
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Yo',
        description: 'Short',
        leaderId: '789e4567-e89b-12d3-a456-426614174999',
        memberIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toThrow();
  });
});

describe('CreateClubDTOSchema', () => {
  it('requires minimum fields', () => {
    expect(() =>
      CreateClubDTOSchema.parse({
        name: 'Literature Club',
        description: 'A place for sharing literary interests',
        leaderId: '123e4567-e89b-12d3-a456-426614174333',
      })
    ).not.toThrow();
  });
});
