import { renderHook } from "@testing-library/react-hooks"
import { rest } from "msw"
import { setupServer } from "msw/lib/node"
import { act } from "react-dom/test-utils"
import { useAPI } from "./useAPI"

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: 'Josh'}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("<useAPI>", async () => {
  // const { result, waitForNextUpdate } = renderHook(() => useAPI())
  // await waitForNextUpdate()
  // expect(result.current).toEqual({ name: "Josh" })
})