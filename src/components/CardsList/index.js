import React, { Component } from 'react';
import styles from './CardsList.module.scss';
import { Link, NavLink } from 'react-router-dom';
import data from './json';

class CardsList extends Component {
    render() {
        return (
            <div className={styles.cardslist}>
                <div className={styles.cardslist__inner}>
                    <p className={styles.cardslist__description}>Главная задача проекта - собрать наиболее полный список интересных, необычных, странных, красивых мест и  достопримечательностей, которые есть на поселке Котовского.</p>
                    <div className={styles.cardslist__wrapper}>
                        {
                            data ? (
                                data.map(item =>
                                    <div className={styles.cardslist__item} key={item.id}>
                                        <Link to={item.url} >
                                            <img className={styles.cardslist__img} src={item.images[0].original} alt="test" />
                                            <span className={styles.cardslist__text}>{item.header}</span>
                                        </Link>
                                    </div>
                                )
                            ) : (
                                    'hello'
                                )
                        }


                        {/* <div className={styles.cardslist__item}>
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
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default CardsList;