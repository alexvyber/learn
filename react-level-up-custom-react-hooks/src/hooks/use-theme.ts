import { useEffect } from "react"
import { useLocalStorage } from "./use-local-storage"

type Theme = "light" | "dark"

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light" satisfies Theme) as [
    Theme,
    React.Dispatch<React.SetStateAction<Theme>>,
  ]

  useEffect(() => {
    document.body.className = ""
    document.body.classList.add(theme)
  }, [theme])

  return [theme, setTheme] as const
}
