import { useEffect, useState, useMemo } from "react"
import { badFibonacci as expensiveMathOperation } from "../lib/expensive-math-operation"

export function UseMemo() {
  const [count, setCount] = useState(35)
  const [left, setLeft] = useState(0)
  // const value = () => expensiveMathOperation(count)
  const value = useMemo(() => expensiveMathOperation(count), [count])

  useEffect(() => {
    requestAnimationFrame(animate)

    function animate() {
      setLeft(left + 1)
    }
  }, [left])

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  )
}
