import { describe, expect, it } from 'vitest';
import { PaginationQuerySchema } from './pagination.schema';
import { SearchQuerySchema } from './search-query.schema';
import { SortQuerySchema } from './sort-query.schema';

describe('Shared Schemas', () => {
  it('validates pagination query', () => {
    expect(() =>
      PaginationQuerySchema.parse({ page: '2', size: '25' })
    ).not.toThrow();
  });

  it('rejects invalid search query', () => {
    expect(() =>
      SearchQuerySchema.parse({ q: '' })
    ).toThrow();
  });

  it('accepts valid sort options', () => {
    const result = SortQuerySchema.parse({
      sortBy: 'createdAt',
      sortOrder: 'desc',
    });
    expect(result.sortOrder).toBe('desc');
  });
});
