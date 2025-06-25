/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/types – MembershipId Type            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Branded type for uniquely identifying user memberships.
 * Helps prevent cross-use with unrelated ID types.
 */

import type { Branded } from './brand';

export type MembershipId = Branded<string, 'MembershipId'>;
