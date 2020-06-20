import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-loader-spinner'

const Spinner = (props) => {
    const { promiseInProgress } = usePromiseTracker()
    return (
      promiseInProgress &&
      <div style={{padding:'5rem'}}>
      <Loader type="Circles" color="orange" height="200" width="200" />
      </div>
    )
  }  

export default Spinner