import { describe, it, expect } from 'vitest';
import { formatError, isNetworkError } from './format';

describe('formatError', () => {
  it('formats Error instance', () => {
    const e = new TypeError('Bad data');
    expect(formatError(e)).toEqual({ message: 'Bad data', code: 'TypeError' });
  });
});

describe('isNetworkError', () => {
  it('detects network error keywords', () => {
    expect(isNetworkError(new Error('Network request failed'))).toBe(true);
  });
});
