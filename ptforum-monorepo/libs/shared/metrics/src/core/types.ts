/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – Core Metrics Types          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Shared types for tracking events, properties, and adapter
 * interfaces across client and server analytics.
 */

import type { UserId } from '@ptforum/types';

/**
 * Structure for a trackable metrics event.
 */
export interface MetricsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

/**
 * Interface for pluggable analytics adapters.
 */
export interface MetricsAdapter {
  track: (event: MetricsEvent) => void;
  identify?: (userId: UserId, traits?: Record<string, string | number | boolean>) => void;
}
