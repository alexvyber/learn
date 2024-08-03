import crypto from "node:crypto"
const { JWTSignature } = process.env

const { ROOT_DOMAIN } = process.env

export const createResetToken = (email, expirationTimestamps) => {
  // Create Auth string with JWT signature and email
  const authString = `${JWTSignature}:${email}:${expirationTimestamps}`
  return crypto.createHash("sha256").update(authString).digest("hex")
}

export const createResetPasswordLink = async email => {
  try {
    // encode email as url string
    const URIencodedEmail = encodeURIComponent(email)

    // create timestamps
    const expirationTimestamps = Date.now() + 1000 * 60 * 60 * 1

    //create token
    const token = createResetToken(email, expirationTimestamps)

    // return link for verificatio
    return `https://${ROOT_DOMAIN}/reset/${URIencodedEmail}/${expirationTimestamps}/${token}`
  } catch (error) {
    console.error(error)
  }
}

export const createResetLink = async email => {
  const { user: users } = await import("../user/user.js")

  try {
    const user = await users.findOne({
      "email.address": email
    })

    if (!user) {
      throw new Error("No user found")
    }

    return createResetPasswordLink(email)
  } catch (e) {
    console.error(e)
    return ""
  }
}

const validateExpTimestamp = expirationTimestamp => {
  // One hour in milliseconds
  const expirationTimeLinit = 60 * 60 * 1000 * 1

  // if now is biggger than the expiration date, return false: we're late
  if (expirationTimestamp - Date.now() <= 0) return false

  // in now + expirationTimeLinit is less than the expiration date, return false: we're too early
  if (Date.now() + expirationTimeLinit < expirationTimestamp) return false

  // we're right in time
  return true
}

export async function validateResetEmail(token, email, expTimestamp) {
  try {
    // Create a hash aka token
    const resetToken = createResetToken(email, expTimestamp)

    // Compare hash with token
    const isValid = resetToken === token

    // Time is not expired
    const isTimestampValid = validateExpTimestamp(expTimestamp)

    console.log("🚀 ~ validateResetEmail ~ isTimestampValid", isTimestampValid)

    return isValid && isTimestampValid
  } catch (e) {
    console.log("e", e)
    return false
  }
}
