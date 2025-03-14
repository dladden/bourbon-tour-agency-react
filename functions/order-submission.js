require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { cart, total_amount, tourUser } = JSON.parse(event.body); // parsing incoming data

    const ids = cart.map((item) => item.id);
    const subjectLine = `ORDER CONFIRMED: ${ids.join(', ')}`;

    const userFullName = tourUser.name || 'N/A';
    const userEmail = tourUser.email || 'N/A';
    const userPicture = tourUser.picture || '';
    const userNickname = tourUser.nickname || '';
    const userFamilyName = tourUser.family_name || '';
    const userGivenName = tourUser.given_name || '';
    const phoneNumber = tourUser?.phone || 'N/A';

    const totalDollars = (Number(total_amount) / 100).toFixed(2); // converting total_amount from cents to a dollar string

    const cartTableRows = cart
      .map((item) => {
        const dateStr = item.date
          ? new Date(item.date).toLocaleDateString()
          : 'N/A';
        const priceDollars = (item.price / 100).toFixed(2);
        return `
          <tr>
            <td>${item.name || 'N/A'}</td>
            <td>${item.guests || 0}</td>
            <td>${item.trans || 'N/A'}</td>
            <td>${dateStr}</td>
            <td><a href="${item.image}" target="_blank">View Image</a></td>
            <td>$${priceDollars}</td>
          </tr>
        `;
      })
      .join(''); // building an HTML table from the cart array

    const emailHtml = `
      <h1 style="margin-bottom: 0;">Order Confirmed</h1>
      <hr style="margin-top: 5px;" />

      <h3>Booking Details:</h3>
      <h2>Name: ${userFullName || 'N/A'}</h2>
      <h2>Email: ${userEmail || 'N/A'}</h2>
      <h2>Phone: ${phoneNumber}</h2>

      <h3>Cart Items</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Guests</th>
            <th>Transport</th>
            <th>Date</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          ${cartTableRows}
        </tbody>
      </table>

      <h3>Full User Info</h3>
      <ul>
        <li><strong>Full Name:</strong> ${userFullName}</li>
        <li><strong>Email:</strong> ${userEmail}</li>
        <li><strong>Nickname:</strong> ${userNickname}</li>
        <li><strong>Family Name:</strong> ${userFamilyName}</li>
        <li><strong>Given Name:</strong> ${userGivenName}</li>
        <li><strong>Phone:</strong> ${phoneNumber}</li>
        <li><strong>Picture:</strong> ${
          userPicture
            ? `<a href="${userPicture}" target="_blank">View Picture</a>`
            : 'N/A'
        }</li>
      </ul>
    `;

    // 4. Nodemailer + AWS SES
    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST, // e.g. email-smtp.us-east-2.amazonaws.com
      port: Number(process.env.REACT_AWS_SES_PORT), // 465, for SSL
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465,
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER,
        pass: process.env.REACT_AWS_SES_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL, // e.g. no-reply@domain.com
      to: process.env.REACT_RECIPIENT_OWNER_EMAIL,
      subject: subjectLine,
      html: emailHtml,
    }; // defining mail options

    const info = await transporter.sendMail(mailOptions); // sending

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Owner notification sent successfully!',
        info,
      }),
    }; // return success
  } catch (error) {
    console.error('Error sending email to owner:', error);
    const statusCode = typeof error.code === 'number' ? error.code : 500;
    return {
      statusCode,
      body: JSON.stringify({
        message: 'Failed to send owner notification.',
        error: error.message,
      }),
    };
  }
};
