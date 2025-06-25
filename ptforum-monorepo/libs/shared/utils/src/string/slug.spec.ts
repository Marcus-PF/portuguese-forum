import { describe, it, expect } from 'vitest';
import { generateSlug, capitalize } from './slug';

describe('generateSlug', () => {
  it('removes special chars and accents', () => {
    expect(generateSlug('Café & Events')).toBe('cafe-events');
  });
});

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('forum')).toBe('Forum');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
