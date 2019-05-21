import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import styles from './TopCards.module.scss';

class TopCards extends Component {

    state = {
        topCardsArr: []
    }

    componentDidUpdate(prevProps, prevState) {
        const { cardsList } = this.props;

        if (Array.isArray(cardsList) && this.state.topCardsArr.length === 0) {
            this.setState({ topCardsArr: cardsList.filter(card => card.id <= 4) })
        }
    }

    render() {
        const { topCardsArr } = this.state;
        const { isHomePage } = this.props;

        return (
            isHomePage &&
            <div className={styles.topCards}>
                <div className={styles.topCards__inner}>
                    <i className="fas fa-map-marker-alt"></i>
                    <h3 className={styles.topCards__header}>Топ популярных мест</h3>
                    <div className={styles.topCards__wrapper}>
                        {
                            topCardsArr && (
                                topCardsArr.map(item => (
                                    <Link to={item.id + '/' + item.url} className={styles.topCards__link} key={item.id}>
                                        <img className={styles.topCards__img} src={item.logo} alt={item.images[0].originalAlt} title={item.images[0].originalTitle} />
                                        <span className={styles.topCards__text}>{item.header}</span>
                                        <span className={styles.topCards__description}>{item.description}</span>
                                    </Link>
                                ))
                            )
                        }
                    </div>
                </div>
            </div >
        )
    }
};

TopCards.propTypes = {
    cardsList: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};

const mapStateToProps = (state) => {
    return {
        cardsList: state.firebase.data.cards,
        isHomePage: state.homePageReducer.isHomePage
    }
};

export default compose(
    firebaseConnect([
        'cards'
    ]),
    connect(
        mapStateToProps
    )
)(TopCards)