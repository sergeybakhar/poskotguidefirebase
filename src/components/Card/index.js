import React, { Component } from 'react';
import styles from './Card.module.scss';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import GoogleMapReact from 'google-map-react';
import { FacebookProvider, Comments } from 'react-facebook';
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  ViberShareButton,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  ViberIcon
} from 'react-share';


class Card extends Component {

  static defaultProps = {
    center: {
      lat: 46.573484,
      lng: 30.799630
    },
    zoom: 15
  };

  componentDidMount() {
    const { match: { params: { cardId } } } = this.props;
    console.log(this.props)
  }

  renderMarkers(map, maps) {
    new maps.Marker({
      position: {
        lat: 46.573484,
        lng: 30.799630
      },
      map,
      title: 'Hello World!'
    });
  }

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

        <h2 className={styles.card__title}>Посмотреть фотки</h2>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets
          additionalClass={styles.card__slider}
        />

        <h2 className={styles.card__title}>Узнать, где это</h2>
        <div className={styles.card__map}>
          <div className={styles['card__map-inner']}>
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAPSumGDQfNDZT9TlkfWoROc5V1who_t9M' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            /> */}
          </div>
        </div>

        <h2 className={styles.card__title}>Рассказать другим, пусть тоже узнают</h2>
        <div className={styles['card__social-share']}>
          <FacebookShareButton
            url='http://github.com'
            quote='test'
            className={styles['card__social-share-item']}
          >
            <FacebookIcon size={40} />
          </FacebookShareButton>

          <TelegramShareButton
            url='http://github.com'
            title='test'
            className={styles['card__social-share-item']}
          >
            <TelegramIcon size={40} />
          </TelegramShareButton>

          {/* <ViberShareButton
              url='https://moz.com/blog/domain-authority-seo'
             
              className={styles['card__social-share-item']}
            >
              <ViberIcon size={40} />
            </ViberShareButton> */}

          <WhatsappShareButton
            url='http://github.com'
            title='test'
            className={styles['card__social-share-item']}
          >
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
        </div>

        <h2 className={styles.card__title}>Обсудить и поделиться впечатлениями</h2>
        <div className={styles['card__fb-comments']}>
          <FacebookProvider appId="1045257252264946" language='ru_RU'  >
            <Comments href="http://localhost:3000/" width='50%' numPosts='3' orderBy='social' />
          </FacebookProvider>
        </div>
      </div>
    );
  }
}

export default Card;