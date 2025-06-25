/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @ptforum/logger – Types                  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines contextual types for structured logging across
 * PFSA apps and services.
 */

import type { UserId, PostId, EventId } from '@ptforum/types';

/**
 * Context for structured logging metadata.
 */
export interface LogContext {
  userId?: UserId;
  requestId?: string;
  postId?: PostId;
  eventId?: EventId;
  [key: string]: unknown;
}

/**
 * Log message object with optional metadata.
 */
export interface LogMessage {
  message: string;
  context?: LogContext;
}
