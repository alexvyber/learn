import bcrypt from "bcryptjs"

const { genSalt, hash } = bcrypt

export async function registerUser(email, password) {
  const { user } = await import("../user/user.js")

  // generate salt
  const salt = await genSalt(10)
  // console.log("🚀 ~ registerUser ~ salt", salt)

  // hash with salt
  const hashedPassword = await hash(password, salt)
  // console.log("🚀 ~ registerUser ~ hashedPassword", hashedPassword)

  // Store in database
  const res = await user.insertOne({
    email: {
      address: email,
      verified: false
    },
    hashedPassword
  })

  // Return user from database
  return res.insertedId
}
