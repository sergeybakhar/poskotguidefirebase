import React, { Component } from 'react';
import styles from './Card.module.scss';
import Loader from '../Loader';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
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
import { compose } from 'redux';
import { firebaseConnect, getVal } from 'react-redux-firebase'

class Card extends Component {

  state = {
    header: '',
    description: '',
    images: [],
    map: [
      {
        "center": {
          "lat": 46.569139,
          "lng": 30.804672
        },
        "zoom": 15
      },
      {
        "position": {
          "lat": 46.569139,
          "lng": 30.804672
        },
        "title": "Hello World!"
      }
    ]
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { header, description, images, map } = this.props.card
    const { card } = this.props;

    if (prevProps.card !== card) {
      this.setState(
        {
          header,
          description,
          images,
          map
        }
      )
    }
  }

  renderMarkers(map, maps) {
    const { position, title } = this.state.map[1];
    new maps.Marker({
      position: {
        lat: position.lat,
        lng: position.lng
      },
      map,
      title
    });
  }

  render() {
    const { header, description, images } = this.state;
    const { center, zoom } = this.state.map[0];
    const { card } = this.props;
    return (
      card ? (
        <div className={styles.card}>
          <h1 className={styles.card__header}>{header}</h1>
          {/* <span className={styles.card__address}>Адрес:</span> */}
          <p className={styles.card__description}>{description}</p>

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
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAdF-HqWA4VZjOuvCC9Dk9taOG6OXtg9No' }}
                defaultCenter={
                  {
                    lat: center.lat,
                    lng: center.lng
                  }
                }
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
              />
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
      ) : (
          <Loader />
        )
    );
  }
}

const mapStateToProps = ({ firebase }, props) => {
  return ({
    card: getVal(firebase, `data/${props.match.params.cardId}`)
  })
}

export default compose(
  firebaseConnect((props) => {
    return [
      { path: `/${props.match.params.cardId}` },
    ]
  }),
  connect(mapStateToProps)
)(Card)
