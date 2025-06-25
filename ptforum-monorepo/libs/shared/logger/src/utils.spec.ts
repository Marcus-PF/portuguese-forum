import { describe, it, expect, vi, afterEach } from 'vitest';
import { logger } from './config';
import { logInfo, logError, logDebug } from './utils';

describe('Logger Utils', () => {
  const noop = (..._args: any[]) => undefined;

  const info = vi.spyOn(logger, 'info').mockImplementation(noop);
  const error = vi.spyOn(logger, 'error').mockImplementation(noop);
  const debug = vi.spyOn(logger, 'debug').mockImplementation(noop);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('logs info message', () => {
    logInfo('Hello World');
    expect(info).toHaveBeenCalledWith('Hello World');
  });

  it('logs info with context', () => {
    logInfo({ message: 'Login', context: { userId: 'user-123' } });
    expect(info).toHaveBeenCalledWith({ userId: 'user-123' }, 'Login');
  });

  it('logs error message from string', () => {
    logError('Something broke');
    expect(error).toHaveBeenCalledWith(undefined, 'Something broke');
  });

  it('logs error message from Error', () => {
    const err = new Error('Boom');
    logError(err, { requestId: 'abc' });
    expect(error).toHaveBeenCalledWith(expect.objectContaining({
      requestId: 'abc',
      err: err
    }), 'Boom');
  });

  it('logs debug message', () => {
    logDebug('Debugging...');
    expect(debug).toHaveBeenCalledWith('Debugging...');
  });
});
