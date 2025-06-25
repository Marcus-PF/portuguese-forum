/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/types – Post Model              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents a blog or news article created by a user.
 * Includes title, content, publication status, and tag
 * references for classification.
 */

import type { PostId, UserId, TagId } from '../brand';
import type { WithId, Timestamped } from '../common';
import type { PostStatus } from './status';

export interface Post extends WithId<PostId>, Timestamped {
  /** ID of the user who authored the post */
  authorId: UserId;
  /** Title of the post */
  title: string;
  /** Full post content (Markdown or HTML) */
  content: string;
  /** Publication status of the post */
  status: PostStatus;
  /** Optional tag references */
  tagIds?: TagId[];
}
