import React, { Component, Fragment } from 'react'
import { View, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Geocoding from 'react-native-geocoding'
import Search from './Search'
import Directions from './Directions'
import Details from './Details'
import { getPixelSize } from '../utils/getPixelRatioAndroid'

import markerImg from '../assets/images/marker.png'
import backButtonImg from '../assets/images/back.png'
import menuButtonImg from '../assets/images/menu.png'

import {
  LocationBox,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
  LocationText,
  Back,
  Menu,
  LocationBoxDestiny
} from '../assets/styles/Map';

class Map extends Component {

  state = {
    region: null,
    destination: null,
    duration: null,
    address: null
  }

  async componentDidMount() {
    Geocoding.init('AIzaSyARjR2OGgg9m4YH2LzfN-iaGaKgy1394JA')
    await this.getUserPosition()
  }

  getUserPosition = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {

        const response = await Geocoding.from({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })

        let address = response.results[0].formatted_address
        address = address.substring(0, address.indexOf(','))

        // console.log(position.coords)
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          address
        })
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 2000,
        enableHighAccuracy: true
      }
    )
  }

  handleLocationSelected = (data, { geometry }) => {
    const { location: {lat: latitude, lng: longitude} } = geometry

    // console.log(data, geometry)

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      }
    })

    // console.log(this.state.destination, this.state.region, this.mapView)
  }

  handleBack = () => { this.setState({ destination: null }) }

  render () {
    const { region, destination, duration, address } = this.state
    return (
      <View style={{ flex: 1 }}>
        <MapView 
          style={{ flex: 1 }}
          region={ region }
          showsUserLocation
          loadingEnabled
          ref={ el => this.mapView = el }
        >
          { destination && (
            <Fragment>
              <Directions
                origin={region}
                destination={destination}
                onReady={
                  (result) => {
                    this.setState({
                      duration: Math.floor(result.duration)
                    })
                    this.mapView.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: getPixelSize(30),
                        left: getPixelSize(30),
                        top: getPixelSize(30),
                        bottom: getPixelSize(330)
                      }
                    })
                  }
                }
              />
              <Marker
                coordinate={region}
                anchor={{ x:0, y:0 }}
                title={destination.title}
              >
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{ duration }</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>{ address }</LocationText>
                </LocationBox>
              </Marker>
              <Marker
                coordinate={destination}
                anchor={{ x:0, y:0 }}
                image={markerImg}
                title={destination.title}
              >
                <LocationBoxDestiny>
                  <LocationText>{destination.title}</LocationText>
                </LocationBoxDestiny>
              </Marker>
            </Fragment>
          )}
        </MapView>
        {destination ? 
          <Fragment>
            <Back onPress={this.handleBack}>
              <Image source={backButtonImg} />
            </Back>
            <Details />
          </Fragment>
          :
          <Fragment>
            <Menu onPress={()=>{}}>
              <Image source={menuButtonImg} />
            </Menu>
            <Search onLocationSelected={this.handleLocationSelected} />
          </Fragment>
        }
      </View>
    )
  }
}

export default Map