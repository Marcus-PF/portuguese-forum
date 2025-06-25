/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/types – Alert Model             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents a system-generated alert displayed across
 * the platform. May indicate informational banners,
 * warnings, or urgent emergencies. Alerts can expire.
 */

import type { AlertId } from '../brand';
import type { WithId, Timestamped } from '../common';

/**
 * Alert severity levels for UI rendering and prioritization.
 */
export type AlertSeverity = 'INFO' | 'WARNING' | 'EMERGENCY';

export interface Alert extends WithId<AlertId>, Timestamped {
  /** Message content (usually short) */
  message: string;
  /** Importance level for rendering styles and logic */
  severity: AlertSeverity;
  /** Optional time when this alert should disappear */
  expiresAt?: Date;
}
