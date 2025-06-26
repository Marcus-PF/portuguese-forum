/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/metrics – React Context & Hook        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides <MetricsProvider> and useMetrics() for client
 * components in Next.js 15 or React apps.
 */

import { createContext, useContext, type ReactNode } from 'react';
import { track, identify } from '../core/tracker';
import type { MetricsEvent } from '../core/types';
import type { UserId } from '@ptforum/types';

/**
 * Metrics context shape.
 */
interface MetricsContextValue {
  track: (name: MetricsEvent['name'], properties?: MetricsEvent['properties']) => void;
  identify: (userId: UserId, traits?: Record<string, string | number | boolean>) => void;
}

/**
 * Default implementation using the public API.
 */
const defaultContext: MetricsContextValue = {
  track,
  identify,
};

/**
 * Metrics context for React usage.
 */
export const MetricsContext = createContext<MetricsContextValue>(defaultContext);

/**
 * Hook to access metrics context.
 */
export const useMetrics = () => useContext(MetricsContext);

/**
 * Metrics provider for wrapping components.
 */
export const MetricsProvider = ({ children }: { children: ReactNode }) => (
  <MetricsContext.Provider value={defaultContext}>
    {children}
  </MetricsContext.Provider>
);
