import React, { Component } from 'react';
import styles from './Card.module.scss';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';


class Card extends Component {


  render() {


    const images = [
      {
        original: 'http://img.ppcblog.com.ua/b113/9G3FC0.jpg',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalAlt: 'test',
        originalTitle: 'test',
      },
      {
        original: 'http://img.ppcblog.com.ua/b113/9G3FC0.jpg',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://img.ppcblog.com.ua/b113/9G3FC0.jpg',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className={styles.card}>
        <h1 className={styles.card__header}>Заголовок poskot travel</h1>
        {/* <span className={styles.card__address}>Адрес:</span> */}
        <p className={styles.card__description}>Описание: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, non aperiam ipsa illo excepturi aliquam mollitia asperiores eos qui placeat aut adipisci blanditiis maxime sit voluptas provident enim laborum officiis aliquid vitae temporibus! Recusandae!</p>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets
          additionalClass={styles.card__slider}
        />
        <div>Карта</div>
      </div>
    );
  }
}

export default Card;
