import { useState, useEffect } from "react"

export const useLocalStorage = (
  key: string,
  initialValue: string,
): [storage: string, setStorage: React.Dispatch<React.SetStateAction<string>>] => {
  const item = window.localStorage.getItem(key)

  const [storage, setStorage] = useState(item || initialValue)

  useEffect(() => {
    window.localStorage.setItem(key, storage)
  }, [storage, key, initialValue])

  return [storage, setStorage]
}
