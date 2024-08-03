import nodemailer from "nodemailer"

export const initEmail = async () => {
  const acc = await nodemailer.createTestAccount()

  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: acc.user,
      pass: acc.pass
    }
  })
}

export const sendEmail = async ({
  transporter,
  from = "alexvyber@gmail.com",
  to = "alexvyber@gmail.com",
  subject = "Hello!",
  html = "<h1>Hello!!!!!!!!!!!!!!!!!!!!!!!!!</h1>"
}) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html
    })

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    console.log("🚀 ~ sendEmail ~ info", info)
  } catch (error) {
    console.error(error)
  }
}
