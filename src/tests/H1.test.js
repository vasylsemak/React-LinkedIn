import React from 'react'
import { render } from '@testing-library/react'
import H1 from './H1'

test("Testing H1", () => {
  const {  getByText } = render(<H1 />)
  const h1 = getByText(/Hello React testing library!/)
  expect(h1).toHaveTextContent("Hello React testing library!")
})
