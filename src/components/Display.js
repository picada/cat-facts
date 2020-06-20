import React from 'react'
import Button from './Button'
import Fact from './Fact'
import Spinner from './Spinner'

const Display = ({content, handleClick, buttonText}) => {
  return (
    <div>
      <h1> Did you know that...</h1>
      <Spinner />
      <FactContent facts={content} />
      <Button handleClick={handleClick} text={buttonText} />
    </div>
  )   
}

const FactContent = ({facts, baseUrl}) => {
  return (
    <ul>
      {facts.map(fact =>           
        <Fact key={fact._id} fact={fact} />        
      )}      
    </ul>
  )
}

export default Display