import "./env.js"
import { fastify } from "fastify"
import fastifyStatic from "fastify-static"
import fastifyCookie from "fastify-cookie"
import fastifyCors from "fastify-cors"

import path from "node:path"
import { fileURLToPath } from "url"
import { connectDb } from "./db.js"
import { registerUser } from "./accounts/register.js"
import { authorizeUser } from "./accounts/authorize.js"
import { logUserIn } from "./accounts/logUserIn.js"
import { changePassword, getUserFromCookies } from "./accounts/user.js"
import { logUserOut } from "./accounts/logUserOut.js"
import { initEmail, sendEmail } from "./mail/index.js"
import {
  createVerifyEmailLink,
  validateVerifyEmail
} from "./accounts/verify.js"
import { createResetLink, validateResetEmail } from "./accounts/reset.js"

// ESM specific features
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = fastify()

async function startApp() {
  try {
    const transporter = await initEmail()

    // await sendEmail({ transporter, from: "some@some.com" })

    app.register(fastifyCors, {
      origin: [/\.dev.local/, "https://dev.local"],
      credentials: true
    })

    app.register(fastifyCookie, {
      secret: process.env.COOKIE_SIGNATURE
    })

    app.register(fastifyStatic, {
      root: path.join(__dirname, "public")
    })

    app.get("/hello", {}, async (req, res) => {
      res.send({ msg: "World!" })
    })

    app.get("/katzen", {}, async (req, res) => {
      // Error if no access token
      if (!req.cookies.accessToken && !req.cookies.refreshToken) {
        res.send({
          data: {
            error: "No authorized user"
          }
        })
      }

      try {
        const user = await getUserFromCookies(req, res)
        console.log("🚀 ~ app.get ~ user", user)

        // Error if no user
        if (!user) {
          res.send({
            data: {
              error: "Something went wrong during authorization"
            }
          })
        }

        // Response with user
        res.send({
          data: {
            user: {
              _id: user._id,
              email: user.email.address
            }
          }
        })
      } catch (e) {
        console.error(e)
      }
    })

    app.post("/verify", {}, async (req, res) => {
      const { email, verificationToken } = req.body

      const isValid = await validateVerifyEmail(email, verificationToken)

      if (!isValid) {
        res.send({
          data: {
            verified: false
          }
        })
      }

      res.send({
        data: {
          verified: true
        }
      })
    })

    app.post("/api/reset-password", {}, async (req, res) => {
      const { email } = req.body

      try {
        const link = await createResetLink(email)

        await sendEmail({
          transporter,
          from: "some@some.com",
          to: email,
          subject: "Reset Link",
          html: `Reset link: <a href=${link}>${link}</a>`
        })

        return res.code(200).send()
      } catch (error) {
        console.error("🚀 ~ app.post ~ error", error)
      }
    })

    app.post("/api/set-new-password", {}, async (req, res) => {
      const { email, password, token, timestamps } = req.body

      try {
        const isValid = await validateResetEmail(token, email, timestamps)
        // console.log("🚀 ~ app.post ~ isValid", isValid)

        if (!isValid) return res.code(401).send("Reset failed")

        // Find User
        const { user } = await import("./user/user.js")
        const foundUser = await user.findOne({
          "email.address": email
        })

        if (!foundUser) return res.code(401).send("Reset failed")

        // Change password
        await changePassword(foundUser._id, password)

        // const updatedUser = await user.findOne({
        //   "email.address": email
        // })
        // console.log("🚀 ~ app.post ~ updatedUser", updatedUser.hashedPassword)

        return res.code(200).send({
          data: {
            updated: true
            // password: updatedUser.hashedPassword
          }
        })
      } catch (e) {
        console.error(e)
        return res.code(401).send()
      }
    })

    app.post("/api/change-password", {}, async (req, res) => {
      console.log(req.body)
      try {
        const user = await getUserFromCookies(req, res)

        const { isAuthorized, userId } = await authorizeUser(
          user.email.address,
          req.body.oldPassword
        )

        console.log("🚀 ~ app.post ~ isAuthorized", isAuthorized)
        if (isAuthorized) {
          await changePassword(userId, req.body.newPassword)
        }
        res.send({
          date: "Hello"
        })
      } catch (error) {
        res.send({
          date: "Guck"
        })
        console.error(error.message)
      }
    })

    app.post("/api/register", {}, async (req, res) => {
      if (req.cookies.accessToken || req.cookies.refreshToken) {
        res.code(400).send({
          data: {
            status: "FAILED",
            reason: "Already loged in"
          }
        })
      }

      const { email, password } = req.body

      try {
        const userId = registerUser(email, password)

        if (!userId) {
          throw new Error("Failed to register")
        }

        const emailVerificationLink = await createVerifyEmailLink(
          email,
          "https://dev.local/verify"
        )

        // await sendEmail({
        //   transporter,
        //   to: email,
        //   subject: "Verify your email",
        //   html: `verify: <a href=${emailVerificationLink}>${emailVerificationLink}</a>`
        // })

        res.send({
          data: {
            status: "SUCCESS",
            user: {
              userId
            }
          }
        })
      } catch (e) {
        console.error(e)
        res.code(400).send({
          data: {
            status: "FAILED"
          }
        })
      }
    })

    app.post("/api/authorize", {}, async (req, res) => {
      const { email, password } = req.body

      try {
        const { isAuthorized, userId } = await authorizeUser(email, password)
        console.log("🚀 ~ app.post ~ userId", userId)

        if (!isAuthorized) {
          throw new Error("User isn't autrized!") // TODO: handle later
        }

        await logUserIn(userId, req, res)
        res.send({ data: "some" })
      } catch (e) {
        console.error(e)
      }
    })

    app.post("/api/logout", {}, async (req, res) => {
      try {
        await logUserOut(req, res)

        res.send({
          data: "User Logged Out"
        })
      } catch (e) {
        console.error(e)
      }
    })

    await app.listen(4000)
    console.log("🚀 Server started on port: 4000")
  } catch (e) {
    console.error("root error: ", e)
  }
}

connectDb().then(() => {
  startApp()
})
