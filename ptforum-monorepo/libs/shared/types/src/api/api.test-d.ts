import { expectTypeOf } from 'vitest';
import type {
  UserPublicDTO,
  PostPublicDTO,
  EventPublicDTO,
} from './index';
import type { UserId, PostId, EventId } from '../brand';
import type { PostStatus } from '../post/status';

const user: UserPublicDTO = {
  id: 'u1' as UserId,
  name: 'Marc Ive',
  role: 'ADMIN',
};

const post: PostPublicDTO = {
  id: 'p1' as PostId,
  authorId: 'u1' as UserId,
  title: 'PFSA Launch',
  content: 'Welcome to the platform!',
  status: 'PUBLISHED',
};

const event: EventPublicDTO = {
  id: 'e1' as EventId,
  title: 'Annual Assembly',
  description: 'All members welcome.',
  startDate: new Date(),
  endDate: new Date(),
  location: 'Cape Town',
  hostId: 'u1' as UserId,
};

/* ─────────────────────────────────────────────────────────────
 * ✅ Compile-time type validation
 * ───────────────────────────────────────────────────────────── */
expectTypeOf(user.id).toEqualTypeOf<UserId>();
expectTypeOf(post.status).toEqualTypeOf<PostStatus>();
expectTypeOf(event.id).toEqualTypeOf<EventId>();
