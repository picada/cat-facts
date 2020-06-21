import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Fact from './Fact'

test('renders content correctly', () => {
  const fact = {
    text: 'This is a fact.',
    _id: 3,
  }
  const url = 'testbase'

  const component = render(
    <Fact fact={fact} baseUrl={url} />
  )

  expect(component.container).toHaveTextContent(
    'This is a fact.'
  )

  const link = component.container.querySelector('a')

  expect(link).toHaveTextContent(
    '(link to fact)'
  )

  expect(link).toHaveAttribute('href', expect.stringContaining('testbase/3'))
})