/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @ptforum/types – EventId Type             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Branded string identifying an event. Prevents misuse
 * in unrelated domains like posts or comments.
 */

import type { Branded } from './brand';

export type EventId = Branded<string, 'EventId'>;
