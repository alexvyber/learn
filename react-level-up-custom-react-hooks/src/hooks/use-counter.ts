import { useState } from "react"

export const useCounter = (init: number = 0) => {
  const [count, setCount] = useState<number>(init)

  const inc = () => setCount((prev: number) => prev - 1)
  const dec = () => setCount((prev: number) => prev + 1)

  return [count, { inc, dec }] as const
}
