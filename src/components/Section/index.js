import React, {useEffect, useRef} from 'react'
import styles from '../../styles/Content.module.css'

const Section = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className={styles.section}>
      {title && <h2 className={styles.section_title}>{title}</h2>}
      {subtitle && <h3 className={styles.section_subtitle}>
        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      </h3>}
      <div className={styles.divider} />
      {children}
    </section>
  )
}

export default Section