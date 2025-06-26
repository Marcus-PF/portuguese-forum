// libs/shared/metrics/src/context/metrics-context.spec.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { MetricsContext, useMetrics } from './metrics-context';

describe('<MetricsProvider>', () => {
  it('exposes track via context', () => {
    // spies
    const trackSpy = vi.fn();
    const identifySpy = vi.fn();

    // provider that replaces the real implementation with our spies
    const SpyProvider = ({ children }: { children: React.ReactNode }) => (
      <MetricsContext.Provider value={{ track: trackSpy, identify: identifySpy }}>
        {children}
      </MetricsContext.Provider>
    );

    // consumer component
    const TestComponent = () => {
      const { track } = useMetrics();
      return <button onClick={() => track('button_click')}>Click me</button>;
    };

    // render & assert
    const { getByText } = render(
      <SpyProvider>
        <TestComponent />
      </SpyProvider>
    );

    fireEvent.click(getByText('Click me'));
    expect(trackSpy).toHaveBeenCalledWith('button_click');
  });
});
