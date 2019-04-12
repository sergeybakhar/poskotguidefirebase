import React from 'react';
import styles from './NotFound.module.scss';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className={styles['not-found']}>
            <Helmet>
                <title>Страница не найдена: 404 ошибка</title>
            </Helmet>
            <h2 className={styles['not-found__header']}>404</h2>
            <p className={styles['not-found__paragraph']}>
                Все было нормально, но что-то пошло не так...
            </p>
            <p className={styles['not-found__paragraph']}>
                Или страницы не существует, или страница перестала существовать, или страница только планирует засуществовать.
            </p>
            <p className={styles['not-found__paragraph']}>
                Пока, к сожалению, здесь 404-ошибка. Приносим свои извинения за неудобства.
            </p>
        </div>
    )
}

export default NotFound
