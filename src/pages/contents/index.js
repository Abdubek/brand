import React from 'react'
import NavBar from "../../components/NavBar";
import styles from '../../styles/Content.module.css'
import Head from "next/head";
import Section from "../../components/Section";
import clsx from "clsx";
import WhatIsLogo from "../../sections/logo/WhatIsLogo";
import BuildSystemIdea from "../../sections/logo/BuildSystemIdea";
import BuildSystemMain from "../../sections/logo/BuildSystemMain";

const data = [{
  title: 'что такое логотип?',
  subtitle: null,
  path: 'what-is-a-logo',
  component: WhatIsLogo
}, {
  title: 'система построения',
  subtitle: 'идея',
  path: 'build-system-1',
  component: BuildSystemIdea
}, {
  title: 'система построения',
  subtitle: 'основа',
  path: 'build-system-2',
  component: BuildSystemMain
}]

const LogoPage = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Logo | School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={clsx(styles.content, styles.content_gray)}>
        <div className={styles.designed}>
          designed by<br />
          appazov branding agency
        </div>
        {data.map(({ component: Component, ...props }) => (
          <Section id={props.path} title={props.title} subtitle={props.subtitle}>
            <Component />
          </Section>
        ))}

      </div>
    </div>
  )
}

export default LogoPage