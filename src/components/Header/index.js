import React, { Component } from 'react';
import { Arrow } from 'react-burgers';
import withSizes from 'react-sizes';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import './Header.module.scss';

class Header extends Component {

    state = {
        isMenuActive: false
    }

    burgerHandler = () => {
        const { isMenuActive } = this.state;

        this.setState({ isMenuActive: !isMenuActive });
    }

    componentDidUpdate() {
        const { isMenuActive } = this.state;
        const { isMobile } = this.props;

        if (isMenuActive && isMobile) {
            this.setState({ isMenuActive: false });
        }
    }

    render() {
        const { isMenuActive } = this.state;
        return (
            <header className={styles.header}>
                <div className={styles.header__inner}>
                    <NavLink to="/" className={styles.header__logo} exact activeClassName={styles['nav__link--active-header']}>
                        <i className="fas fa-map-marked-alt"></i> <span className={styles['header__logo-text']}>Путеводитель по Поскоту</span>
                    </NavLink>
                    <Arrow onClick={this.burgerHandler}
                        active={isMenuActive}
                        className={styles.nav__burger}
                        color='#1A5690'
                    />
                    <nav className={styles.nav}>
                        {
                            isMenuActive ? (
                                <div className={styles['nav__inner-mobile']}>
                                    <NavLink to="/contact" className={styles.nav__link} activeClassName={styles['nav__link--active']}>Контакты</NavLink>
                                </div>
                            ) : (null)
                        }
                        <div className={styles.nav__inner}>
                            <NavLink to="/contact" className={styles.nav__link} activeClassName={styles['nav__link--active']}>Контакты</NavLink>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapSizesToProps = ({ width }) => {
    return ({
        isMobile: width > 650,
    })
}

export default withSizes(mapSizesToProps)(Header);