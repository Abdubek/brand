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
import BrandExample from "../../sections/brand/Example";
import BrandExample2 from "../../sections/brand/Example2";
import BrandExample3 from "../../sections/brand/Example3";
import BrandExample4 from "../../sections/brand/Example4";
import BrandExample5 from "../../sections/brand/Example5";
import BrandExample6 from "../../sections/brand/Example6";
import BrandExample7 from "../../sections/brand/Example7";
import BrandExample8 from "../../sections/brand/Example8";
import BrandExample9 from "../../sections/brand/Example9";
import BrandExample10 from "../../sections/brand/Example10";
import PersonalCard from "../../sections/brand/PersonalCard";
import CorpCard from "../../sections/brand/CorpCard";
import BrandBlank from "../../sections/brand/BrandBlank";
import Convert from "../../sections/brand/Convert";
import WhiteFolder from "../../sections/brand/WhiteFolder";
import ColoredFolder from "../../sections/brand/ColoredFolder";
import Diploma from "../../sections/brand/Diploma";
import Letter from "../../sections/brand/Letter";
import PresentationTemplate from "../../sections/brand/PresentationTemplate";
import FlashCard from "../../sections/brand/FlashCard";
import Pencil from "../../sections/brand/Pencil";
import Notebook from "../../sections/brand/Notebook";
import Notebook2 from "../../sections/brand/Notebook2";
import Flyer from "../../sections/brand/Flyer";
import Poster from "../../sections/brand/Poster";
import Flag from "../../sections/brand/Flag";
import PressWall from "../../sections/brand/PressWall";
import RollUp from "../../sections/brand/RollUp";
import Flagpole from "../../sections/brand/Flagpole";
import Pennant from "../../sections/brand/Pennant";
import Glass from "../../sections/brand/Glass";
import ChildGlass from "../../sections/brand/ChildGlass";
import Tshirt from "../../sections/brand/Tshirt";
import ChildTShirt from "../../sections/brand/ChildTShirt";
import Cap from "../../sections/brand/Cap";
import Cap2 from "../../sections/brand/Cap2";
import Badge from "../../sections/brand/Badge";
import EcoBag from "../../sections/brand/EcoBag";
import Hoodie from "../../sections/brand/Hoodie";
import Hoodie2 from "../../sections/brand/Hoodie2";
import Bag from "../../sections/brand/Bag";
import Sweatshirts from "../../sections/brand/Sweatshirts";
import Sweatshirts2 from "../../sections/brand/Sweatshirts2";
import Clock from "../../sections/brand/Clock";
import Signboard from "../../sections/navigation/Signboard";
import Case from "../../sections/brand/Case";
import Diary from "../../sections/brand/Diary";
import Package from "../../sections/brand/Package";
import Sticker from "../../sections/brand/Sticker";
import Cup from "../../sections/brand/Cup";
import Post from "../../sections/brand/Post";
import Story from "../../sections/brand/Story";
import Signboard2 from "../../sections/navigation/Signboard2";
import Signboard3 from "../../sections/navigation/Signboard3";
import Signboard4 from "../../sections/navigation/Signboard4";
import Signboard5 from "../../sections/navigation/Signboard5";
import Signboard8 from "../../sections/navigation/Signboard8";
import Signboard7 from "../../sections/navigation/Signboard7";
import Signboard6 from "../../sections/navigation/Signboard6";
import Flagpoles from "../../sections/navigation/Flagpoles";
import Flagpoles1 from "../../sections/navigation/Flagpoles1";
import SteleWithClock from "../../sections/navigation/SteleWithClock";
import SteleWithClock2 from "../../sections/navigation/SteleWithClock2";
import SteleWithClock3 from "../../sections/navigation/SteleWithClock3";
import SteleWithInteractiveScreen from "../../sections/navigation/SteleWithInteractiveScreen";
import SteleWithInteractiveScreen2 from "../../sections/navigation/SteleWithInteractiveScreen2";
import SteleWithInteractiveScreen3 from "../../sections/navigation/SteleWithInteractiveScreen3";
import Pointer from "../../sections/navigation/Pointer";
import WhatIs from "../../sections/navigation/WhatIs";
import Pointer2 from "../../sections/navigation/Pointer2";
import ColorChoice from "../../sections/navigation/ColorChoice";
import ColorChoice2 from "../../sections/navigation/ColorChoice2";
import Size from "../../sections/navigation/Size";
import Font from "../../sections/navigation/Font";
import Font2 from "../../sections/navigation/Font2";
import Pictograms from "../../sections/navigation/Pictograms";
import LocationComp from "../../sections/navigation/Location";
import Plate from "../../sections/navigation/Plate";
import Plate2 from "../../sections/navigation/Plate2";
import Plate3 from "../../sections/navigation/Plate3";
import Hall from "../../sections/navigation/Hall";
import Hall2 from "../../sections/navigation/Hall2";
import Hall3 from "../../sections/navigation/Hall3";
import Stairs from "../../sections/navigation/Stairs";
import Materials from "../../sections/navigation/Materials";
import Attainment from "../../sections/navigation/Attainment";
import Best from "../../sections/navigation/Best";
import Schedule from "../../sections/navigation/Schedule";
import Education from "../../sections/navigation/Education";
import Fire from "../../sections/navigation/Fire";
import About from "../../sections/navigation/About";
import Pdd from "../../sections/navigation/Pdd";
import Schedule2 from "../../sections/navigation/Schedule2";

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
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample2
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample3
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample4
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample5
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample6
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample7
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample8
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample9
}, {
  title: 'примеры',
  subtitle: 'фирменных элементов',
  path: 'business-documentation',
  component: BrandExample10
}, {
  title: 'деловая документация',
  subtitle: 'визитка именная',
  path: 'business-documentation-1',
  component: PersonalCard
}, {
  title: 'деловая документация',
  subtitle: 'визитка корпоративная',
  path: 'business-documentation-2',
  component: CorpCard
}, {
  title: 'деловая документация',
  subtitle: 'фирменный бланк',
  path: 'business-documentation-3',
  component: BrandBlank
}, {
  title: 'деловая документация',
  subtitle: 'евроконверт',
  path: 'business-documentation-4',
  component: Convert
}, {
  title: 'деловая документация',
  subtitle: 'белая папка',
  path: 'business-documentation-5',
  component: WhiteFolder
}, {
  title: 'деловая документация',
  subtitle: 'цветная папка',
  path: 'business-documentation-6',
  component: ColoredFolder
}, {
  title: 'деловая документация',
  subtitle: 'грамота',
  path: 'business-documentation-7',
  component: Diploma
}, {
  title: 'деловая документация',
  subtitle: 'благодарственное письмо',
  path: 'business-documentation-8',
  component: Letter
}, {
  title: 'деловая документация',
  subtitle: 'шаблон презентации',
  path: 'business-documentation-9',
  component: PresentationTemplate
}, {
  title: 'представительская продукция',
  subtitle: 'флешка',
  path: 'representative-products-1',
  component: FlashCard
}, {
  title: 'представительская продукция',
  subtitle: 'ручка',
  path: 'representative-products-2',
  component: Pencil
}, {
  title: 'представительская продукция',
  subtitle: 'блокнот',
  path: 'representative-products-3',
  component: Notebook
}, {
  title: 'представительская продукция',
  subtitle: 'блокнот',
  path: 'representative-products-3-1',
  component: Notebook2
}, {
  title: 'представительская продукция',
  subtitle: 'флаер',
  path: 'representative-products-4',
  component: Flyer
}, {
  title: 'представительская продукция',
  subtitle: 'плакат',
  path: 'representative-products-5',
  component: Poster
}, {
  title: 'представительская продукция',
  subtitle: 'уличный флаг',
  path: 'representative-products-6',
  component: Flag
}, {
  title: 'представительская продукция',
  subtitle: 'пресс стена',
  path: 'representative-products-7',
  component: PressWall
}, {
  title: 'представительская продукция',
  subtitle: 'ролл ап стена',
  path: 'representative-products-8',
  component: RollUp
}, {
  title: 'представительская продукция',
  subtitle: 'флагшток',
  path: 'representative-products-9',
  component: Flagpole
}, {
  title: 'представительская продукция',
  subtitle: 'вымпел',
  path: 'representative-products-10',
  component: Pennant
}, {
  title: 'представительская продукция',
  subtitle: 'стаканчик для кофе',
  path: 'representative-products-11',
  component: Glass
}, {
  title: 'представительская продукция',
  subtitle: 'стаканчик для детей',
  path: 'representative-products-12',
  component: ChildGlass
}, {
  title: 'одежда и аксессуары',
  subtitle: 'футболка',
  path: 'clothes-and-accessories-1',
  component: Tshirt
}, {
  title: 'одежда и аксессуары',
  subtitle: 'футболка детская',
  path: 'clothes-and-accessories-2',
  component: ChildTShirt
}, {
  title: 'одежда и аксессуары',
  subtitle: 'кепка',
  path: 'clothes-and-accessories-3',
  component: Cap
}, {
  title: 'одежда и аксессуары',
  subtitle: 'кепка',
  path: 'clothes-and-accessories-3-1',
  component: Cap2
}, {
  title: 'одежда и аксессуары',
  subtitle: 'значок',
  path: 'clothes-and-accessories-4',
  component: Badge
}, {
  title: 'одежда и аксессуары',
  subtitle: 'экосумка',
  path: 'clothes-and-accessories-5',
  component: EcoBag
}, {
  title: 'одежда и аксессуары',
  subtitle: 'худи',
  path: 'clothes-and-accessories-6',
  component: Hoodie
}, {
  title: 'одежда и аксессуары',
  subtitle: 'худи',
  path: 'clothes-and-accessories-6-1',
  component: Hoodie2
}, {
  title: 'одежда и аксессуары',
  subtitle: 'рюкзак',
  path: 'clothes-and-accessories-7',
  component: Bag
}, {
  title: 'одежда и аксессуары',
  subtitle: 'свитшот',
  path: 'clothes-and-accessories-8',
  component: Sweatshirts
}, {
  title: 'одежда и аксессуары',
  subtitle: 'свитшот',
  path: 'clothes-and-accessories-8-1',
  component: Sweatshirts2
}, {
  title: 'сувенирная продукция',
  subtitle: 'часы',
  path: 'souvenir-products-1',
  component: Clock
}, {
  title: 'сувенирная продукция',
  subtitle: 'чехол',
  path: 'souvenir-products-2',
  component: Case
}, {
  title: 'сувенирная продукция',
  subtitle: 'ежедневник',
  path: 'souvenir-products-3',
  component: Diary
}, {
  title: 'сувенирная продукция',
  subtitle: 'пакет',
  path: 'souvenir-products-4',
  component: Package
}, {
  title: 'сувенирная продукция',
  subtitle: 'стикеры',
  path: 'souvenir-products-5',
  component: Sticker
}, {
  title: 'сувенирная продукция',
  subtitle: 'кружка',
  path: 'souvenir-products-6',
  component: Cup
}, {
  title: 'социальные сети',
  subtitle: 'пост в инстаграм',
  path: 'social-networks-1',
  component: Post
}, {
  title: 'социальные сети',
  subtitle: 'сториз в инстаграм',
  path: 'social-networks-2',
  component: Story
}, {
  title: 'что такое навигация',
  path: 'navigation',
  component: WhatIs
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />вариант 1. фибробетонный козырек`,
  path: 'signboard-1',
  component: Signboard
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />вариант 1. фибробетонный козырек`,
  path: 'signboard-1',
  component: Signboard2
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />объемно-световая вывеска`,
  path: 'signboard-1',
  component: Signboard3
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />объемно-световая вывеска`,
  path: 'signboard-1',
  component: Signboard4
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />  размещение паспорта школы`,
  path: 'signboard-1',
  component: Signboard5
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />вариант 2 объемная световая вывеска`,
  path: 'signboard-2',
  component: Signboard6
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />вариант 2 объемная световая вывеска`,
  path: 'signboard-2',
  component: Signboard7
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />состав конструкции`,
  path: 'signboard-2',
  component: Signboard8
}, {
  title: 'внешняя навигация',
  subtitle: `вывеска<br />  размещение паспорта школы`,
  path: 'signboard-2',
  component: Signboard5
}, {
  title: 'внешняя навигация',
  subtitle: `флагштоки`,
  path: 'flagpoles',
  component: Flagpoles
}, {
  title: 'внешняя навигация',
  subtitle: `флагштоки`,
  path: 'flagpoles',
  component: Flagpoles1
}, {
  title: 'внешняя навигация',
  subtitle: `стелла с часами <br />вариант 1`,
  path: 'stella-1',
  component: SteleWithClock
}, {
  title: 'внешняя навигация',
  subtitle: `стелла с часами <br />конструктив`,
  path: 'stella-1',
  component: SteleWithClock2
}, {
  title: 'внешняя навигация',
  subtitle: `стелла с часами <br />конструктив светового логотипа`,
  path: 'stella-1',
  component: SteleWithClock3
}, {
  title: 'внешняя навигация',
  subtitle: `стелла с интерактивным экраном<br />вариант 2`,
  path: 'stella-2',
  component: SteleWithInteractiveScreen
}, {
  title: 'внешняя навигация',
  subtitle: `стелла с интерактивным экраном<br />конструктив`,
  path: 'stella-2',
  component: SteleWithInteractiveScreen2
}, {
  title: 'внешняя навигация',
  subtitle: `стелла с интерактивным экраном<br />конструктив светового логотипа`,
  path: 'stella-2',
  component: SteleWithInteractiveScreen3
}, {
  title: 'внутренняя навигация',
  subtitle: `указатели`,
  path: 'internal-navigation-pointers',
  component: Pointer
}, {
  title: 'внутренняя навигация',
  subtitle: `указатели`,
  path: 'internal-navigation-pointers',
  component: Pointer2
}, {
  title: 'внутренняя навигация',
  subtitle: `принцип выбора цветов навигации`,
  path: 'choice-of-colors',
  component: ColorChoice
}, {
  title: 'внутренняя навигация',
  subtitle: `принцип выбора цветов навигации`,
  path: 'choice-of-colors',
  component: ColorChoice2
}, {
  title: 'внутренняя навигация',
  subtitle: `размер`,
  path: 'dimensions',
  component: Size
}, {
  title: 'внутренняя навигация',
  subtitle: `шрифт`,
  path: 'font',
  component: Font
}, {
  title: 'внутренняя навигация',
  subtitle: `шрифт`,
  path: 'font',
  component: Font2
}, {
  title: 'внутренняя навигация',
  subtitle: `пиктограммы`,
  path: 'pictograms',
  component: Pictograms
}, {
  title: 'внутренняя навигация',
  subtitle: `взаимное расположение носителей`,
  path: 'location',
  component: LocationComp
}, {
  title: 'внутренняя навигация',
  subtitle: `информационная табличка помещения`,
  path: 'plate',
  component: Plate
}, {
  title: 'внутренняя навигация',
  subtitle: `информационная табличка помещения`,
  path: 'plate',
  component: Plate2
}, {
  title: 'внутренняя навигация',
  subtitle: `информационная табличка помещения`,
  path: 'plate',
  component: Plate3
}, {
  title: 'внутренняя навигация',
  subtitle: `холл`,
  path: 'hall',
  component: Hall
}, {
  title: 'внутренняя навигация',
  subtitle: `холл`,
  path: 'hall',
  component: Hall2
}, {
  title: 'внутренняя навигация',
  subtitle: `холл`,
  path: 'hall',
  component: Hall3
}, {
  title: 'внутренняя навигация',
  subtitle: `лестница`,
  path: 'stairs',
  component: Stairs
}, {
  title: 'внутренняя навигация',
  subtitle: `материалы`,
  path: 'materials',
  component: Materials
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />достижения школы`,
  path: 'stands',
  component: Attainment
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />лучшие ученики`,
  path: 'stands',
  component: Best
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />расписание обедов`,
  path: 'stands',
  component: Schedule
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />воспитательная работа школы`,
  path: 'stands',
  component: Education
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />пожарная безопасность`,
  path: 'stands',
  component: Fire
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />о школе`,
  path: 'stands',
  component: About
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />правила пдд`,
  path: 'stands',
  component: Pdd
}, {
  title: 'внутренняя навигация',
  subtitle: `стенды<br />расписание`,
  path: 'stands',
  component: Schedule2
}]
const LogoPage = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={clsx(styles.content, styles.content_gray)}>
        <div className={styles.designed}>
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