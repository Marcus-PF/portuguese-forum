/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – Server-side Tracker         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Sends events to Plausible’s HTTP API from Node/Hono.
 */

import type { EventName } from './event-types';
import { analyticsConfig } from './config';
import { logError } from '@ptforum/logger';

export async function trackServerEvent(
  name: EventName,
  properties: Record<string, string | number | boolean> = {},
): Promise<void> {
  if (analyticsConfig.provider !== 'plausible') return;

  try {
    const res = await fetch('https://plausible.io/api/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        domain: analyticsConfig.plausible.domain,
        props: properties,
      }),
    });

    if (!res.ok) {
      logError(`Failed to track server event: ${res.statusText}`, { event: name });
    }
  } catch (error) {
    logError(error as Error, { event: name });
  }
}
