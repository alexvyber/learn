import { useState } from "react"

import "./App.css"

function App() {
  const [reg, setReg] = useState({
    email: "",
    password: ""
  })

  const [log, setLog] = useState({
    email: "",
    password: ""
  })

  const [pass, setPass] = useState({
    oldPassword: "",
    newPassword: ""
  })

  const [email, setEmail] = useState("")

  const logout = async () => {
    try {
      const res = await fetch("https://api.dev.local/api/logout", {
        method: "POST",
        credentials: "include"
      })

      console.log(await res.json())
    } catch (e) {
      console.error(e)
    }
  }

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await fetch("https://api.dev.local/api/register", {
        method: "POST",
        body: JSON.stringify(reg),
        credentials: "include",
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

      console.log("🚀 ~ register ~ res", res)
    } catch (e) {
      console.error(e)
    }
  }

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      // Submit form
      const res = await fetch("https://api.dev.local/api/authorize", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(log),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

      console.log("🚀 ~ login ~ res", res)
    } catch (e) {
      console.error(e)
    }
  }

  const changePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      // Submit form
      const res = await fetch("https://api.dev.local/api/change-password", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(pass),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

      console.log("🚀 ~ changePassword ~ res", res)
    } catch (e) {
      console.error(e)
    }
  }

  const forgotPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // Submit form
      const res = await fetch("https://api.dev.local/api/reset-password", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ email: email }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

      console.log("🚀 ~ forgotPassword ~ res", await res.json())
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="App">
      <h3>Register Form</h3>
      <form onSubmit={register}>
        <input
          type="email"
          name="email"
          value={reg.email}
          onChange={({ target }) =>
            setReg(state => ({ ...state, email: target.value }))
          }
        />
        <input
          type="password"
          name="password"
          value={reg.password}
          onChange={({ target }) =>
            setReg(state => ({ ...state, password: target.value }))
          }
        />
        <button type="submit">Register</button>
      </form>

      <br />
      <hr />
      <br />

      <h3>Login Form</h3>
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          value={log.email}
          onChange={({ target }) =>
            setLog(state => ({ ...state, email: target.value }))
          }
        />
        <input
          type="password"
          name="password"
          value={log.password}
          onChange={({ target }) =>
            setLog(state => ({ ...state, password: target.value }))
          }
        />
        <button type="submit">Login</button>
      </form>

      <br />
      <hr />
      <br />

      <h3>Change Password</h3>
      <form onSubmit={changePassword}>
        <input
          type="password"
          // name="password"
          value={pass.oldPassword}
          onChange={({ target }) =>
            setPass(state => ({ ...state, oldPassword: target.value }))
          }
        />
        <input
          type="password"
          // name="password"
          value={pass.newPassword}
          onChange={({ target }) =>
            setPass(state => ({ ...state, newPassword: target.value }))
          }
        />
        <button type="submit">Change Password</button>
      </form>

      <br />
      <hr />
      <br />

      <h3>Forgot Password</h3>
      <form onSubmit={forgotPassword}>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>

      <br />
      <hr />
      <br />

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default App
