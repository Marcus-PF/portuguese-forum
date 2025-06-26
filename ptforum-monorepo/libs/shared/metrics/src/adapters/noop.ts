/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – No-op Adapter               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * A fallback adapter that performs no tracking. Used by
 * default and during tests or disabled analytics.
 */

import type { MetricsAdapter } from '../core/types';

/**
 * Creates a no-op adapter for testing or disabled tracking.
 * @returns MetricsAdapter with no-op methods
 */
export const createNoopAdapter = (): MetricsAdapter => ({
  /** noop */
  track: () => {
    // intentionally left blank (noop)
  },
  /** noop */
  identify: () => {
    // intentionally left blank (noop)
  },
});