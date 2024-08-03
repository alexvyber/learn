import { useAppContext } from "../providers/app-provider"

export const Nav = () => {
  const { isMenuOpen, toggleMenu } = useAppContext()

  if (!isMenuOpen) return null

  return (
    <nav
      style={{
        color: "black",

        width: "10vw",
        height: "10vh",
        left: 0,
        right: 0,
      }}>
      <h1>Hello</h1>
      <button onClick={toggleMenu}>Close</button>
    </nav>
  )
}
