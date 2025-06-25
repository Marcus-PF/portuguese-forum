/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/types – Public Post API DTO              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Shape of post data exposed to the public. Does not
 * include timestamps or internal moderation fields.
 */

import type { PostId, UserId } from '../brand';
import type { PostStatus } from '../post/status';

export interface PostPublicDTO {
  /** Unique post ID */
  id: PostId;
  /** Author’s user ID */
  authorId: UserId;
  /** Headline/title of the post */
  title: string;
  /** Main content body (Markdown or HTML) */
  content: string;
  /** Published state */
  status: PostStatus;
}
