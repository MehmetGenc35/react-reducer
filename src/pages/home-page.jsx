


import React from 'react'
import { Container } from 'react-bootstrap'
import Counter from '../components/counter/counter'
import SayHello from '../components/hello/sayhello'

const HomePage = () => {
  return (
    <Container>
      <SayHello/>
      <Counter/>
    </Container>
  )
}

export default HomePage