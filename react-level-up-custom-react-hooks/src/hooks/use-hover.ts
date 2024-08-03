import { useState, useMemo } from "react"

export const useHover = () => {
  const [isHoverd, setHovered] = useState(false)

  const bind = useMemo(
    () => ({
      onMouseOver: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    }),
    [],
  )

  return [isHoverd, bind] as const
}
