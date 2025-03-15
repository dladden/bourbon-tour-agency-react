const React = require('react');
require('dotenv').config();
const { render } = require('@react-email/render');
const nodemailer = require('nodemailer');
const CartOrderConfirmation =
  require('../dist/emails/CartOrderConfirmation').default;

exports.handler = async (event, context) => {
  try {
    const { cart, total_formatted, tourUser } = JSON.parse(event.body);

    const ids = cart.map((a) => a.id);
    const dates = cart.map((a) => a.date);
    const names = cart.map((a) => a.name);
    const guests = cart.map((a) => a.guests);
    const transports = cart.map((a) => a.trans);
    const images = cart.map((a) => a.image);

    const dateId = new Date(dates).toLocaleDateString(); // If there's only one date, or combining them

    const { email, name } = tourUser;

    const cartItems = cart.map((item) => ({
      name: item.name,
      guests: item.guests,
      trans: item.trans,
    })); // build simpler array for the email

    const emailHtml = await render(
      React.createElement(CartOrderConfirmation, {
        cartItems,
        totalFormatted: total_formatted,
        userName: name,
        userEmail: email,
        images, // array of image URLs
        dateId,
      })
    ); // render the React Email

    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST,
      port: Number(process.env.REACT_AWS_SES_PORT),
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465,
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER,
        pass: process.env.REACT_AWS_SES_SMTP_PASS,
      },
    }); // create transporter

    const subjectLine = `Order Confirmation: ${names.join(', ')}`;

    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL,
      to: email,
      subject: subjectLine,
      html: emailHtml,
    };

    let info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Order confirmation email sent successfully!',
        info,
      }),
    };
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
  }
};
