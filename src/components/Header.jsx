import React, { Component } from 'react';
import styles from '../styles/header.module.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className={styles.headerWrap}>
          <div className={styles.header}>
            <h1>똑닥</h1>
            <div className={styles.headerUtil}>
              <a href="#" className={`${styles.headerSearch} ${styles.iconBtn}`}>search</a>
              <a href="#" className={`${styles.headerBookmark} ${styles.iconBtn}`}>bookmark</a>
            </div>
          </div>
          <ul className={styles.headerGnb}>
            <li className={styles.headerGnbItem}>홈</li>
            <li className={styles.headerGnbItem}>인기</li>
            <li className={styles.headerGnbItem}>신규</li>
            <li className={styles.headerGnbItem}>시술별</li>
            <li className={`${styles.headerGnbItem} ${styles.selected}`}>기획전</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header
