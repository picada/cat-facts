import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const baseUrl = 'https://cat-fact.herokuapp.com/facts'

const Fact = ({ fact }) => {
  return (
    <ListGroup.Item>{fact.text} <a href={baseUrl+'/'+fact._id} target="_blank" rel="noopener noreferrer">(link to fact)</a></ListGroup.Item>
  )
}

export default Fact