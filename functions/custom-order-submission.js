require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const {
      tour_name,
      guest_name,
      guest_email,
      phone_number,
      distill,
      reservation,
      guest_comment,
      date,
      mainTrans,
      guests,
      checked,
    } = JSON.parse(event.body); // parsing incoming data

    let formattedDate = [];
    if (Array.isArray(date)) {
      formattedDate = date.map((str) => new Date(str).toLocaleDateString());
    } else {
      // if date is just a single string, handle it differently:
      formattedDate = [new Date(date).toLocaleDateString()]; // e.g., ["2025-03-01", "2025-03-02"]
    }

    const subjectLine = `CUSTOM TOUR REQUEST FROM: ${guest_name}`; // email subject

    const emailHtml = `
      <h1>Custom Tour Request</h1>
      <p><strong>Tour Name:</strong> ${tour_name}</p>
      <p><strong>Guest Name:</strong> ${guest_name}</p>
      <p><strong>Guest Email:</strong> ${guest_email}</p>
      <p><strong>Phone Number:</strong> ${phone_number}</p>
      <p><strong>Dates:</strong> ${formattedDate.join(', ')}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Transportation:</strong> ${mainTrans}</p>
      <p><strong>Distill:</strong> ${distill}</p>
      <p><strong>Reservation:</strong> ${reservation}</p>
      <p><strong>Comments:</strong> ${guest_comment}</p>
      <p><strong>Checked:</strong> ${checked}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST,
      port: Number(process.env.REACT_AWS_SES_PORT), //465 for SSL
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465, // true if 465
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER,
        pass: process.env.REACT_AWS_SES_SMTP_PASS,
      },
    }); // configuring nodemailer with AWS SES

    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL, // e.g. no-reply@domain.com
      to: process.env.REACT_RECIPIENT_OWNER_EMAIL, // or your actual "owner" email
      subject: subjectLine,
      html: emailHtml,
    }; // define mail options

    const info = await transporter.sendMail(mailOptions); // send the email

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
      statusCode: statusCode,
      body: JSON.stringify({
        message: 'Failed to send owner notification.',
        error: error.message,
      }),
    }; // fallback to 500 if error.code is not numeric
  }
};
