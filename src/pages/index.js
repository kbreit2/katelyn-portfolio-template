import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
        <h3>Blog Posts</h3>
        <br></br>
        <Link
          className="button button--secondary button--lg"
          to="/blog/affordances-signifiers-i"
        >
          Affordances & Signifiers I Reading
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/blog/affordances-signifiers-ii"
        >
          Affordances & Signifiers II Reading
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/blog/shneiderman-info-org"
        >
          Shneiderman Info Organization Reading
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
