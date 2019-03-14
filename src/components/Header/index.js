import React, { Component } from 'react';
import { Arrow } from 'react-burgers';
import styles from './Header.module.scss';
import './Header.module.scss';
import withSizes from 'react-sizes';
import { HashRouter, Route, Link, NavLink } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import CardsList from '../CardsList';

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
            <HashRouter>
                <>
                <header className={styles.header}>
                    <div className={styles.header__inner}>
                        <Link to="/" className={styles.header__logo}>
                            <i className="fas fa-map-marked-alt"></i> <span className={styles['header__logo-text']}>Путеводитель по Поскоту</span>
                        </Link>
                        <Arrow onClick={this.burgerHandler}
                            active={this.state.isMenuActive}
                            className={styles.nav__burger}
                            color='#1A5690'
                        />
                        <nav className={styles.nav}>
                            {
                                this.state.isMenuActive ? (
                                    <div className={styles['nav__inner-mobile']}>
                                        {/* <NavLink to="/about" className={styles.nav__link} activeClassName={styles['nav__link--active']}>О проекте</NavLink> */}
                                        <NavLink to="/contact" className={styles.nav__link} activeClassName={styles['nav__link--active']}>Контакты</NavLink>
                                    </div>
                                ) : (null)
                            }
                            <div className={styles.nav__inner}>
                                {/* <NavLink to="/about" className={styles.nav__link} activeClassName={styles['nav__link--active']}>О проекте</NavLink> */}
                                <NavLink to="/contact" className={styles.nav__link} activeClassName={styles['nav__link--active']}>Контакты</NavLink>
                            </div>
                        </nav>
                    </div>
                    
                </header>

                <Route exact path="/" component={CardsList} />
                    {/* <Route path="/about" component={About} /> */}
                    <Route path="/contact" component={Contact} />
                </>
            </HashRouter>
        )
    }
}

const mapSizesToProps = ({ width }) => {
    return ({
        isMobile: width > 650,
    })
}

export default withSizes(mapSizesToProps)(Header);