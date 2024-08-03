import { createContext, useContext } from "react"

import { useToggle } from "../hooks"

type Menu = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const AppContext = createContext<Menu>({
  isMenuOpen: false,
  toggleMenu: () => {},
})

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const { isToggle, toggle } = useToggle(false)

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggle,
        toggleMenu: toggle,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
