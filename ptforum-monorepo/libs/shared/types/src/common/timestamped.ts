/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/types – Timestamped Utility Type       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Adds `createdAt` and `updatedAt` fields. Extend this
 * interface to ensure timestamp consistency across entities.
 */

export interface Timestamped {
  /** ISO-formatted creation date */
  createdAt: Date;
  /** ISO-formatted last update date */
  updatedAt: Date;
}
