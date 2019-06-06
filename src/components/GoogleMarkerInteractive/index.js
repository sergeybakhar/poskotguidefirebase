import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './GoogleMarkerInteractive.module.scss';
import marker from '../../img/marker.png'

// const GoogleMarkerInteractive = ({ text }) => {
//     return (
//         <div className={styles.marker}>
//             <img src={marker} alt={text} title={text} className={styles.marker__img} />

//         </div>
//     )
// }

// export default GoogleMarkerInteractive;

class GoogleMarkerInteractive extends Component {

    state = {
        show: false
    }

    handleOnMouseEnter = (id) => {
        this.setState({ show: !this.state.show })
    }

    handleOnMouseLeave = (id) => {
        this.setState({ show: !this.state.show })
    }

    render() {
        const { text, id, card } = this.props;
        const { show } = this.state;
        return (
            <div
                className={styles.marker}
                onMouseEnter={() => this.handleOnMouseEnter(id)}
                onMouseLeave={() => this.handleOnMouseLeave(id)}
            >
                <img src={marker} alt={text} title={text} className={styles.marker__img} />
                {
                    show ? (
                        <Link to={card.id + '/' + card.url} className={styles['marker-card']} >
                            <img className={styles['marker-card__img']} src={card.images[0].original} alt={card.images[0].originalAlt} title={card.images[0].originalTitle} />
                            <span className={styles['marker-card__text']}>{card.header}</span>
                        </Link>
                    ) : (null)
                }
            </div>
        )
    }
}

export default GoogleMarkerInteractive;