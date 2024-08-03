import { ObjectId } from "mongodb"
import jwt from "jsonwebtoken"

import { createTokens } from "./tokens.js"
import { createSession } from "./session.js"

const JWTSignature = process.env.JWT_SIGNATURE
const { ROOT_DOMAIN } = process.env

export async function getUserFromCookies(req, res) {
  try {
    const { accessToken } = req.cookies
    // Erly error if no access token provided
    if (!accessToken) {
      throw new Error("No access token provided")
    }

    const { user: User } = await import("../user/user.js")
    const { userId } = jwt.verify(accessToken, JWTSignature)

    const user = User.findOne({
      _id: ObjectId(userId)
    })

    // Error if can't load user from DB
    if (!user) {
      throw new Error("Can not load the user")
    }

    // ???: Is next right?
    const { refreshToken } = req.cookies

    const { session: Session } = await import("../session/session.js")
    const { sessionToken } = jwt.verify(refreshToken, JWTSignature)
    const session = await Session.findOne({ sessionToken })

    // If no session in the DB create one
    if (!session) {
      const connectionInformation = {
        ip: req.ip,
        userAgent: req.headers["user-agent"]
      }

      // Create Session
      const sessionToken = await createSession(user._id, connectionInformation)

      await refreshTokens(sessionToken, user._id, res)
    }

    // If session isn't valid recreate
    if (!session.valid) {
      await session.deleteOne({ sessionToken })

      const sessionToken = await createSession(user._id, connectionInformation)

      await refreshTokens(sessionToken, user._id, res)
    }

    return user
  } catch (e) {
    // console.error(e)

    const { refreshToken } = req.cookies

    const { session } = await import("../session/session.js")

    const { sessionToken } = jwt.verify(refreshToken, JWTSignature)

    const currentSession = await session.findOne({ sessionToken })

    console.log("🚀 ~ getUserFromCookies ~ currentSession", currentSession)

    try {
      if (currentSession.valid) {
        const { user } = await import("../user/user.js")

        const currentUser = await user.findOne({
          _id: ObjectId(currentSession.userId)
        })

        console.log(
          "🚀 ~ getUserFromCookies ~ currentUser!!!!!!!!!!!!!!",
          currentUser
        )

        await refreshTokens(sessionToken, currentUser._id, res)

        return currentUser
      }
    } catch (e) {
      console.error("🚀 ~ getUserFromCookies ~ e", e)
    }
  }
}

export async function refreshTokens(sessionToken, userId, res) {
  // Create JWTs
  const { accessToken, refreshToken } = await createTokens(sessionToken, userId)

  // Set Coockies
  res
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      domain: ROOT_DOMAIN,
      httpOnly: true,
      secure: true,
      expires: new Date().setDate(new Date().getDate() + 30) // expires in 30 days // ???: is there better way to do that
    })
    .setCookie("accessToken", accessToken, {
      path: "/",
      domain: ROOT_DOMAIN,
      secure: true,
      httpOnly: true
    })
}

import bcrypt from "bcryptjs"

const { genSalt, hash } = bcrypt

export async function changePassword(userId, newPassword) {
  try {
    const { user } = await import("../user/user.js")

    // generate salt
    const salt = await genSalt(10)
    // console.log("🚀 ~ registerUser ~ salt", salt)

    // hash with salt
    const hashedPassword = await hash(newPassword, salt)
    // console.log("🚀 ~ registerUser ~ hashedPassword", hashedPassword)

    return user.updateOne(
      {
        _id: userId
      },
      {
        $set: {
          hashedPassword // FIXME: plain text password
        }
      }
    )
  } catch (error) {}
}
