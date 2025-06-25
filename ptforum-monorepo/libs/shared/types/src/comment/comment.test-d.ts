import { expectTypeOf } from 'vitest';
import type { Comment } from './comment';
import type { CommentId, PostId, UserId } from '../brand';

const c: Comment = {
  id: 'c1' as CommentId,
  postId: 'p1' as PostId,
  authorId: 'u1' as UserId,
  content: 'Nice post!',
  createdAt: new Date(),
  updatedAt: new Date(),
};

expectTypeOf(c.postId).toEqualTypeOf<PostId>();
