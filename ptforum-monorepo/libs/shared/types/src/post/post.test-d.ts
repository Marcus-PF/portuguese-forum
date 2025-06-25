import { expectTypeOf } from 'vitest';
import type { Post } from './post';
import type { PostId, UserId, TagId } from '../brand';
import type { PostStatus } from './status';

const draft: Post = {
  id: 'p1' as PostId,
  authorId: 'u1' as UserId,
  title: 'Hello PFSA',
  content: '# Ola!',
  status: 'DRAFT',
  createdAt: new Date(),
  updatedAt: new Date(),
  tagIds: ['t1' as TagId],
};

/* ─────────────────────────────────────────────────────────────
 * ✅ Compile-time guarantees
 * ───────────────────────────────────────────────────────────── */
expectTypeOf(draft.status).toEqualTypeOf<PostStatus>();
