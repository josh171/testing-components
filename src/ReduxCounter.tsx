import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, RootState } from "./store"

export function ReduxCounter() {
  const count = useSelector((state: RootState) => {
    return state.counter.value
  })
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
        <span role="contentinfo">{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}