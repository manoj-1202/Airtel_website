const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/send-contact-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ttsapplications2025@gmail.com", // Gmail id
        pass: "djor ksrg pkzt zznd", //   App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "manojpolevault1202@gmail.com", // Where you want to receive the form data
    subject: `New Contact Message from ${name}`,
    html: `
      <h3>Customer Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error("Error sending contact email:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




