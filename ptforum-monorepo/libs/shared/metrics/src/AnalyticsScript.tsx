/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – <AnalyticsScript />         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Next.js <Script> loader for Plausible analytics.
 */

import Script from 'next/script';
import { analyticsConfig } from './core/config';

export function AnalyticsScript() {
  if (analyticsConfig.provider !== 'plausible') return null;

  return (
    <Script
      src="https://plausible.io/js/script.js"
      data-domain={analyticsConfig.plausible.domain}
      strategy="afterInteractive"
      defer
    />
  );
}
