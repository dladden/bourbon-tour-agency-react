// /functions/custom-order-submission.js
require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    // 1. Parse incoming data
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
    } = JSON.parse(event.body);

    // 2. Format date if it's an array
    // If your frontend sends "date" as an array of strings
    // e.g., ["2025-03-01", "2025-03-02"]
    let formattedDate = [];
    if (Array.isArray(date)) {
      formattedDate = date.map((str) => new Date(str).toLocaleDateString());
    } else {
      // if date is just a single string, handle it differently:
      formattedDate = [new Date(date).toLocaleDateString()];
    }

    // 3. Build subject
    const subjectLine = `CUSTOM TOUR REQUEST FROM: ${guest_name}`;

    // 4. Build the HTML body (simple example)
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

    // 5. Configure nodemailer with AWS SES
    const transporter = nodemailer.createTransport({
      host: process.env.REACT_AWS_SES_HOST, // e.g. email-smtp.us-east-2.amazonaws.com
      port: Number(process.env.REACT_AWS_SES_PORT), // e.g. 465 for SSL
      secure: Number(process.env.REACT_AWS_SES_PORT) === 465, // true if 465
      auth: {
        user: process.env.REACT_AWS_SES_SMTP_USER,
        pass: process.env.REACT_AWS_SES_SMTP_PASS,
      },
    });

    // 6. Define mail options
    const mailOptions = {
      from: process.env.REACT_NO_REPLY_EMAIL, // e.g. no-reply@domain.com
      to: process.env.REACT_RECIPIENT_TEST_EMAIL, // or your actual "owner" email
      subject: subjectLine,
      html: emailHtml,
    };

    // 7. Send the email
    const info = await transporter.sendMail(mailOptions);

    // 8. Return success
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Owner notification sent successfully!',
        info,
      }),
    };
  } catch (error) {
    console.error('Error sending email to owner:', error);

    // Fallback to 500 if error.code is not numeric
    const statusCode = typeof error.code === 'number' ? error.code : 500;
    return {
      statusCode: statusCode,
      body: JSON.stringify({
        message: 'Failed to send owner notification.',
        error: error.message,
      }),
    };
  }
};
