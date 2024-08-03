import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Verify = () => {
  const { email, verificationToken } = useParams()
  const navigate = useNavigate()

  const [verified, setVerified] = useState()

  console.log("🚀 ~ Verify ~ verified", verified)

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch("https://api.dev.local/verify", {
          method: "POST",
          body: JSON.stringify({
            email,
            verificationToken
          }),
          credentials: "include",
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })

        const { data } = await res.json()
        console.log("🚀 ~ verify ~ data", data)

        setVerified(data.verified)
      } catch (e) {
        console.error(e)
      }
    }

    const some = verify()
    console.log("🚀 ~ useEffect ~ some", some)
  }, [])

  if (verified === true) {
    navigate("/profile")
    // return <h3>Verified</h3>
  }

  if (verified === false) {
    return <h3>Not Verified</h3>
  }

  return (
    <h3>
      verify {email} - {verificationToken}
    </h3>
  )
}
