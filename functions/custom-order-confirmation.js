const React = require('react');
require('dotenv').config();
const { render } = require('@react-email/render');
const nodemailer = require('nodemailer');
/**
 * Sends a confirmation email to the CUSTOMER
 */
const OrderConfirmation = require('../dist/emails/OrderConfirmation').default; //importing your React Email component

exports.handler = async (event, context) => {
  try {
    const { guest_email, tour_name, guest_name, date, mainTrans, guests } =
      JSON.parse(event.body); // parsing request body (the data sent from your React app)

    const today = new Date().toLocaleDateString();
    const startDate = new Date(date[0]).toLocaleDateString();
    const endDate = new Date(date[1]).toLocaleDateString();

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
    ); // rendering the React Email component to HTML
    console.log('Is this a promise?', emailHtml instanceof Promise);
    console.log('Type of emailHtml:', typeof emailHtml);

    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST,
      port: Number(process.env.REACT_AWS_SES_PORT),
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465, // true for SSL on port 465
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER,
        pass: process.env.REACT_AWS_SES_SMTP_PASS,
      },
    }); //configure nodemailer with your AWS SES SMTP credentials

    const orderSubject = `Custom Order Submission for: ${tour_name}`;
    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL, // e.g. no-reply@yourdomain.com
      to: guest_email,
      subject: orderSubject,
      html: emailHtml,
    }; // define the mail options

    let info = await transporter.sendMail(mailOptions); // send the email

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Order confirmation email sent successfully!',
        info,
      }),
    }; // return success
  } catch (error) {
    console.error('Error sending email:', error);

    const statusCode = typeof error.code === 'number' ? error.code : 500;
    return {
      statusCode,
      body: JSON.stringify({
        message: 'Failed to send order confirmation email.',
        error: error.message,
      }),
    };
  } // fallback to 500 if error.code is not a number
};
