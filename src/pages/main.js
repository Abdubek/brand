import Head from 'next/head'
import styles from '../styles/Main.module.css'
import clsx from 'clsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title>School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.layout}>
        <div className={clsx('nav', styles.image_wrapper)} >
          <img className={styles.image} src='/school.png' alt='school' />
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
            <span>
              designed by<br/>
              appazov branding agency
            </span>
            <span>
              2020 ©  kazakhstan
            </span>
          </div>
          <div className={styles.content_main}>
            <span className={styles.name}>
              pavlodar <br/>
              schools
            </span>
            <h1 className={styles.title}>
              brand identity<br/>
              guideline
            </h1>
          </div>
          <div>
            <span className={styles.link}>schools.appazov.net</span>
          </div>
        </div>
      </main>
    </div>
  )
}
