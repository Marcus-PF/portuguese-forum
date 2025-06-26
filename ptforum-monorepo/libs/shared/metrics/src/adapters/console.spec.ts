import { describe, it, expect } from 'vitest';
import { createConsoleAdapter } from './console';
import { logDebug } from '@ptforum/logger';
import type { UserId } from '@ptforum/types';

describe('console adapter', () => {
  it('logs track & identify via logDebug', () => {
    const adapter = createConsoleAdapter();

    adapter.track({ name: 'page_view', properties: { path: '/' } });
    adapter.identify?.('u-1' as UserId, { tier: 'VIP' });

    expect(logDebug).toHaveBeenCalledTimes(2);
    expect(logDebug).toHaveBeenNthCalledWith(1, {
      message: '[metrics] page_view',
      context: { path: '/' },
    });
    expect(logDebug).toHaveBeenNthCalledWith(2, {
      message: '[identify] u-1',
      context: { tier: 'VIP' },
    });
  });
});
