import { describe, it, expect } from 'vitest';
import { formatDate, isFutureDate } from './format';

describe('formatDate', () => {
  it('formats ISO string (en-ZA)', () => {
    expect(formatDate('2025-01-10T00:00:00Z')).toBe('10 Jan 2025');
  });

  it('formats Date object (pt-PT)', () => {
    expect(formatDate(new Date('2025-01-10'), 'pt-PT')).toBe('10 Jan 2025');
  });
});

describe('isFutureDate', () => {
  it('detects future', () => {
    expect(isFutureDate('2999-12-31')).toBe(true);
  });

  it('detects past', () => {
    expect(isFutureDate('2000-01-01')).toBe(false);
  });
});
