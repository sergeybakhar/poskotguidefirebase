import React from 'react';
import styles from './Footer.module.scss';

const Header = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__inner}>
            <span className={styles.footer__text}>Сделано с <i class="fas fa-heart"></i> на поселке Котовского, Одесса, Украина</span>
            <span className={styles.footer__copyright}>Copyright 2019 &copy; Путеводитель по Поскоту</span>
        </div>
    </footer>
);

export default Header;