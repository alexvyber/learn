import { useCookies } from "../hooks"

export const Cookie = () => {
  const [cookie, setCookie] = useCookies({ key: "test" })

  return (
    <div>
      <h1>{cookie || ""}</h1>
      <input value={cookie} onChange={e => setCookie(e.target.value)} />
    </div>
  )
}
