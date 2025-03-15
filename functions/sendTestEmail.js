require('dotenv').config();
const nodemailer = require('nodemailer');

// Netlify functions use exports.handler to define the endpoint http://localhost:8888/.netlify/functions/sendTestEmail
exports.handler = async (event, context) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST, //
      port: Number(process.env.REACT_AWS_SES_PORT), // 465 for SSL
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465, // true for port 465
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER, // Your generated SMTP username
        pass: process.env.REACT_AWS_SES_SMTP_PASS, // Your generated SMTP password
      },
    }); // create a transporter object using AWS SES SMTP settings from environment variables

    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL,
      to: process.env.REACT_RECIPIENT_TEST_EMAIL,
      subject: 'Test Email from Netlify Function using AWS SES',
      text: 'Hello, this is a test email sent using Amazon SES and nodemailer from a Netlify Function.',
      html: '<p>Hello, this is a <strong>test email</strong> sent using Amazon SES and nodemailer from a Netlify Function.</p>',
    }; // define the email options

    let info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Test email sent successfully!',
        info: info,
      }),
    }; // send the email
  } catch (error) {
    console.error('Error sending email:', error);
    const statusCode = typeof error.code === 'number' ? error.code : 500;
    return {
      statusCode: statusCode,
      body: JSON.stringify({
        message: 'Failed to send test email.',
        error: error.message,
      }),
    };
  }
};
