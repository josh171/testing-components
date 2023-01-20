import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useCount from "../Hooks/useCount"

test("<useCount>", () => {
  const { result } = renderHook(() => useCount())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})