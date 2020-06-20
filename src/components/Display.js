import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Notification from './Notification'

import FactBox from './FactBox'
import Spinner from './Spinner'

const Display = ({content, handleClick, message}) => {
    return (
      <Container style={{ padding: '5rem'}} >
        <Row><Notification message={message}/></Row>
        <Row><h1> Did you know that...</h1></Row>
        <Row style={{ minHeight: '25rem', padding:'1rem' }}>
          <Spinner/>
          <FactBox facts={content} />
        </Row>
        <Row><Button variant="info" size="lg" onClick={handleClick}>Moar, plz</Button></Row>
      </Container>
    )   
  }

export default Display