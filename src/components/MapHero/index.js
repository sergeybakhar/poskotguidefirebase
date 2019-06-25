import React from 'react';
import styles from './MapHero.module.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MapHero = ({ isHomePage }) => {
    return (
        isHomePage &&
        <NavLink to="/map" className={styles['map-hero']}>
            <div className={styles['map-hero__mask']}>
                <div className={styles['map-hero__inner']}>
                    <h2 className={styles['map-hero__header']}>
                        Карта мест
                     </h2>
                </div >
            </div >
        </NavLink>
    )
}

MapHero.propTypes = {
    isHomePage: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isHomePage: state.homePageReducer.isHomePage
    }
}

export default connect(mapStateToProps)(MapHero);
