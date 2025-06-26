import { describe, it, expect, vi } from 'vitest';
import { trackServerEvent } from './serverTracker';
import { logError } from '@ptforum/logger';

describe('trackServerEvent', () => {
  it('sends event when provider is plausible', async () => {
    await trackServerEvent('api_request', { endpoint: '/users' });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://plausible.io/api/event',
      expect.objectContaining({
        method: 'POST',
      }),
    );
  });

  it('logs error on fetch failure', async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error('fail'));

    await trackServerEvent('api_request', { endpoint: '/fail' });

    expect(logError).toHaveBeenCalledWith(expect.any(Error), {
      event: 'api_request',
    });
  });
});
