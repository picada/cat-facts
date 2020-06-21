import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Notification from './Notification'

test('renders message correctly', () => {
  const message = 'This is a test message.'

  const component = render(
    <Notification message={message} />
  )

  const error = component.container.querySelector('p')

  expect(error).toHaveTextContent(
    'This is a test message.'
  )
})

test('null message returns empty message', () => {
    
  const component = render(
    <Notification message={null} />
  )

  expect(component.container).toBeEmpty()
})