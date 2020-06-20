import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import { trackPromise } from 'react-promise-tracker'


const baseUrl = 'https://cat-fact.herokuapp.com/facts'

const App = () => {
  const [facts, setFacts] = useState([]) 

  const fetchFive = () => {
    trackPromise(
    axios
      .get(baseUrl+'/random?animal_type=cat&amount=5') 
      .then(response => {
        setFacts(response.data)
      })
      .catch(error => {
        console.log(error)
      }))
  }
  
  useEffect(() => {
    fetchFive()
  }, [])

  return (
    <div>
      <Display content={facts} 
        handleClick={fetchFive}  
        buttonText='Moar, pls' 
        baseUrl={baseUrl}
      />
    </div>
  )
}

export default App

