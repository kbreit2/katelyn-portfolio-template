import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const FeatureList = [
  {
    title: 'My Design Journey',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I value personality in design. And other such information.
      </>
    ),
  },
  {
    title: 'Documenting My Progress',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        In addition to projects, this portfolio also includes many of the learning experiences that shaped my design philosophy.
      </>
    ),
  },
  {
    title: 'A Secret Third Thing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I have range.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [currFeature, setCurrFeature] = useState(0);

  useEffect (() => {
    const switchInterval = setInterval(() => {
      setCurrFeature(((((currFeature + 1) % FeatureList.length)) + FeatureList.length) % FeatureList.length);
    }, 5000);
    return () => clearInterval(switchInterval);
  });

  return (
    <section className={styles.features}>
        <button className={styles.navArrow} onClick={() => setCurrFeature(((((currFeature - 1) % FeatureList.length)) + FeatureList.length) % FeatureList.length)}>{"<"}</button>
        <Feature Svg={FeatureList[currFeature].Svg} title={FeatureList[currFeature].title} description={FeatureList[currFeature].description}/>
        <button className={styles.navArrow} onClick={() => setCurrFeature(((((currFeature + 1) % FeatureList.length)) + FeatureList.length) % FeatureList.length)}>{">"}</button>
    </section>
  );
}
