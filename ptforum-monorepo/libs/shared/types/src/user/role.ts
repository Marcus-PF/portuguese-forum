/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/types – User Role Literal Type       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Enum-like string literal type for role-based access
 * control across the platform (admin panels, APIs, UI).
 */

export const UserRoles = ['ADMIN', 'MANAGER', 'MEMBER', 'GUEST'] as const;

/**
 * Union type representing all valid user roles.
 */
export type UserRole = (typeof UserRoles)[number];
