import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyARjR2OGgg9m4YH2LzfN-iaGaKgy1394JA"
      strokeWidth={3}
      strokeColor="#222"
    />
  )
}

export default Directions