import React from 'react'
import styles from '../../styles/Content.module.css'
import Collapse from "rc-collapse";

const data = [{
  title: 'логотип',
  number: '02',
  path: 'what-is-a-logo',
  child: [{
    title: 'что такое логотип',
    path: 'what-is-a-logo',
  }, {
    title: 'система построения',
    child: [{
      title: 'идея',
      path: 'build-system-1',
    }, {
      title: 'основа',
      path: 'build-system-2',
    }, {
      title: 'цвет типа учебного заведения',
      path: 'build-system-3',
    }, {
      title: 'цвет дополнительный',
      path: 'build-system-4',
    }, {
      title: 'пример использования',
      path: 'build-system-5',
    }, {
      title: 'основа',
      path: 'build-system-6',
    }, {
      title: 'иконки специализации',
      path: 'build-system-7',
    }, {
      title: 'фирменный шрифт в логотипе',
      path: 'build-system-8',
    }, {
      title: 'примеры готовых логотипов',
      path: 'build-system-9',
    }, {
      title: 'разные компановки логотипа',
      path: 'build-system-10',
    }]
  }, {
    title: 'охранное поле',
    path: 'protective-field',
  }, {
    title: 'фирменный шрифт',
    subtitle: 'в тексте',
    path: 'branded-font',
  }, {
    title: 'фирменные элементы',
    child: [{
      title: 'паттерн',
      path: 'branded-elements-1'
    }, {
      title: 'пример паттерна с цветом',
      path: 'branded-elements-2'
    }]
  }, {
    title: 'недопустимое использование',
    child: [{
      title: 'примеры',
      path: 'illegal-use-1',
    }]
  }]
}, {
  title: 'фирменный стиль',
  number: '03',
  path: 'business-documentation',
  child: [{
    title: 'деловая документация',
    path: 'business-documentation',
    child: [{
      title: 'визитка именная',
      path: 'business-documentation-1'
    }, {
      title: 'визитка корпоративная',
      path: 'business-documentation-2'
    }, {
      title: 'фирменный бланк',
      path: 'business-documentation-3'
    }, {
      title: 'евроконверт',
      path: 'business-documentation-4'
    }, {
      title: 'белая папка',
      path: 'business-documentation-5'
    }, {
      title: 'цветная папка',
      path: 'business-documentation-6'
    }, {
      title: 'грамота',
      path: 'business-documentation-7'
    }, {
      title: 'благодарственное письмо',
      path: 'business-documentation-8'
    }, {
      title: 'шаблон презентации',
      path: 'business-documentation-9'
    }]
  }, {
    title: 'представительская продукция',
    path: 'representative-products-1',
    child: [{
      title: 'флешка',
      path: 'representative-products-1'
    }, {
      title: 'ручка',
      path: 'representative-products-2'
    }, {
      title: 'блокнот',
      path: 'representative-products-3'
    }, {
      title: 'флаер',
      path: 'representative-products-4'
    }, {
      title: 'плакат',
      path: 'representative-products-5'
    }, {
      title: 'уличный флаг',
      path: 'representative-products-6'
    }, {
      title: 'пресс-стена',
      path: 'representative-products-7'
    }, {
      title: 'ролл-ап',
      path: 'representative-products-8'
    }, {
      title: 'флаг-шток',
      path: 'representative-products-9'
    }, {
      title: 'вымпел',
      path: 'representative-products-10'
    }, {
      title: 'стаканчик кофе',
      path: 'representative-products-11'
    }, {
      title: 'стаканчик для детей',
      path: 'representative-products-12'
    }]
  }, {
    title: 'одежда и аксессуары',
    path: 'clothes-and-accessories-1',
    child: [{
      title: 'футболка',
      path: 'clothes-and-accessories-1'
    }, {
      title: 'футболка детская',
      path: 'clothes-and-accessories-2'
    }, {
      title: 'кепка',
      path: 'clothes-and-accessories-3'
    }, {
      title: 'значок',
      path: 'clothes-and-accessories-4'
    }, {
      title: 'экосумка',
      path: 'clothes-and-accessories-5'
    }, {
      title: 'худи',
      path: 'clothes-and-accessories-6'
    }, {
      title: 'рюкзак',
      path: 'clothes-and-accessories-7'
    }, {
      title: 'свитшот',
      path: 'clothes-and-accessories-8'
    }]
  }, {
    title: 'сувенирная продукция',
    path: 'souvenir-products-1',
    child: [{
      title: 'часы',
      path: 'souvenir-products-1'
    }, {
      title: 'чехол',
      path: 'souvenir-products-2'
    }, {
      title: 'ежедневник',
      path: 'souvenir-products-3'
    }, {
      title: 'пакет',
      path: 'souvenir-products-4'
    }, {
      title: 'стикер',
      path: 'souvenir-products-5'
    }, {
      title: 'кружка',
      path: 'souvenir-products-6'
    }]
  }, {
    title: 'социальные сети',
    path: 'social-networks-1',
    child: [{
      title: 'пост в инстаграмм',
      path: 'social-networks-1'
    }, {
      title: 'сториз в инстаграмм',
      path: 'social-networks-2'
    }]
  }]
}, {
  title: 'навигация',
  path: 'navigation',
  number: '04',
  child: [{
    title: 'внешняя навигация',
    path: 'signboard'
  }, {
    title: 'вывеска',
    path: 'signboard',
    child: [{
      title: 'вариант 1',
      path: 'signboard-1'
    }, {
      title: 'вариант 2',
      path: 'signboard-2'
    }]
  }, {
    title: 'флагштоки',
    path: 'flagpoles'
  }, {
    title: 'стелла',
    path: 'stella',
    child: [{
      title: 'вариант 1',
      path: 'stella-1'
    }, {
      title: 'вариант 2',
      path: 'stella-2'
    }]
  }, {
    title: 'внутренняя навигация',
    path: 'internal-navigation-pointers'
  }, {
    title: 'указатели',
    path: 'internal-navigation-pointers',
    child: [{
      title: 'выбор цветов',
      path: 'choice-of-colors'
    }, {
      title: 'размеры',
      path: 'dimensions'
    }, {
      title: 'шрифт',
      path: 'font'
    }, {
      title: 'пиктограммы',
      path: 'pictograms'
    }, {
      title: 'расположение',
      path: 'location'
    }, {
      title: 'табличка',
      path: 'plate'
    }, {
      title: 'холл',
      path: 'hall'
    }, {
      title: 'лестница',
      path: 'stairs'
    }, {
      title: 'материалы',
      path: 'materials'
    }]
  }, {
    title: 'стенды',
    path: 'stands'
  }]
}, {
  title: 'благоустройство',
  number: '05',
  path: '/improvement/index.html',
  redirect: true,
  child: []
}, {
  title: 'экстерьер',
  number: '06',
  path: '/exterior/index.html',
  redirect: true,
  child: []
}, {
  title: 'интерьер',
  number: '07',
  path: '/interior/index.html',
  redirect: true,
  child: []
}]

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_subtitle}>
        брендбук школ<br />
        павлодарской области
      </div>
      <div className={styles.navbar_menu}>
        <Collapse
          className={styles.accordion_nav_bar}
          accordion={true}>
          {data.map(menu => (
              <Collapse.Panel
                headerClass={styles.accordion_nav_bar_header}
                showArrow={false}
                header={
                  <a href={menu.redirect ? menu.path : '#' + menu.path}>
                    <CollapseHeader title={menu.title} number={menu.number}/>
                  </a>
                }>
                <Collapse accordion={true}
                          className={styles.accordion_nav_bar}>
                  {menu.child.map((submenu, index) => {
                    if (submenu.child === undefined) {
                      return (
                        <Collapse.Panel
                          headerClass={styles.accordion_nav_bar_header_submenu}
                          showArrow={false}
                          header={
                            <a href={'#' + submenu.path}>
                              <div
                                key={index}>
                                {submenu.title}
                              </div>
                            </a>
                          }>
                        </Collapse.Panel>
                      )
                    }
                    return (
                      <Collapse.Panel
                        headerClass={styles.accordion_nav_bar_header_submenu}
                        showArrow={false}
                        header={
                          <a href={'#' + submenu.path}>
                            <div className={styles.accordion_nav_bar_header_submenu_menu} key={index}>
                              {submenu.title}
                            </div>
                          </a>
                        }>
                        {submenu?.child?.map((child, childkey) => (
                          <a href={'#' + child.path}>
                            <div className={styles.accordion_nav_bar_header_submenu_child} key={childkey}>{child.title}</div>
                          </a>
                        ))}
                      </Collapse.Panel>
                    )
                  })}
                </Collapse>
              </Collapse.Panel>
            )
          )}
        </Collapse>
      </div>
      <div className={styles.navbar_footer}>
        <a href='//z-mektep.kz' target='_blank'>
          z-mektep.kz
        </a>
      </div>
    </nav>
  )
}

const CollapseHeader = ({ title, number }) => {
  return (
    <div className={styles.accordion_nav_bar_header}>
      <span className={styles.accordion_nav_bar_header_number}>
        {number}
      </span>
      {title}
    </div>
  )
}

export default NavBar