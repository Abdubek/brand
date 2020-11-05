import React, {useState} from 'react'
import styles from '../../styles/Content.module.css'

const NavBar = ({ number, active, title, data }) => {

  const filteredData = data.filter((item,index) => {
    return index === data.findIndex(obj => {
      return obj.title === item.title;
    });
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_subtitle}>
        pavlodar schools<br />
        brand identity guidline
      </div>
      <div className={styles.navbar_menu}>
        <div>
          <span className={styles.navbar_number}>{number}</span>
          <span className={styles.navbar_title}>{title}</span>
        </div>
        <ul>
          {filteredData.map(item => (
            <li key={item.path} className={active === item.path ? styles.navbar_menu_active : ''}>
              <a href={'#' + item.path}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navbar_footer}>
        <a href='//schools.appazov.net' target='_blank'>
          schools.appazov.net
        </a>
      </div>
    </nav>
  )
}

export default NavBar