/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/types – Public Event API DTO             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Exposes event metadata for use in frontend views or
 * public calendars. Host details are represented by ID only.
 */

import type { EventId, UserId } from '../brand';

export interface EventPublicDTO {
  /** Event ID */
  id: EventId;
  /** Event title */
  title: string;
  /** Optional longer description */
  description?: string;
  /** Start datetime */
  startDate: Date;
  /** End datetime */
  endDate: Date;
  /** Location info */
  location: string;
  /** ID of the hosting user */
  hostId: UserId;
}
