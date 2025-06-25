/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/contracts – Post Schemas             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas for creating, updating, and validating posts,
 * ensuring structure, type safety, and branded identifiers.
 */

import { z } from 'zod';
import type { PostId, UserId, TagId, PostStatus } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 📰 Full Post Schema
 * ───────────────────────────────────────────────────────────── */
export const PostSchema = z.object({
  id: uuidBrand<PostId>().describe('Post ID'),
  authorId: uuidBrand<UserId>().describe('Author user ID'),
  title: z.string().min(5).max(200).describe('Post title'),
  content: z.string().min(10).describe('Post content'),
  status: z
    .enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
    .describe('Post status') as z.ZodType<PostStatus>,
  tagIds: z
    .array(uuidBrand<TagId>())
    .optional()
    .describe('Associated tag IDs') as z.ZodType<TagId[] | undefined>,
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
});

/* ─────────────────────────────────────────────────────────────
 * 📝 DTOs for Creation / Update
 * ───────────────────────────────────────────────────────────── */
export const CreatePostDTOSchema = z.object({
  title: z.string().min(5).max(200).describe('Post title'),
  content: z.string().min(10).describe('Post content'),
  authorId: uuidBrand<UserId>().describe('Author user ID'),
  status: z
    .enum(['DRAFT', 'PUBLISHED'])
    .default('DRAFT')
    .describe('Post status') as z.ZodType<PostStatus>,
  tagIds: z
    .array(uuidBrand<TagId>())
    .optional()
    .describe('Associated tag IDs') as z.ZodType<TagId[] | undefined>,
});

export const UpdatePostDTOSchema = CreatePostDTOSchema.partial().describe(
  'Partial post update'
);

/* ─────────────────────────────────────────────────────────────
 * 🧾 Inferred Types
 * ───────────────────────────────────────────────────────────── */
export type Post = z.infer<typeof PostSchema>;
export type CreatePostDTO = z.infer<typeof CreatePostDTOSchema>;
export type UpdatePostDTO = z.infer<typeof UpdatePostDTOSchema>;
