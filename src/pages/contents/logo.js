import React from 'react'
import NavBar from "../../components/NavBar";
import styles from '../../styles/Content.module.css'
import Head from "next/head";
import Section from "../../components/Section";
import {useScroll} from "../../hooks/useScroll";
import WhatIsLogo from "../../sections/logo/WhatIsLogo";
import BuildSystemIdea from "../../sections/logo/BuildSystemIdea";
import BuildSystemMain from "../../sections/logo/BuildSystemMain";
import BuildSystemMain2 from "../../sections/logo/BuildSystemMain2";
import TypesOfLogo from "../../sections/logo/TypesOfLogo";
import TypesOfLogo2 from "../../sections/logo/TypesOfLogo2";
import BrandedColors from "../../sections/logo/BrandedColors";
import BrandedColors2 from "../../sections/logo/BrandedColors2";
import BrandedColors3 from "../../sections/logo/BrandedColors3";
import ProtectiveField from "../../sections/logo/ProtectiveField";
import BrandedFont from "../../sections/logo/BrandedFont";
import BrandedFont2 from "../../sections/logo/BrandedFont2";
import BrandedElements from "../../sections/logo/BrandedElements";
import BrandedElements2 from "../../sections/logo/BrandedElements2";
import IllegalUse from "../../sections/logo/IllegalUse";

const data = [{
  title: 'что такое логотип',
  subtitle: null,
  path: 'what-is-a-logo',
  id: 'what-is-a-logo',
  content: WhatIsLogo
}, {
  title: 'система построения',
  subtitle: 'идея',
  path: 'build-system',
  id: 'build-system',
  content: BuildSystemIdea
}, {
  title: 'система построения',
  subtitle: 'основа',
  path: 'build-system',
  id: 'build-system-2',
  content: BuildSystemMain
}, {
  title: 'система построения',
  subtitle: 'основа',
  path: 'build-system',
  id: 'build-system-3',
  content: BuildSystemMain2
}, {
  title: 'виды логотипа',
  subtitle: 'варианты',
  path: 'types-of-logo',
  id: 'types-of-logo',
  content: TypesOfLogo
}, {
  title: 'виды логотипа',
  subtitle: 'иконки специализации',
  path: 'types-of-logo',
  id: 'types-of-logo-2',
  content: TypesOfLogo2
}, {
  title: 'фирменные цвета',
  subtitle: 'специализации',
  path: 'branded-colors',
  id: 'branded-colors',
  content: BrandedColors
}, {
  title: 'фирменные цвета',
  subtitle: 'дополнительный',
  path: 'branded-colors',
  id: 'branded-colors-2',
  content: BrandedColors2
}, {
  title: 'фирменные цвета',
  subtitle: 'пример школы',
  path: 'branded-colors',
  id: 'branded-colors-3',
  content: BrandedColors3
}, {
  title: 'охранное поле',
  subtitle: null,
  path: 'protective-field',
  id: 'protective-field',
  content: ProtectiveField
}, {
  title: 'фирменный шрифт',
  subtitle: 'в логотипе',
  path: 'branded-font',
  id: 'branded-font',
  content: BrandedFont
}, {
  title: 'фирменный шрифт',
  subtitle: 'в тексте',
  path: 'branded-font',
  id: 'branded-font-2',
  content: BrandedFont2
}, {
  title: 'фирменные элементы',
  subtitle: 'паттерн',
  path: 'branded-elements',
  id: 'branded-elements',
  content: BrandedElements
}, {
  title: 'фирменные элементы',
  subtitle: 'пример паттерна с цветом',
  path: 'branded-elements',
  id: 'branded-elements-2',
  content: BrandedElements2
}, {
  title: 'недопустимое использование',
  subtitle: 'примеры',
  path: 'illegal-use',
  id: 'illegal-use',
  content: IllegalUse
}]

const LogoPage = () => {

  const active = useScroll('what-is-a-logo', data, item => item.path)

  return (
    <div className={styles.layout}>
      <Head>
        <title>Logo | School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar
        number='02'
        title='логотип'
        active={active}
        data={data} />
      <div className={styles.content}>
        <div className={styles.designed}>
          designed by<br />
          appazov branding agency
        </div>
        {data.map(({id, title, subtitle, content: Content}, index) => (
          <Section id={id}
                   key={index}
                   title={title}
                   subtitle={subtitle}
          >
            <Content />
          </Section>
        ))}
      </div>
    </div>
  )
}

export default LogoPage