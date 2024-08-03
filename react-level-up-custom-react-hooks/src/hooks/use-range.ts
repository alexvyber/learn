import { useState } from "react"

interface UseCounter {
  init?: number
  min: number
  max: number
}

export const useRange = ({ init = 0, min, max }: UseCounter) => {
  const [count, setCount] = useState(init)

  const inc = () => setCount(prev => (prev >= max ? prev : prev + 1))
  const dec = () => setCount(prev => (prev <= min ? prev : prev - 1))
  const set = (val: number) => val >= min && val <= max && setCount(val)
  const reset = () => setCount(init)

  return [count, { inc, dec, reset, set }] as const
}
