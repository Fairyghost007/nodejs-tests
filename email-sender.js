const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "email1@gmail.com", 
    pass: "*********k",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Your Name" <biranenini6762@gmail.com>',
    to: "email2@example.com",
    subject: "Hello",
    text: "Hello",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

