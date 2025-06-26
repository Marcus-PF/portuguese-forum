import { describe, it, expect, vi } from 'vitest';
import { createPlausibleAdapter } from './plausible';

describe('plausible adapter', () => {
  it('invokes window.plausible with correct args', () => {
    const spy = vi.spyOn(window as any, 'plausible');

    const adapter = createPlausibleAdapter();
    adapter.track({ name: 'page_view', properties: { path: '/home' } });

    expect(spy).toHaveBeenCalledWith('page_view', {
      props: { path: '/home' },
    });
  });
});
