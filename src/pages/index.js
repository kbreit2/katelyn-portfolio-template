import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

// import styles from "./index.module.css";
import styles from "./home.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className={styles.background} title="A Desk with a Pencil on its Lefthand Side">
        <h1 className={styles.title}>
          {"> Welcome to my portfolio!"}
        </h1>
        <h2 className={styles.title}>
          This is a showcase of UI projects and studies from Fall 2024.
        </h2>
        <div className={styles.linkGroup}>
          <a className={styles.homeLink} href="./about-me">{"<Learn About Me>"}</a>
          <a className={styles.homeLink} href="./projects">{"<Check Out My Projects>"}</a>
          <a className={styles.homeLink} href="./blog">{"<View Studies on My Blog>"}</a>
        </div>
        <HomepageFeatures />
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
    </Layout>
  );
}
