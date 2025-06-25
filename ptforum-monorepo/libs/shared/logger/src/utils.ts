/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/logger – Logger Utils           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Exposes utility functions for logging structured messages
 * at different severity levels (info, error, debug).
 */

import { logger } from './config';
import type { LogContext, LogMessage } from './types';

/**
 * Logs an info message with optional context.
 */
export function logInfo(msg: string | LogMessage): void {
  if (typeof msg === 'string') {
    logger.info(msg);
  } else {
    logger.info(msg.context, msg.message);
  }
}

/**
 * Logs an error message with optional context.
 */
export function logError(error: Error | string, context?: LogContext): void {
  if (typeof error === 'string') {
    logger.error(context, error);
  } else {
    logger.error({ ...context, err: error }, error.message);
  }
}

/**
 * Logs a debug message with optional context.
 */
export function logDebug(msg: string | LogMessage): void {
  if (typeof msg === 'string') {
    logger.debug(msg);
  } else {
    logger.debug(msg.context, msg.message);
  }
}
