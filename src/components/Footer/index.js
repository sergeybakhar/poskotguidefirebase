import React from 'react';
import styles from './Footer.module.scss';

const Header = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__inner}>
            <span className={styles.footer__text}>Сделано на поселке Котовского <i className="fas fa-building"></i> Одесса, Украина</span>
            <span className={styles.footer__copyright}>Copyright 2019 &copy; Путеводитель по Поскоту</span>
        </div>
    </footer>
);

export default Header;