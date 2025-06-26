/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – Console Adapter             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Development-time adapter that logs events to the console
 * using @ptforum/logger for consistent formatting.
 */

import type { MetricsAdapter, MetricsEvent } from '../core/types';
import { logDebug } from '@ptforum/logger';

export const createConsoleAdapter = (): MetricsAdapter => ({
  track: (event: MetricsEvent) =>
    logDebug({ message: `[metrics] ${event.name}`, context: event.properties }),
  identify: (userId, traits) =>
    logDebug({ message: `[identify] ${userId}`, context: traits }),
});
