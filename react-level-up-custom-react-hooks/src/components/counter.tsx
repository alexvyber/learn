import { useCounter } from "../hooks"

export const Counter = () => {
  const [count, { inc, dec }] = useCounter()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}
