import React, { Component } from 'react';
import CardLink from '../CardLink';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import shuffle from 'lodash/shuffle';
import without from 'lodash/without';
import styles from './RandomCards.module.scss';

class RandomCards extends Component {



    state = {
        numberOfCards: 4
    }

    render() {

        const { cardsList, card } = this.props;
        const { numberOfCards } = this.state;
        let filteredArr;

        if (Array.isArray(cardsList)) {
            filteredArr = without(cardsList, card);
        }

        return (
            <div className={styles.randomCards}>
                <div className={styles.randomCards__inner}>
                    <h3 className={styles.randomCards__header}>Путешествуем дальше?</h3>
                    <div className={styles.randomCards__wrapper}>
                        {
                            Array.isArray(cardsList) && (
                                shuffle(filteredArr).map((item, i) => i < numberOfCards ? <CardLink card={item} key={item.id} isRandom={true} id={item.id} /> : null)
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
};

RandomCards.propTypes = {
    cardsList: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};

const mapStateToProps = (state) => {
    return {
        cardsList: state.firebase.data.cards
    }
};

export default compose(
    firebaseConnect([
        'cards'
    ]),
    connect(
        mapStateToProps
    )
)(RandomCards)