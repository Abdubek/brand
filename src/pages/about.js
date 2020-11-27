import React from 'react'
import Head from "next/head";
import styles from "../styles/Content.module.css";
import clsx from "clsx";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About | School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={clsx(styles.layout, styles.layout_dark)}>
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
        <div className={styles.content}>
          <div className={styles.designed}>
            designed by<br />
            appazov branding agency
          </div>

          <span className={styles.content_title}>о брендбуке</span>

          <div className={styles.divider} />

          <div className='flex'>
            <div className='width-50'>
              <p>
                Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей
                деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.
                Не следует, однако забывать, что реализация намеченных плановых заданий требуют от нас анализа
                соответствующий условий активизации. Значимость этих проблем настолько очевидна, что реализация
                намеченных плановых заданий позволяет выполнять важные задания по разработке направлений прогрессивного
                развития.
              </p>
              <p>
                Не следует, однако забывать, что дальнейшее развитие различных форм деятельности в значительной степени
                обуславливает создание модели развития. Товарищи! консультация с широким активом представляет собой
                интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.
              </p>
            </div>
            <div className='width-50 ml-20'>
              <p>
                Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет выполнять
                важные задания по разработке существенных финансовых и административных условий. Таким образом новая
                модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании
                дальнейших направлений развития. С другой стороны рамки и место обучения кадров в значительной степени
                обуславливает создание модели развития.
              </p>
              <p>
                С другой стороны сложившаяся структура организации влечет за собой процесс внедрения и модернизации
                модели развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности
                позволяет оценить значение дальнейших направлений развития.
              </p>
            </div>
          </div>
          <div>
            <a className={styles.content_link} href='//schools.appazov.net' target='_blank'>
              schools.appazov.net
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage