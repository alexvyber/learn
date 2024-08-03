import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Reset = () => {
  const { email, timestamps, token } = useParams()
  // const navigate = useNavigate()

  const [pass, setPass] = useState({
    password: "",
    confirm: ""
  })

  const [text, setText] = useState("")

  const changePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email || !timestamps) throw new Error("no email or timestamps")

    try {
      const res = await fetch("https://api.dev.local/api/set-new-password", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email: decodeURIComponent(email),
          password: pass.password,
          timestamps,
          token
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

      const { data } = await res.json()
      console.log("🚀 ~ changePassword ~ data", data)
      setText(data.password)
    } catch (e) {
      console.error(e)
    }
  }

  if (parseInt(timestamps || "0") < Date.now()) {
    return <h3>Link expired</h3>
  }

  return (
    <div>
      reset {email} -{" "}
      {new Date(parseInt(timestamps || "0")).toLocaleTimeString()} |{" "}
      {new Date(Date.now()).toLocaleTimeString()} - {token}
      <h3>Change Password: {text}</h3>
      <form onSubmit={changePassword}>
        <label>
          Old
          <input
            type="password"
            value={pass.password}
            onChange={({ target }) =>
              setPass(state => ({ ...state, password: target.value }))
            }
          />
        </label>
        <label>
          New
          <input
            type="password"
            value={pass.confirm}
            onChange={({ target }) =>
              setPass(state => ({ ...state, confirm: target.value }))
            }
          />
        </label>
        <button type="submit">Change Password</button>
      </form>
    </div>
  )
}
