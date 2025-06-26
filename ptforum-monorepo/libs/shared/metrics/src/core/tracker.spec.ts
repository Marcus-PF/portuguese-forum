import { describe, it, expect, beforeEach } from 'vitest';
import { track, identify, setMetricsAdapter } from './tracker';
import { createConsoleAdapter } from '../adapters/console';
import { logDebug } from '@ptforum/logger';

describe('tracker', () => {
  beforeEach(() => {
    (logDebug as unknown as jest.Mock).mockClear?.(); // reset between tests
    setMetricsAdapter(createConsoleAdapter());
  });

  it('tracks an event with console adapter', () => {
    track('member_signup', { userId: '123' });
    expect(logDebug).toHaveBeenCalledWith({
      message: '[metrics] member_signup',
      context: { userId: '123' },
    });
  });

  it('identifies a user with console adapter', () => {
    identify('123' as any, { role: 'member' });
    expect(logDebug).toHaveBeenCalledWith({
      message: '[identify] 123',
      context: { role: 'member' },
    });
  });
});
