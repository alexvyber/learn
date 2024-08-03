import { useState, useRef, useEffect } from "react"

export const useMeasure = <Ref extends HTMLElement = HTMLElement>() => {
  const ref = useRef<Ref>(null)

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  const [resizeObject] = useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect))
  })

  useEffect(() => {
    if (!ref.current) return

    resizeObject.observe(ref.current)

    return () => resizeObject.disconnect()
  }, [resizeObject])

  return [bounds, { ref }] as const
}
