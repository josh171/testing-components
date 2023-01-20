import { waitFor, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {APIComponent} from '../Components/APIComponent'

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: 'Josh'}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('<APIComponent>', async () => {
  render(<APIComponent />)
  const out = await waitFor(() => screen.getByRole("contentinfo"))
  expect(out).toHaveTextContent("Name is Josh")
})