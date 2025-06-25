import { expectTypeOf } from 'vitest';
import type { Tag } from './tag';
import type { TagId } from '../brand';

const t: Tag = { id: 't1' as TagId, label: 'Culture' };
expectTypeOf(t.id).toEqualTypeOf<TagId>();
