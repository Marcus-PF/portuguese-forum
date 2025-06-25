import { describe, it, expect } from 'vitest';
import { nodeEnvSchema } from './schema';
import { validateEnv } from '../utils/zod-env';

describe('nodeEnvSchema', () => {
  it('accepts valid variables', () => {
    const good = {
      NODE_ENV: 'development',
      DATABASE_URL: 'postgresql://user:pass@localhost:5432/db',
      AUTH_SECRET: 'x'.repeat(32),
      JWT_SECRET: 'y'.repeat(32),
      OAUTH_GOOGLE_CLIENT_ID: 'id',
      OAUTH_GOOGLE_CLIENT_SECRET: 'secret',
    };
    expect(() => validateEnv(good, nodeEnvSchema)).not.toThrow();
  });

  it('rejects missing DATABASE_URL', () => {
    const bad = {
      NODE_ENV: 'development',
      AUTH_SECRET: 'x'.repeat(32),
      JWT_SECRET: 'y'.repeat(32),
      OAUTH_GOOGLE_CLIENT_ID: 'id',
      OAUTH_GOOGLE_CLIENT_SECRET: 'secret',
    };
    expect(() => validateEnv(bad, nodeEnvSchema)).toThrow();
  });
});
