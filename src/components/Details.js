import React, { Component } from 'react'

import uberxImg from '../assets/images/uberx.png'
import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from '../assets/styles/Details';

class Details extends Component {
  render () {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viajens baratas</TypeDescription>

        <TypeImage source={ uberxImg } />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$ 6,00</TypeDescription>

        <RequestButton
          onPress={ () => {} }
        >
          <RequestButtonText>Solicitar Uberx</RequestButtonText>
        </RequestButton>
      </Container>
    )
  }
}

export default Details