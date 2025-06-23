/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @ptforum/docs – Reusable Heading Component       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Wrapper around semantic heading tags (h1–h6) with scoped
 * classNames. Designed to unify typography in the absence
 * of native Docusaurus `@theme/Heading` resolution.
 */

import React, { JSX } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Semantic level of heading
   * @default "h2"
   */
  as?: HeadingLevel;
  /**
   * Optional CSS classes to override or extend styles
   */
  className?: string;
  children: React.ReactNode;
}

const defaultClasses: Record<HeadingLevel, string> = {
  h1: 'text-4xl font-bold tracking-tight',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
};

export default function Heading({
  as: Tag = 'h2',
  className = '',
  children,
  ...rest
}: HeadingProps): JSX.Element {
  return (
    <Tag className={`${defaultClasses[Tag]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
