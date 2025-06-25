/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @ptforum/types – AlertId Type             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Nominal type for alert entities used in platform-wide
 * notifications. Enforces clear ID typing.
 */

import type { Branded } from './brand';

export type AlertId = Branded<string, 'AlertId'>;
