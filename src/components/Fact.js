import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Fact = ({ fact, baseUrl }) => {
  return (
    <ListGroup.Item style={{backgroundColor:'transparent'}}>{fact.text} <a href={baseUrl+'/'+fact._id} target="_blank" rel="noopener noreferrer">(link to fact)</a></ListGroup.Item>
  )
}

export default Fact