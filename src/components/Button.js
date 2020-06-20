import React from 'react'
import Button from 'react-bootstrap/Button';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
  )

export default Button