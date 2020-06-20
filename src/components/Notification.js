import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <Alert variant='danger'>
      <Alert.Heading>Oops! Something went wrong</Alert.Heading>
      <p>{message}</p>
    </Alert>
  )
}

export default Notification