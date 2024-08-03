import { useState } from "react"

export const useToggle = (init: boolean) => {
  const [isToggle, setToggle] = useState(init)

  const toggle = () => setToggle(prev => !prev)
  return { isToggle, toggle }
}
