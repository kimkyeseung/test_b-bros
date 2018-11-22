import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <Link to="/">
          <h2>똑닥</h2>
        </Link>
        <ul className={styles.footerLinks}>
          <li className={styles.footerLink}>이용약관</li>
          <li className={styles.footerLink}>개인정보취급방침</li>
          <li className={styles.footerLink}>제휴문의</li>
        </ul>
        <small className={styles.footerCopyright}>Copyright © B-bros Corp. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer
