import { fireEvent, render, screen } from '@testing-library/react'
import {ButtonWrapper} from '../Components/ButtonWrapper'

test('<ButtonWrapper>', () => {
  const onClick = jest.fn()
  render(<ButtonWrapper title="Add Item" onClick={onClick} />)
  const buttonElement = screen.getByText("Add Item")
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})