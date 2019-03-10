import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.header__inner}>
            <span className={styles.header__logo}>
                <i className="fas fa-map-marked-alt"></i> <span className={styles['header__logo-text']}>Путеводитель по Поскоту</span>
            </span>
            <nav className={styles.nav}>
                <a href="#" className={styles.nav__link}>О проекте</a>
                <a href="#" className={styles.nav__link}>Контакты</a>
            </nav>
        </div>
    </header>
)

export default Header;
