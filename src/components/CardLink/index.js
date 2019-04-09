import React from 'react';
import styles from './CardLink.module.scss';
import { Link } from 'react-router-dom';

const CardLink = ({ card }) => {
  return (
    <div className={styles.cardlink}>
      <Link to={card.id + '/' + card.url} className={styles.cardlink__link} >
        <img className={styles.cardlink__img} src={card.images[0].original} alt={card.images[0].originalAlt} title={card.images[0].originalTitle} />
        <span className={styles.cardlink__text}>{card.header}</span>
      </Link>
    </div>
  )
}

export default CardLink;
