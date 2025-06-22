/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            Tailwind Class Composer – Tests            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the `cn()` utility.
 */

import { describe, it, expect } from 'vitest';
import { cn } from './cn.js';

describe('cn', () => {
  it('merges multiple classes', () => {
    expect(cn('text-sm', 'bg-white')).toBe('text-sm bg-white');
  });

  it('filters out falsy values', () => {
    expect(cn('text-sm', false, null, undefined)).toBe('text-sm');
  });

  it('resolves Tailwind conflicts', () => {
    expect(cn('bg-white', 'bg-black')).toBe('bg-black');
  });
});
