/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/metrics – Public Tracker API         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides runtime-safe methods for tracking events and
 * identifying users. Adapter can be swapped dynamically.
 */

import type { UserId } from '@ptforum/types';
import type { MetricsEvent, MetricsAdapter } from './types';
import { createNoopAdapter } from '../adapters/noop';

/* ─────────────────────────────────────────────────────────────
 * 🔁 Adapter Management
 * ───────────────────────────────────────────────────────────── */
let adapter: MetricsAdapter = createNoopAdapter();

/**
 * Sets the active analytics adapter.
 * @example setMetricsAdapter(createPlausibleAdapter())
 */
export const setMetricsAdapter = (a: MetricsAdapter): void => {
  adapter = a;
};

/* ─────────────────────────────────────────────────────────────
 * 📊 Public API
 * ───────────────────────────────────────────────────────────── */

/**
 * Tracks an event with optional metadata.
 * @example track('page_view', { path: '/home' })
 */
export const track = (
  name: string,
  properties?: MetricsEvent['properties'],
): void => {
  adapter.track({ name, properties });
};

/**
 * Identifies a user by branded UserId with optional traits.
 * @example identify(asUserId('123'), { role: 'member' })
 */
export const identify = (
  userId: UserId,
  traits?: Record<string, string | number | boolean>,
): void => {
  adapter.identify?.(userId, traits);
};

/* ─────────────────────────────────────────────────────────────
 * 🛠 Helper – cast plain string → branded UserId
 * ───────────────────────────────────────────────────────────── */

/**
 * Convenience helper to brand a string as **UserId**.
 * Use this when you have a raw string and need a UserId.
 *
 * @example
 * identify(asUserId('abc-123'), { role: 'admin' });
 */
export const asUserId = (id: string): UserId => id as UserId;
