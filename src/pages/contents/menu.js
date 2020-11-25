import React from 'react';
import Head from "next/head";
import styles from "../../styles/Content.module.css";
import Collapse from 'rc-collapse'
import clsx from "clsx";

const Contents = () => {

  return (
    <div>
      <Head>
        <title>Contents | School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.layout}>
        <div className={styles.navbar}>
          <div className={styles.navbar_subtitle}>
            pavlodar schools<br />
            brand identity guidline
          </div>
          <div className={styles.navbar_menu} />
          <div className={styles.navbar_footer}>
            schools.appazov.net
          </div>
        </div>
        <div className={clsx(styles.content, 'mb-50')}>
          <div className={styles.designed}>
            designed by<br />
            appazov branding agency
          </div>

          <span className={styles.content_title}>содержание</span>
          <Collapse
            className={styles.accordion}
            accordion={true}>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='о проекте' number='01'/>}>
              <div className={styles.accordion_content}>

              </div>
            </Collapse.Panel>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='логотип' number='02'/>}>
              <div className={styles.accordion_content}>
                <ul className={styles.accordion_menu}>
                  {/*filteredData.map(item => (
                    <li key={item.path}>
                      <Link href={'/contents/logo#' + item.path}>
                        <a>
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))*/}
                </ul>
              </div>
            </Collapse.Panel>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='фирменный стиль' number='03'/>}>
              <div className={styles.accordion_content}>

              </div>
            </Collapse.Panel>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='навигация' number='04'/>}>
              <div className={styles.accordion_content}>

              </div>
            </Collapse.Panel>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='благоустройство' number='05'/>}>
              <div className={styles.accordion_content}>

              </div>
            </Collapse.Panel>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='экстерьер' number='06'/>}>
              <div className={styles.accordion_content}>

              </div>
            </Collapse.Panel>
            <Collapse.Panel
              headerClass={styles.accordion_header}
              showArrow={false}
              header={<CollapseHeader title='интерьер' number='07'/>}>
              <div className={styles.accordion_content}>

              </div>
            </Collapse.Panel>
          </Collapse>
        </div>
      </main>
    </div>
  );
};

const CollapseHeader = ({ title, number }) => {
  return (
    <div className={styles.accordion_header}>
      <span className={styles.accordion_header_number}>
        {number}
      </span>
      {title}
    </div>
  )
}

export default Contents;