/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – Plausible Adapter           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Client-side event tracking via window.plausible.
 * (No identify support – Plausible is anonymous by design.)
 */

import type { MetricsAdapter, MetricsEvent } from '../core/types';
import { analyticsConfig } from '../core/config';

interface PlausibleWindow {
  plausible?: (event: string, options?: { props?: MetricsEvent['properties'] }) => void;
}

declare const window: Window & PlausibleWindow;

export const createPlausibleAdapter = (): MetricsAdapter => ({
  track: ({ name, properties }: MetricsEvent) => {
    if (
      typeof window !== 'undefined' &&
      window.plausible &&
      analyticsConfig.provider === 'plausible'
    ) {
      window.plausible(name, { props: properties });
    }
  },
});
