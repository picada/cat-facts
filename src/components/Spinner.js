import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-loader-spinner'

const Spinner = (props) => {
    const { promiseInProgress } = usePromiseTracker()
    return (
      promiseInProgress &&
      <Loader type="Circles" color="black" height="100" width="100" />
    )
  }  

export default Spinner