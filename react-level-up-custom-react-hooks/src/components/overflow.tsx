import { useState } from "react"
import { useScrollFreeze } from "../hooks"

export const Overflow = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>Freeze</button>
      {show ? <Component /> : <></>}
    </>
  )
}

const Component = () => {
  useScrollFreeze()
  return <h1>Some Shit</h1>
}
