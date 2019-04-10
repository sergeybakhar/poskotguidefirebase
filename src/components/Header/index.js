import React, { Component } from 'react';
import { Arrow } from 'react-burgers';
import styles from './Header.module.scss';
import './Header.module.scss';
import withSizes from 'react-sizes';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    state = {
        isMenuActive: false
    }

    burgerHandler = () => {
        this.setState({ isMenuActive: !this.state.isMenuActive })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.isMenuActive && this.props.isMobile) {
            this.setState({ isMenuActive: false })
        }
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.header__inner}>
                    <NavLink to="/" className={styles.header__logo} exact activeClassName={styles['nav__link--active-header']}>
                        <i className="fas fa-map-marked-alt"></i> <span className={styles['header__logo-text']}>Путеводитель по Поскоту</span>
                    </NavLink>
                    <Arrow onClick={this.burgerHandler}
                        active={this.state.isMenuActive}
                        className={styles.nav__burger}
                        color='#1A5690'
                    />
                    <nav className={styles.nav}>
                        {
                            this.state.isMenuActive ? (
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