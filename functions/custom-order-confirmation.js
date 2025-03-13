const React = require('react');
require('dotenv').config();
const { render } = require('@react-email/render'); // Renders React components to HTML
const nodemailer = require('nodemailer');

// Import your React Email component
const OrderConfirmation = require('../dist/emails/OrderConfirmation').default;

exports.handler = async (event, context) => {
  try {
    // 1. Parse request body (the data sent from your React app)
    const { guest_email, tour_name, guest_name, date, mainTrans, guests } =
      JSON.parse(event.body);

    // 2. Format dates
    const today = new Date().toLocaleDateString();
    const startDate = new Date(date[0]).toLocaleDateString();
    const endDate = new Date(date[1]).toLocaleDateString();

    // 3. Render the React Email component to HTML
    const emailHtml = await render(
      React.createElement(OrderConfirmation, {
        guestName: guest_name,
        tourName: tour_name,
        orderDate: today,
        startDate,
        endDate,
        totalTrans: mainTrans,
        numberOfGuests: guests,
      })
    );
    console.log('Is this a promise?', emailHtml instanceof Promise);
    console.log('Type of emailHtml:', typeof emailHtml);

    // 4. Configure nodemailer with your AWS SES SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST,
      port: Number(process.env.REACT_AWS_SES_PORT),
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465, // true for SSL on port 465
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER,
        pass: process.env.REACT_AWS_SES_SMTP_PASS,
      },
    });

    // 5. Define the mail options
    const orderSubject = `Custom Order Submission for: ${tour_name}`;
    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL, // e.g. no-reply@yourdomain.com
      to: guest_email,
      subject: orderSubject,
      html: emailHtml,
    };

    // 6. Send the email
    let info = await transporter.sendMail(mailOptions);

    // 7. Return success
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Order confirmation email sent successfully!',
        info,
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);

    // Fallback to 500 if error.code is not a number
    const statusCode = typeof error.code === 'number' ? error.code : 500;
    return {
      statusCode,
      body: JSON.stringify({
        message: 'Failed to send order confirmation email.',
        error: error.message,
      }),
    };
  }
};
