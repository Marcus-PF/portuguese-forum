/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               @ptforum/types – Club Model             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents a community club or organizational entity.
 * Clubs consist of a name and a list of members, tracked
 * via branded `UserId`s.
 */

import type { ClubId, UserId } from '../brand';
import type { WithId, Timestamped } from '../common';

export interface Club extends WithId<ClubId>, Timestamped {
  /** Public-facing name of the club */
  name: string;
  /** IDs of members currently associated with the club */
  memberIds: UserId[];
}
