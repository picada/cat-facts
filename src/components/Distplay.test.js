import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Display from './Display'


test('clicking the button calls event handler once', async () => {

  const mockHandler = jest.fn()
  
  const component = render(
    <Display 
      content={[]} 
      handleClick={mockHandler}  
      baseUrl={'testbase'}
      message={'testmessage'}
    />
  )
  
  const button = component.getByText('Moar, plz')
  fireEvent.click(button)
  
  expect(mockHandler.mock.calls).toHaveLength(1)
})