import React, { Component } from 'react';
import CardLink from '../CardLink';
import Loader from '../Loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import styles from './CardsList.module.scss';
import { isHomePage } from '../../store/actions/homePageAction';
import MapHero from '../MapHero';

class CardsList extends Component {

    state = {
        numberOfCards: 8
    }

    handleButton = () => {
        const { numberOfCards } = this.state;
        this.setState({ numberOfCards: numberOfCards + 8 })
    }

    componentDidMount() {
        this.props.isHomePage(true)
    }

    componentWillUnmount() {
        this.props.isHomePage(false)
    }

    render() {
        const { cardsList } = this.props;
        const { numberOfCards } = this.state;
        return (
            <>
                <div className={styles.cardslist}>
                    <Helmet>
                        <title>Путеводитель по Поскоту (поселок Котовского, Суворовский район, Одесса)</title>
                    </Helmet>
                    <div className={styles.cardslist__inner}>
                        {/* <p className={styles.cardslist__description}>Можно ли интересно, увлекательно, с пользой и бесплатно провести время на поселке Котовского или совсем рядом? Ещё как можно! Главная задача сайта — собрать наиболее полный список интересных, необычных, странных, красивых мест и достопримечательностей, которые есть на поскоте и вблизи.</p> */}

                        {/* <p className={styles.cardslist__description}>Сайт в процессе наполнения и разработки, просим отнестись с пониманием. Все вопросы и пожелания просим оставлять <NavLink to="/contact" className={styles.cardslist__link}>на странице обратной связи</NavLink>.</p> */}

                        <p className={styles.cardslist__support}>
                            <i className="fas fa-tools"></i>Сайт в процессе наполнения и разработки, отнеситесь с пониманием. В настоящее время проект не носит коммерческий характер. Будем рады любым рекомендациям! Все вопросы и пожелания просим оставлять <NavLink to="/contact" className={styles.cardslist__link}>на странице обратной связи</NavLink>.</p>
                        <i className="fas fa-map-signs"></i>
                        <h3 className={styles.cardslist__header}>Свежие добавления</h3>

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
                                        <p className={styles.cardslist__notification}>На этом пока всё! Знаете интересное место, которого нет на сайте? Просим поделиться <NavLink to="/contact" className={styles.cardslist__link}>на странице обратной связи</NavLink>.</p>
                                    )
                            ) : (
                                    null
                                )
                        }
                    </div>
                </div>
                <MapHero />
            </>
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
    let reversedCardsList;
    if (state.firebase.data.cards) {
        reversedCardsList = [...state.firebase.data.cards]; //is it a good practice? it works fast!
        reversedCardsList.reverse();
    }

    return {
        cardsList: reversedCardsList
    }
};

export default compose(
    firebaseConnect([
        'cards'
    ]),
    connect(
        mapStateToProps,
        { isHomePage }
    )
)(CardsList)