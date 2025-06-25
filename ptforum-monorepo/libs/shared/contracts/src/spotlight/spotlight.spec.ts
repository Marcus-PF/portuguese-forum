/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/contracts – Spotlight Tests              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for spotlight schema validation and
 * DTO structures used in the public-facing app.
 */

import { describe, it, expect } from 'vitest';
import {
  SpotlightSchema,
  CreateSpotlightDTOSchema,
} from './spotlight.schema';

describe('SpotlightSchema', () => {
  it('validates a fully populated spotlight', () => {
    expect(() =>
      SpotlightSchema.parse({
        id: '5a7c8e34-e89b-12d3-a456-426614174999',
        type: 'MEMBER',
        name: 'Maria Da Costa',
        bio: 'A dedicated community member featured for her service.',
        photoUrl: 'https://example.com/maria.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).not.toThrow();
  });

  it('fails with an invalid type value', () => {
    expect(() =>
      SpotlightSchema.parse({
        id: '5a7c8e34-e89b-12d3-a456-426614174999',
        type: 'INFLUENCER', // ❌ Not part of enum
        name: 'Carlos',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toThrow();
  });
});

describe('CreateSpotlightDTOSchema', () => {
  it('allows optional fields to be omitted', () => {
    expect(() =>
      CreateSpotlightDTOSchema.parse({
        type: 'CLUB',
        name: 'Madeirense Association',
      })
    ).not.toThrow();
  });

  it('requires a minimum name length', () => {
    expect(() =>
      CreateSpotlightDTOSchema.parse({
        type: 'BUSINESS',
        name: 'A',
      })
    ).toThrow();
  });
});
