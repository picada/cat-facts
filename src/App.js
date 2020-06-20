import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import { trackPromise } from 'react-promise-tracker'

const baseUrl = 'https://cat-fact.herokuapp.com/facts'

const App = () => {
  const [facts, setFacts] = useState([]) 
  const [errorMessage, setErrorMessage] = useState(null)

  const numberOfFacts = 5

  const fetchFacts = () => {
    setFacts([])
    trackPromise(
    axios
      .get(baseUrl+'/random?animal_type=cat&amount='+numberOfFacts) 
      .then(response => {
        setFacts(response.data)
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(error.message)
      }))
  }
  
  useEffect(() => {
    fetchFacts()
  }, [])

  return (
    <div>
      <Display content={facts} 
        handleClick={fetchFacts}  
        baseUrl={baseUrl}
        message={errorMessage}
      />
    </div>
  )
}

export default App

