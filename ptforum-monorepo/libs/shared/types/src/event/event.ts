/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/types – Event Model             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents a scheduled activity or gathering organized
 * by a user (or club). Includes timing, location, and 
 * metadata for calendar integration or event feeds.
 */

import type { EventId, UserId } from '../brand';
import type { WithId, Timestamped } from '../common';

export interface Event extends WithId<EventId>, Timestamped {
  /** Title of the event */
  title: string;
  /** Optional longer description (agenda, background, etc.) */
  description?: string;
  /** Event start time (ISO 8601) */
  startDate: Date;
  /** Event end time (ISO 8601) */
  endDate: Date;
  /** Physical or virtual location description */
  location: string;
  /** User who created or hosts the event */
  hostId: UserId;
}
