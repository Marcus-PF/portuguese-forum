/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               @ptforum/types – Tag Model              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents a content tag used to categorize posts or
 * other content types. Tags may have an optional description
 * for clarity in admin UIs or search filters.
 */

import type { TagId } from '../brand';
import type { WithId } from '../common';

export interface Tag extends WithId<TagId> {
  /** Short label for the tag (e.g., 'Culture', 'News') */
  label: string;
  /** Optional longer explanation of the tag’s purpose */
  description?: string;
}
