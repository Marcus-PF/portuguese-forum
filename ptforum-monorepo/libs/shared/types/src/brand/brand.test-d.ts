import { expectTypeOf } from 'vitest';
import type { Branded } from './brand';
import type { UserId, PostId } from './index';

// Branded types should NOT be interchangeable with raw primitives
expectTypeOf<Branded<string, 'UserId'>>().not.toEqualTypeOf<string>();
expectTypeOf<UserId>().not.toEqualTypeOf<PostId>();

// The following should fail because the tag is not a string literal.
// @ts-expect-error  Tag must extend string
type _BadBrand = Branded<string, 42>;
