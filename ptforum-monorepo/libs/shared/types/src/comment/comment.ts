/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            @ptforum/types – Comment Model             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents a comment left by a user on a post.
 * Tracks authorship, target post, content, and metadata.
 */

import type { CommentId, PostId, UserId } from '../brand';
import type { WithId, Timestamped } from '../common';

export interface Comment extends WithId<CommentId>, Timestamped {
  /** Post to which this comment belongs */
  postId: PostId;
  /** Authoring user */
  authorId: UserId;
  /** Raw comment content (Markdown or plain text) */
  content: string;
}
