import { expectTypeOf } from 'vitest';
import type { Club } from './club';
import type { ClubId, UserId } from '../brand';

const club: Club = {
  id: 'c1' as ClubId,
  name: 'PFSA Runners',
  memberIds: ['u1' as UserId],
  createdAt: new Date(),
  updatedAt: new Date(),
};

expectTypeOf(club.memberIds[0]).toEqualTypeOf<UserId>();
