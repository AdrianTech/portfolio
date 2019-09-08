const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4444;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/sendMail", async (req, res) => {
   res.set("x-powered-by", false);
   const { name, getContact, message } = req.body;
   if (name.trim().length < 2 || message.trim().length < 10) return res.status(400).json("Something went wrong");
   else {
      const mail = `
      <h2>Od: <span style="color:#0267a6; font-size: 19px;">${name}</span></h2>
      <h2>Kontakt: <span style="color:#0267a6; font-size: 19px;">${getContact}</span></h2>
      <h2>
      Wiadomość: <br/>
      <span style="color:#060f6b; font-size: 17px; font-family: Candara">${message}</span>
      
      </h2>
   `;

      let transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: 587,
         secure: false,
         auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
         }
      });
      let info = await transporter.sendMail({
         from: process.env.SET_FROM,
         to: process.env.SET_TO,
         subject: "Wiadomość",
         text: "Nowa Wiadomość",
         html: mail
      });
      console.log("Message sent: %s", info.messageId);
      res.status(200).json("Ok");
   }
});

app.listen(port);
