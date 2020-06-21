import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Notification from './Notification'
import FactBox from './FactBox'
import Spinner from './Spinner'
import Cat from '../images/cat.png'

const Display = ({content, handleClick, message, baseUrl}) => {
  return (
    <Container fluid className='p-5' > 
      <Row>
        <Col xs={12} md={9} style={{backgroundColor:'lightyellow', padding:'5rem'}} className='rounded border boder-secondary'>
          <Notification message={message}/>
          <Row><h1> Did you know that...</h1></Row>
          <Row style={{ minHeight: '29rem', padding:'1rem' }}>
            <Spinner/>
            <FactBox facts={content} baseUrl={baseUrl} />
          </Row>
        </Col>
        <Col className='align-self-end text-center'>
          <Button variant='info' size='lg' onClick={handleClick} className='p-5 m-4'>Moar, plz</Button>
          <Image src={Cat} fluid className='py-3'/>
        </Col>
      </Row>
    </Container>
  )   
}

export default Display