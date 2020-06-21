import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FactBox from './FactBox'

test('renders all facts', () => {
  const facts = [
    {
      text: 'Cats are great.',
      _id: 1
    },
    {
      text: 'Cats suck.',
      _id: 2
    },
    {
      text: 'Cats are okay.',
      _id: 3
    }
  ]

  const url = 'testbase'

  const component = render(
    <FactBox facts={facts} baseUrl={url}/>
  )

  expect(component.container).toHaveTextContent(
    'Cats are great.'
  )

  expect(component.container).toHaveTextContent(
    'Cats suck.'
  )

  expect(component.container).toHaveTextContent(
    'Cats are okay.'
  )
})