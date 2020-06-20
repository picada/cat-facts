import React from 'react'

const baseUrl = 'https://cat-fact.herokuapp.com/facts'

const Fact = ({ fact }) => {
  return (
    <li>{fact.text} <a href={baseUrl+'/'+fact._id} target="_blank" rel="noopener noreferrer">(link to fact)</a></li>
  )
}

export default Fact