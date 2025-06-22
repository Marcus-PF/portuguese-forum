import { describe, expect, it } from 'vitest'
import type { User, Post, Comment } from './models'

describe('User model', () => {
  it('should match the User type structure', () => {
    const mockUser: User = {
      id: 'u1',
      name: 'Alice',
      email: 'alice@example.com',
      roles: ['admin'],
      isActive: true,
      avatarUrl: 'https://example.com/avatar.jpg',
    }

    expect(mockUser).toHaveProperty('email')
    expect(mockUser.roles).toContain('admin')
  })
})

describe('Post model', () => {
  it('should match the Post type structure', () => {
    const mockPost: Post = {
      id: 'p1',
      authorId: 'u1',
      title: 'Hello World',
      content: 'This is my first post.',
      tags: ['intro', 'hello'],
      createdAt: new Date().toISOString(),
    }

    expect(mockPost.title).toBe('Hello World')
    expect(mockPost.tags).toContain('intro')
  })
})

describe('Comment model', () => {
  it('should match the Comment type structure', () => {
    const mockComment: Comment = {
      id: 'c1',
      postId: 'p1',
      authorId: 'u1',
      content: 'Nice post!',
      createdAt: new Date().toISOString(),
    }

    expect(mockComment.content).toMatch(/Nice/)
    expect(typeof mockComment.createdAt).toBe('string')
  })
})
