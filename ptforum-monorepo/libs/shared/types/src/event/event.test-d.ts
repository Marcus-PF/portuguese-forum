import { expectTypeOf } from 'vitest';
import type { Event } from './event';
import type { EventId, UserId } from '../brand';

const e: Event = {
  id: 'e1' as EventId,
  title: 'PFSA Picnic',
  startDate: new Date(),
  endDate: new Date(),
  location: 'Johannesburg',
  hostId: 'u1' as UserId,
  createdAt: new Date(),
  updatedAt: new Date(),
};

expectTypeOf(e.hostId).toEqualTypeOf<UserId>();
