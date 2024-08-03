import bcrypt from "bcryptjs"
const { compare } = bcrypt

export async function authorizeUser(email, password) {
  // Import user collection
  const { user } = await import("../user/user.js")

  // Look up user
  const userData = await user.findOne({
    "email.address": email
  })
  // console.log("🚀 ~ authorizeUser ~ userData", userData)

  // Compare password with one in database
  const isAuthorized = await compare(password, userData.hashedPassword)

  // console.log("🚀 ~ authorizeUser ~ isAuthorized", isAuthorized)
  // console.log("🚀 ~ authorizeUser ~ userData._id", userData._id)

  // Return boolean of if password is correct
  return { isAuthorized, userId: userData._id }
}
