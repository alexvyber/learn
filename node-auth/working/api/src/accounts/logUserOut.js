import jwt from "jsonwebtoken"

const { ROOT_DOMAIN, JWT_SIGNATURE: JWTSignature } = process.env

export async function logUserOut(req, res) {
  try {
    console.log(req.cookies)
    console.log(res.cookies)
    const { refreshToken } = req.cookies

    if (!refreshToken) {
      throw new Error("No refresh token provided")
    }

    const { session } = await import("../session/session.js")

    // Decode refresh token
    const { sessionToken } = jwt.verify(refreshToken, JWTSignature)

    // Delete database record for session
    await session.deleteOne({ sessionToken })

    // Remove Cookies
    res
      .clearCookie("refreshToken", {
        path: "/",
        domain: ROOT_DOMAIN,
        httpOnly: true,
        secure: true
      })
      .clearCookie("accessToken", {
        path: "/",
        domain: ROOT_DOMAIN,
        httpOnly: true,
        secure: true
      })
  } catch (e) {
    console.error(e)
    res.clearCookie("refreshToken").clearCookie("accessToken") // ???
  }
}
