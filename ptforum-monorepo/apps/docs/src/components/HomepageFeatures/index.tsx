/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃ @ptforum/docs – HomepageFeatures Component            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Responsive grid of homepage feature cards.
 * Each card includes a branded SVG, heading, and description.
 * Structured to scale or override per project requirements.
 */

import React, { JSX } from 'react';
import clsx from 'clsx';
import Heading from '@site/src/components/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

/* ─────────────────────────────────────────────────────────────
 * 🧩 Feature Definitions – Add/Remove items here
 * ───────────────────────────────────────────────────────────── */
const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Just
        move your content into the <code>/docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your layout using React. Docusaurus supports full
        reuse of headers, footers, and theme components.
      </>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
 * 🧱 Feature Card Component
 * ───────────────────────────────────────────────────────────── */
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-label={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🏠 HomepageFeatures Section
 * ───────────────────────────────────────────────────────────── */
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
