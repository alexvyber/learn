import { createSession } from "./session.js"
import { refreshTokens } from "./user.js"

export async function logUserIn(userId, req, res) {
  const connectionInformation = {
    ip: req.ip,
    userAgent: req.headers["user-agent"]
  }

  // Create Session
  const sessionToken = await createSession(userId, connectionInformation)

  await refreshTokens(sessionToken, userId, res)
}
