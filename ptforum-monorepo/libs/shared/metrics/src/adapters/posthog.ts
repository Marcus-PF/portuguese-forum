/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – PostHog Adapter (Opt-in)    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Lightweight client-side adapter.  We deliberately avoid
 * pulling PostHog’s full type surface; instead we interact
 * with a minimal shim on `window.posthog`, initialised by
 * the consuming application (if desired).
 */

import type { MetricsAdapter, MetricsEvent } from '../core/types';
import { analyticsConfig } from '../core/config';

/* ─────────────────────────────────────────────────────────────
 * 🌐 Minimal PostHog window declaration (no `any`)
 * ───────────────────────────────────────────────────────────── */
interface PostHogJS {
  capture: (event: string, props?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
}

interface PostHogWindow {
  posthog?: PostHogJS;
}

// Extend the global Window type locally
declare const window: Window & PostHogWindow;

/* ─────────────────────────────────────────────────────────────
 * 🏗  Adapter Factory
 * ───────────────────────────────────────────────────────────── */
export const createPostHogAdapter = (): MetricsAdapter => {
  // Only enable if PostHog is the chosen provider *and* running in browser
  const enabled =
    typeof window !== 'undefined' && analyticsConfig.provider === 'posthog';

  if (enabled && !window.posthog) {
    // **Application responsibility**: load / init the PostHog JS snippet
    // before calling `setMetricsAdapter(createPostHogAdapter())`.
    console.warn(
      '[metrics] PostHog selected but window.posthog is not initialised.',
    );
  }

  const track = (event: MetricsEvent): void => {
    if (enabled && window.posthog) {
      window.posthog.capture(event.name, event.properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>): void => {
    if (enabled && window.posthog) {
      window.posthog.identify(userId, traits);
    }
  };

  return { track, identify };
};
