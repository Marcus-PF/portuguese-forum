/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/contracts – Event Schema Tests         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for validating event schema correctness.
 */

import { describe, it, expect } from 'vitest';
import {
  EventSchema,
  CreateEventDTOSchema,
} from './event.schema';

describe('EventSchema', () => {
  it('accepts a valid event', () => {
    expect(() =>
      EventSchema.parse({
        id: '123e4567-e89b-12d3-a456-426614174000',
        title: 'Community Picnic',
        description: 'A fun-filled day for families and friends.',
        startDate: new Date(),
        endDate: new Date(),
        location: 'Central Park, Lisbon',
        hostId: 'abc34567-e89b-12d3-a456-426614174999',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).not.toThrow();
  });

  it('rejects if title is too short or missing required fields', () => {
    expect(() =>
      EventSchema.parse({
        id: '123e4567-e89b-12d3-a456-426614174000',
        title: 'Pic',
        startDate: new Date(),
        endDate: new Date(),
        location: '',
        hostId: 'abc34567-e89b-12d3-a456-426614174999',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toThrow();
  });
});

describe('CreateEventDTOSchema', () => {
  it('validates valid creation input', () => {
    expect(() =>
      CreateEventDTOSchema.parse({
        title: 'Youth Meetup',
        startDate: new Date(),
        endDate: new Date(),
        location: 'Forum Hall',
        hostId: 'f88e4567-e89b-12d3-a456-426614171234',
      })
    ).not.toThrow();
  });
});
