import React, { Component } from 'react';
import styles from './CardsList.module.scss';
import { connect } from 'react-redux';
import CardLink from '../CardLink';
import Loader from '../Loader';

class CardsList extends Component {
    render() {
        const { cardsList } = this.props;
        return (
            <div className={styles.cardslist}>
                <div className={styles.cardslist__inner}>
                    <p className={styles.cardslist__description}>Главная задача проекта - собрать наиболее полный список интересных, необычных, странных, красивых мест и  достопримечательностей, которые есть на поселке Котовского.</p>
                    <div className={styles.cardslist__wrapper}>
                        {
                            cardsList ? (
                                cardsList.map(item =>
                                    <CardLink card={item} key={item.id} />
                                )
                            ) : (
                                    <Loader/>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        cardsList: state.cardsList.cards
    }
}

export default connect(mapStateToProps)(CardsList);