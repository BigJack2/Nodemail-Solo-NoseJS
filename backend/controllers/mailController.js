import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });

  const mailData = {
    from: "Remitente",
    to: "Buhodemica@gmail.com",
    subject: "Correo Toxico enviado por el grupo Decoders",
    text: "Hola Profe",
  }

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return res.status(500).send(error.message);
    } else {
      //console.log("Email send");
      //return res.status(200).jsonp(req.body);
      return res.status(200).send({ message: "email send" });
    }
  })
};

export default { sendMail };