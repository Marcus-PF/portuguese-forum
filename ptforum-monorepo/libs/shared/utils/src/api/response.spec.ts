import { describe, it, expect } from 'vitest';
import { successResponse, formatUserId } from './response';

describe('successResponse', () => {
  it('wraps data and meta', () => {
    const json = successResponse({ ok: true }, { total: 1 });
    expect(json).toEqual({ status: 'success', data: { ok: true }, meta: { total: 1 } });
  });
});

describe('formatUserId', () => {
  it('casts branded id to string', () => {
    expect(formatUserId('abc' as any)).toBe('abc');
  });
});
