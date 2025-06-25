import { expectTypeOf } from 'vitest';
import type {
  Membership,
  MembershipTier,
  MembershipTiers,
} from './membership';
import type { MembershipId, UserId } from '../brand';

const m: Membership = {
  id: 'm1' as MembershipId,
  userId: 'u1' as UserId,
  tier: 'PREMIUM',
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

/* ─────────────────────────────────────────────────────────────
 * ✅ Compile-time guarantees
 * ───────────────────────────────────────────────────────────── */
expectTypeOf(m.tier).toEqualTypeOf<MembershipTier>();

// Ensure every literal in MembershipTiers is assignable to MembershipTier
type _AssertAllTiers =
  (typeof MembershipTiers)[number] extends MembershipTier ? true : never;
