/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/types – User Model              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Core user type shared across API contracts, UI views,
 * and authentication logic. Includes essential identity,
 * role, and timestamp information.
 */

import type { UserId } from '../brand/user-id';
import type { WithId, Timestamped } from '../common';
import type { UserRole } from './role';

export interface User extends WithId<UserId>, Timestamped {
  /** User's full name */
  name: string;
  /** Email address used for login and notifications */
  email: string;
  /** Platform-level access role */
  role: UserRole;
  /** Optional profile picture URL */
  profileImageUrl?: string;
}
