import { createTransport } from "nodemailer";

// Configure the email transporter (using Gmail as an example)
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_KEY,
  },
});

const send_mail = (to, subject, message) => {
  console.log("Here");
  transporter.sendMail(
    {
      from: "shahtirth.application.testing@gmail.com",
      to,
      subject,
      html: message,
    },
    (error, info) => {
      console.log(info);
      if (error) {
        return console.log(error);
      }
      console.log(`Email sent: ${to}`);
    }
  );
  console.log("Here");
};
export default send_mail;
