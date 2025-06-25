/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/types – UserId Type             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Branded string representing a unique user identifier.
 * Ensures that user IDs are not confused with other string
 * types (e.g., PostId, EventId).
 */

import type { Branded } from './brand';

export type UserId = Branded<string, 'UserId'>;
