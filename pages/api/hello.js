// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { full_name, email, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'chbilalc627@gmail.com', // Replace with your Gmail address
        pass: 'BilalGmail.Com', // Replace with your Gmail password or App Password (recommended)
      },
    });

    // Email options
    let mailOptions = {
      from: email, // Sender's email
      to: 'chbilal@gmail.com', // Your Gmail address to receive the message
      subject: `New Contact Form Submission from ${full_name}`,
      text: `
        Name: ${full_name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
