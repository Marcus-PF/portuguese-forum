import { expectTypeOf } from 'vitest';
import type { User } from './user';
import type { UserId } from '../brand';
import type { UserRole } from './role';
import { UserRoles } from './role';

const marc: User = {
  id: 'xyz' as UserId,
  name: 'Marc Ive',
  email: 'marc@example.com',
  role: 'ADMIN',
  createdAt: new Date(),
  updatedAt: new Date(),
};

/* ─────────────────────────────────────────────────────────────
 * ✅ Compile-time guarantees
 * ───────────────────────────────────────────────────────────── */
expectTypeOf(marc.role).toEqualTypeOf<UserRole>();

// Optional: ensure enum array is assignable
type _AssertUserRoles =
  (typeof UserRoles)[number] extends UserRole ? true : never;
