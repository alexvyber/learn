import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export const useCookies = ({ key }: { key: string }) => {
  const initial = Cookies.get(key)
  const [cookie, setCookie] = useState<string | undefined>(initial)

  useEffect(() => {
    if (!cookie) return

    Cookies.set(key, cookie)
  }, [cookie, key])

  return [cookie, setCookie] as const
}
