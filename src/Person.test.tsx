import { render, screen } from '@testing-library/react'
import Person from './Person'

test('<Person>', () => {
  render(<Person name="Josh" />)
  const divElement = screen.getByRole("contentinfo")
  expect(divElement).toHaveTextContent("Name is Josh")
  expect(divElement).toHaveAttribute("role", "contentinfo")
})