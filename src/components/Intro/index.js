import React from 'react';
import styles from './Intro.module.scss'

const Intro = () => {
    const hrefOfHome = window.location.href.length > 27;

    return (
        !hrefOfHome &&
        <div className={styles.intro}>
            <div className={styles.intro__mask}>
                <div className={styles.intro__inner}>
                    <h1 className={styles.intro__header}>
                        Путеводитель по Поскоту
                </h1>
                    <p className={styles.intro__description}>Можно ли интересно, увлекательно, с пользой и бесплатно провести время на поселке Котовского или совсем рядом? Ещё как можно! Главная задача сайта — собрать наиболее полный список интересных,  красивых, необычных, странных мест и достопримечательностей, которые есть на поскоте и вблизи.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;
