/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/types – WithId Utility Type          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Generic helper interface that enforces the presence of
 * a branded `id` field. Used by all domain models.
 */

export interface WithId<IDType> {
  /** Branded entity ID (e.g., UserId, PostId) */
  id: IDType;
}
