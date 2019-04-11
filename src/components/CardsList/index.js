import React, { Component } from 'react';
import CardLink from '../CardLink';
import Loader from '../Loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import styles from './CardsList.module.scss';


class CardsList extends Component {

    state = {
        numberOfCards: 1
    }

    handleButton = () => {
        const { numberOfCards } = this.state;
        this.setState({ numberOfCards: numberOfCards + 1 })
    }

    render() {
        const { cardsList } = this.props;
        const { numberOfCards } = this.state;
        return (
            <div className={styles.cardslist}>
                <div className={styles.cardslist__inner}>
                    <p className={styles.cardslist__description}>Главная задача проекта - собрать наиболее полный список интересных, необычных, странных, красивых мест и  достопримечательностей, которые есть на поселке Котовского.</p>
                    <div className={styles.cardslist__wrapper}>
                        {
                            Array.isArray(cardsList) ? (
                                cardsList.map((item, i) => i < numberOfCards ? <CardLink card={item} key={item.id} /> : null
                                )
                            ) : (
                                    <Loader />
                                )
                        }
                    </div>
                    {
                        Array.isArray(cardsList) ? (
                            cardsList.length > numberOfCards ? (
                                <button className={styles.cardslist__btn} onClick={this.handleButton}>Показать еще</button>
                            ) : (
                                    <p className={styles.cardslist__notification}> На этом пока всё </p>
                                )
                        ) : (
                                null
                            )
                    }
                </div>
            </div>
        )
    }
};

CardsList.propTypes = {
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
)(CardsList)