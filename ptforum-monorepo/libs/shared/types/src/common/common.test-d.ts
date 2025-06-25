import { expectTypeOf } from 'vitest';
import type { WithId, Timestamped } from './index';
import type { UserId } from '../brand';

interface Demo extends WithId<UserId>, Timestamped {
  name: string;
}

const demo: Demo = {
  id: 'abc' as UserId,
  name: 'Marc',
  createdAt: new Date(),
  updatedAt: new Date(),
};

expectTypeOf(demo.id).toEqualTypeOf<UserId>();
expectTypeOf(demo).toMatchTypeOf<WithId<UserId>>();
