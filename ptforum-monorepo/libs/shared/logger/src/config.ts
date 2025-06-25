/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/logger – Logger Config          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Configures a Pino logger instance with environment-aware
 * log level and sensitive data redaction.
 */

import pino from 'pino';
import { env } from '@ptforum/env';

/**
 * Configured Pino logger instance.
 * @remarks Uses `@ptforum/env` to set log level and redact secrets.
 */
export const logger = pino({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
  redact: ['password', 'token', 'secret', '*.password', '*.token', '*.secret'],
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (label) => ({ level: label }),
  },
});
