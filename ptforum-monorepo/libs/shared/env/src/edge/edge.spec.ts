import { describe, it, expect } from 'vitest';
import { edgeEnvSchema } from './schema';
import { validateEnv } from '../utils/zod-env';

describe('edgeEnvSchema', () => {
  it('accepts minimal valid edge vars', () => {
    expect(() =>
      validateEnv(
        {
          DATABASE_URL: 'postgres://x:y@edge:5432/db',
          JWT_SECRET: 'z'.repeat(32),
        },
        edgeEnvSchema,
      ),
    ).not.toThrow();
  });

  it('rejects short JWT secret', () => {
    expect(() =>
      validateEnv(
        {
          DATABASE_URL: 'postgres://x:y@edge:5432/db',
          JWT_SECRET: 'short',
        },
        edgeEnvSchema,
      ),
    ).toThrow();
  });
});
