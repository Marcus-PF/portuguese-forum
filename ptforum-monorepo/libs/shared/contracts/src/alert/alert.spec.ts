/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @ptforum/contracts – Alert Schema Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests validating alert schemas for correct validation
 * of messages, severity levels, and optional expiry.
 */

import { describe, it, expect } from 'vitest';
import {
  AlertSchema,
  CreateAlertDTOSchema,
} from './alert.schema';

describe('AlertSchema', () => {
  it('validates a correct alert object', () => {
    expect(() =>
      AlertSchema.parse({
        id: 'a2f8e456-e89b-12d3-a456-426614170000',
        message: 'System will go offline at midnight.',
        severity: 'WARNING',
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      })
    ).not.toThrow();
  });

  it('rejects an invalid severity value', () => {
    expect(() =>
      AlertSchema.parse({
        id: 'a2f8e456-e89b-12d3-a456-426614170000',
        message: 'Testing invalid severity',
        severity: 'CRITICAL', // ❌ invalid enum
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toThrow();
  });
});

describe('CreateAlertDTOSchema', () => {
  it('accepts a minimal valid alert', () => {
    expect(() =>
      CreateAlertDTOSchema.parse({
        message: 'Update successful.',
        severity: 'INFO',
      })
    ).not.toThrow();
  });

  it('requires the message field', () => {
    expect(() =>
      CreateAlertDTOSchema.parse({
        severity: 'INFO',
      })
    ).toThrow();
  });
});
