import crypto from "node:crypto"
const { JWTSignature } = process.env

export const createVerifyEmailToken = async email => {
  try {
    // Create Auth string with JWT signature and email
    const authString = `${JWTSignature}:${email}`
    return crypto.createHash("sha256").update(authString).digest("hex")
  } catch (error) {
    console.error(error)
  }
}

export const createVerifyEmailLink = async (email, verifyUrl) => {
  try {
    //create token
    const emailToken = await createVerifyEmailToken(email)

    // encode email as url string
    const URIencodedEmail = encodeURIComponent(email)

    // return link for verificatio
    return `${verifyUrl}/${URIencodedEmail}/${emailToken}`
  } catch (error) {
    console.error(error)
  }
}

export const validateVerifyEmail = async (email, token) => {
  //create token
  const emailToken = await createVerifyEmailToken(email)

  // compare hash with token
  const isValid = emailToken === token

  if (isValid) {
    const { user } = await import("../user/user.js")

    try {
      const some = await user.updateOne(
        {
          "email.address": email
        },
        {
          $set: { "email.verified": true }
        }
      )
      console.log("🚀 ~ validateVerifyEmail ~ some", some)
    } catch (e) {
      console.error(e)
    }

    return true
  } else {
    return false
  }
}
