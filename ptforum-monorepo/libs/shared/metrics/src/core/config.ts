/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – Runtime Analytics Config    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Centralised provider selection & settings, driven by
 * environment variables from @ptforum/env.
 */
import { env } from '@ptforum/env';

type AnalyticsProvider = 'plausible' | 'console' | 'posthog';

export const analyticsConfig: {
  provider: AnalyticsProvider;
  plausible: { domain: string };
  posthog: { apiKey: string; host: string };
} = {
  provider:
    (env.NEXT_PUBLIC_ANALYTICS_PROVIDER as AnalyticsProvider)
    ?? (env.NODE_ENV === 'production' ? 'plausible' : 'console'),

  plausible: {
    domain: env.NEXT_PUBLIC_ANALYTICS_DOMAIN ?? 'portugueseforum.org.za',
  },

  posthog: {
    apiKey: env.POSTHOG_API_KEY ?? '',
    host: env.POSTHOG_HOST ?? 'https://app.posthog.com',
  },
};
