import React, { Component } from 'react';
import { Arrow } from 'react-burgers';
import withSizes from 'react-sizes';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './Header.module.scss';
import './Header.module.scss';
import { withRouter } from "react-router";

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
        // const hrefOfHome = window.location.href.length > 27;
        const { isHomePage } = this.props;

        return (
            <header className={styles.header}>
                <div className={styles.header__inner}>
                    <NavLink to="/" className={styles.header__logo} exact activeClassName={styles['nav__link--active-header']}>
                        <i className="fas fa-map-marked-alt"></i>
                        {!isHomePage && <span className={styles['header__logo-text']}>Путеводитель по Поскоту</span>}
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
                                    {/* <NavLink to="/map" className={styles.nav__link} exact activeClassName={styles['nav__link--active']}>Карта</NavLink> */}
                                    <NavLink to="/contact" className={styles.nav__link} exact activeClassName={styles['nav__link--active']}>Контакты</NavLink>
                                </div>
                            ) : (null)
                        }
                        <div className={styles.nav__inner}>
                            <NavLink to="/map" className={styles.nav__link} exact activeClassName={styles['nav__link--active']}>Карта</NavLink>
                            <NavLink to="/contact" className={styles.nav__link} exact activeClassName={styles['nav__link--active']}>Контакты</NavLink>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    isMobile: PropTypes.bool,
    isHomePage: PropTypes.bool.isRequired
};

const mapSizesToProps = ({ width }) => {
    return ({
        isMobile: width > 650,
    })
};

const mapStateToProps = (state) => {
    return {
        isHomePage: state.homePageReducer.isHomePage
    }
}

// export default withSizes(mapSizesToProps)(Header);

export default compose(
    withRouter,
    withSizes(mapSizesToProps),
    connect(mapStateToProps)
)(Header)