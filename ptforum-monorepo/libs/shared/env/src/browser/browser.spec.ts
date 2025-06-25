import { describe, it, expect } from 'vitest';
import { browserEnvSchema } from './schema';
import { validateEnv } from '../utils/zod-env';

describe('browserEnvSchema', () => {
  it('validates correct vars', () => {
    expect(() =>
      validateEnv(
        { NEXT_PUBLIC_API_URL: 'https://api.example.com' },
        browserEnvSchema,
      ),
    ).not.toThrow();
  });

  it('rejects bad URL', () => {
    expect(() =>
      validateEnv({ NEXT_PUBLIC_API_URL: 'bad' }, browserEnvSchema),
    ).toThrow();
  });
});
