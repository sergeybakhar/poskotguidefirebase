import React from 'react';
import styles from './GoogleMarker.module.scss';
import marker from '../../img/marker.png'

const GoogleMarker = ({ text }) => {
    return (
        <div className={styles.marker}>
            <img src={marker} alt={text} title={text} className={styles.marker__img} />

        </div>
    )
}

export default GoogleMarker;
