import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const FeatureList = [
  {
    title: 'Explore My Portfolio',
    Svg: require('@site/static/img/computer.svg').default,
    description: (
      <>
        This portfolio highlights projects at many stages, including completed prototypes.
      </>
    ),
  },
  {
    title: 'Celebrating My Progress',
    Svg: require('@site/static/img/books.svg').default,
    description: (
      <>
        This portfolio includes many of the studies and other learning experiences that shaped my design philosophy.
      </>
    ),
  },
  {
    title: 'Design Values',
    Svg: require('@site/static/img/paper.svg').default,
    description: (
      <>
        I value personality in design and aim for expressive creations! I aim to capture this in all steps of my design process.
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
