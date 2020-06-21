import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Fact from './Fact'

const FactBox = ({facts, baseUrl}) => {
  return (
    <ListGroup variant="flush">
      {facts.map(fact =>           
        <Fact key={fact._id} fact={fact} baseUrl={baseUrl}/>        
      )}      
    </ListGroup>
  )
}

export default FactBox