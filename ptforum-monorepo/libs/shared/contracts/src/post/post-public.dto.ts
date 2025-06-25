/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @ptforum/contracts – Public Post DTO Schema       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines the public-facing structure of a post, used in
 * API responses and frontend views. Excludes internal metadata.
 */

import { z } from 'zod';
import type { PostId, UserId, PostStatus } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 🌐 Public DTO Schema
 * ───────────────────────────────────────────────────────────── */
export const PostPublicDTOSchema = z.object({
  id: uuidBrand<PostId>().describe('Post ID'),
  authorId: uuidBrand<UserId>().describe('Author user ID'),
  title: z.string().describe('Post title'),
  content: z.string().describe('Post content'),
  status: z
    .enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
    .describe('Post status') as z.ZodType<PostStatus>,
});

export type PostPublicDTO = z.infer<typeof PostPublicDTOSchema>;
