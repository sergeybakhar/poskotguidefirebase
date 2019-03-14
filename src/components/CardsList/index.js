import React, { Component } from 'react';
import styles from './CardsList.module.scss';

class CardsList extends Component {
    render() {
        return (
            <div className={styles.cardslist}>
                <div className={styles.cardslist__inner}>
                    <p className={styles.cardslist__description}>Главная задача проекта - собрать наиболее полный список интересных, необычных, странных, красивых мест и  достопримечательностей, которые есть на поселке Котовского.</p>
                    <div className={styles.cardslist__wrapper}>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                        <div className={styles.cardslist__item}>
                            <a href="">
                                <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                                <span className={styles.cardslist__text}>Lorem Ipsum</span>
                            </a>
                        </div>
                        <div className={styles.cardslist__item}>
                            <img className={styles.cardslist__img} src="http://img.ppcblog.com.ua/b113/ALCG2F.jpg" alt="test" />
                            <span className={styles.cardslist__text}>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default CardsList;