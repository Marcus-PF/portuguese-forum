/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/types – Post Status Literal          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Enum-like literal values representing the publishing
 * state of a post. Used for filtering and UI badges.
 */

export const PostStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'] as const;

/**
 * Union type for all valid post statuses.
 */
export type PostStatus = (typeof PostStatuses)[number];
