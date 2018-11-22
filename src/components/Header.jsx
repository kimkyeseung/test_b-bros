import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className={styles.headerWrap}>
          <div className={styles.header}>
            <Link to="/">
              <div>
                <h1>똑닥</h1>
              </div>
            </Link>
            <div className={styles.headerUtil}>
              <Link to="/search" style={{float: 'left'}}>
                <div className={styles.headerSearch}>
                  <i className={styles.iconBtn}>search</i>
                </div>
              </Link>
              <Link to="/bookmark" style={{float: 'left'}}>
                <div className={styles.headerBookmark}>
                  <i className={styles.iconBtn}>bookmark</i>
                </div>
              </Link>
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
