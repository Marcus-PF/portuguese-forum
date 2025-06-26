import { vi } from 'vitest';

/* ─── Mock @ptforum/env so it never crashes in jsdom ───────────── */
vi.mock('@ptforum/env', () => ({
  env: {
    NODE_ENV: 'test',
    NEXT_PUBLIC_ANALYTICS_PROVIDER: 'plausible',
    NEXT_PUBLIC_ANALYTICS_DOMAIN: 'test.domain',
    POSTHOG_API_KEY: '',
    POSTHOG_HOST: '',
  },
}));

/* ─── Mock @ptforum/logger with spies we can inspect ───────────── */
vi.mock('@ptforum/logger', () => {
  return {
    logDebug: vi.fn(),
    logError: vi.fn(),
  };
});

/* ─── Provide safe globals used by adapters / server tracker ───── */
if (typeof window !== 'undefined') {
  (window as any).plausible = (window as any).plausible ?? vi.fn();
}
global.fetch = vi.fn(() =>
  Promise.resolve({ ok: true, json: () => ({}) }),
) as any;
