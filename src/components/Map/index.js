import React, { Component } from 'react';
import styles from './Map.module.scss';
import Loader from '../Loader';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import GoogleMarkerInteractive from '../GoogleMarkerInteractive';

class Map extends Component {

  state = {
    show: false
  }

  componentDidMount() {
    window.scrollTo(0, 0);

  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }

  // renderMarkers = (map, maps) => {
  //   const { card } = this.props;

  //   new maps.Marker({
  //     position: {
  //       lat: card.map[0].center.lat,
  //       lng: card.map[0].center.lng
  //     },
  //     title: card.map[1].title,
  //     map
  //   });
  // }

  _onChildMouseEnter = (key) => {
    // console.log(key)
    this.setState({ show: !this.state.show })
  }

  _onChildMouseLeave = (key) => {
    // console.log(key)
    this.setState({ show: !this.state.show })
  }

  _onChildClick = (key) => {
    console.log(key)
    this.setState({ show: !this.state.show })
  }


  render() {
    const { cardsList } = this.props;
    return (
      cardsList ? (
        <>
          <div className={styles.map}>
            <Helmet>
              <title>Карта мест на поселке Котовского</title>
            </Helmet>

            {/* <div className={styles.map__map}>
              <div className={styles['map__map-inner']}> */}
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAdF-HqWA4VZjOuvCC9Dk9taOG6OXtg9No' }}
              center={
                {
                  lat: 46.574531,
                  lng: 30.780865
                }
              }
              defaultZoom={13}
              onChildMouseEnter={this._onChildMouseEnter}
              onChildMouseLeave={this._onChildMouseLeave}
              onChildClick={this._onChildClick}
            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            >
              {cardsList ? (
                cardsList.map(card => (
                  <GoogleMarkerInteractive
                    lat={card.map[0].center.lat}
                    lng={card.map[0].center.lng}
                    key={card.id}
                    show={this.state.show}
                    id={card.id}
                    card={card}
                  />
                ))
              ) : (null)}
            </GoogleMapReact>
          </div>
          {/* </div>
          </div> */}
        </>
      ) : (
          <Loader />
        )
    );
  }
}

Map.propTypes = {
  cardsList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

const mapStateToProps = (state) => {
  return {
    cardsList: state.firebase.data.cards
  }
};

export default compose(
  firebaseConnect([
    'cards'
  ]),
  connect(
    mapStateToProps
  )
)(Map)
