import { useHover } from "../hooks"

export const Rectangle = () => {
  const [isHovered, listeners] = useHover()
  return (
    <div
      {...listeners}
      style={{
        height: "200px",
        width: "320px",
        background: `${isHovered ? "#eeffee" : "#eeeeff"}`,
        borderRadius: "8px",
        transition: "ease-in",
        transitionDuration: "100ms",
      }}></div>
  )
}
