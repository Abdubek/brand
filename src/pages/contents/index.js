import React from 'react'
import NavBar from "../../components/NavBar";
import styles from '../../styles/Content.module.css'
import Head from "next/head";
import Section from "../../components/Section";
import clsx from "clsx";
import WhatIsLogo from "../../sections/logo/WhatIsLogo";
import BuildSystemIdea from "../../sections/logo/BuildSystemIdea";
import BuildSystemMain from "../../sections/logo/BuildSystemMain";
import BrandedColors from "../../sections/logo/BrandedColors";
import BrandedColors2 from "../../sections/logo/BrandedColors2";
import BuildSystemExample from "../../sections/logo/BuildSystemExample";
import BuildSystemMain2 from "../../sections/logo/BuildSystemMain2";
import TypesOfLogo2 from "../../sections/logo/TypesOfLogo2";
import BrandedFont from "../../sections/logo/BrandedFont";
import Logos from "../../sections/logo/Logos";
import TypesOfLogo from "../../sections/logo/TypesOfLogo";
import ProtectiveField from "../../sections/logo/ProtectiveField";
import BrandedFont2 from "../../sections/logo/BrandedFont2";
import BrandedElements from "../../sections/logo/BrandedElements";
import BrandedElements2 from "../../sections/logo/BrandedElements2";
import IllegalUse from "../../sections/logo/IllegalUse";

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
}, {
  title: 'система построения',
  subtitle: 'цвет типа учебного заведения',
  path: 'build-system-3',
  component: BrandedColors
}, {
  title: 'система построения',
  subtitle: 'цвет дополнительный',
  path: 'build-system-4',
  component: BrandedColors2
}, {
  title: 'система построения',
  subtitle: 'пример использования',
  path: 'build-system-5',
  component: BuildSystemExample
}, {
  title: 'система построения',
  subtitle: 'основа',
  path: 'build-system-6',
  component: BuildSystemMain2
}, {
  title: 'система построения',
  subtitle: 'иконки специализации',
  path: 'build-system-7',
  component: TypesOfLogo2
}, {
  title: 'система построения',
  subtitle: 'фирменный шрифт в логотипе',
  path: 'build-system-8',
  component: BrandedFont
}, {
  title: 'система построения',
  subtitle: 'примеры готовых логотипов',
  path: 'build-system-9',
  component: Logos
}, {
  title: 'система построения',
  subtitle: 'разные компановки логотипа',
  path: 'build-system-10',
  component: TypesOfLogo
}, {
  title: 'охранное поле',
  subtitle: ' ',
  path: 'protective-field',
  component: ProtectiveField
}, {
  title: 'фирменный шрифт',
  subtitle: 'в тексте',
  path: 'branded-font',
  component: BrandedFont2
}, {
  title: 'фирменный шрифт',
  subtitle: 'паттерн',
  path: 'branded-elements-1',
  component: BrandedElements
}, {
  title: 'фирменный шрифт',
  subtitle: 'пример паттерна с цветом',
  path: 'branded-elements-2',
  component: BrandedElements2
}, {
  title: 'недопустимое использование',
  subtitle: 'примеры',
  path: 'illegal-use-1',
  component: IllegalUse
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
        {data.map(({ component: Component, ...props }, index) => (
          <Section id={props.path}
                   key={index}
                   title={props.title}
                   subtitle={props.subtitle}>
            <Component />
          </Section>
        ))}

      </div>
    </div>
  )
}

export default LogoPage