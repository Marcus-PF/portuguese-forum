/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/types – Public User API DTO              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Public-facing user shape for API responses and frontend
 * consumption. Excludes private info like email addresses.
 */

import type { UserId } from '../brand';
import type { UserRole } from '../user/role';

export interface UserPublicDTO {
  /** User’s unique identifier */
  id: UserId;
  /** Display name */
  name: string;
  /** Access role (used for tagging, badges, etc.) */
  role: UserRole;
}
