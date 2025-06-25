/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @ptforum/contracts – Post Schema Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Vitest tests validating structure and correctness of
 * post Zod schemas.
 */

import { describe, it, expect } from 'vitest';
import { PostSchema, CreatePostDTOSchema } from './post.schema';

describe('PostSchema', () => {
  it('accepts valid post', () => {
    expect(() =>
      PostSchema.parse({
        id: '123e4567-e89b-12d3-a456-426614174000',
        authorId: '789e4567-e89b-12d3-a456-426614174111',
        title: 'Hello World',
        content: 'This is a blog post.',
        status: 'DRAFT',
        tagIds: ['abc12345-1234-5678-9abc-def123456789'],
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).not.toThrow();
  });

  it('rejects invalid UUID', () => {
    expect(() =>
      PostSchema.parse({
        id: 'invalid',
        authorId: 'bad',
        title: 'Post',
        content: 'Content',
        status: 'DRAFT',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toThrow();
  });
});

describe('CreatePostDTOSchema', () => {
  it('requires title and content', () => {
    expect(() =>
      CreatePostDTOSchema.parse({
        authorId: '123e4567-e89b-12d3-a456-426614174000',
        status: 'DRAFT',
      })
    ).toThrow();
  });
});
