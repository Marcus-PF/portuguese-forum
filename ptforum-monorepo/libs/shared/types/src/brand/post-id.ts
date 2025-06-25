/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/types – PostId Type             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Branded string representing a unique post identifier.
 * Used to prevent accidental interchange with other IDs.
 */

import type { Branded } from './brand';

export type PostId = Branded<string, 'PostId'>;
