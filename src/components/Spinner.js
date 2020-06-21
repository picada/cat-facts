import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-loader-spinner'

const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker()
  return (
    promiseInProgress &&
    <div className='mx-auto py-5'>
    <Loader type="Circles" color='teal' height='200' width='200' />
    </div>
  )
}  

export default Spinner