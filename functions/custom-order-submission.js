require('dotenv').config();
const nodemailer = require('nodemailer');

const MAX_REQUESTS_PER_WINDOW = 5;//rate limiting allow 5 per 10 min per IP
const WINDOW_MS = 10 * 60 * 1000;//rate limiting 10 minutes
const rateLimitStore = {};//rate limiting inmemory resets on function cold start

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitStore[ip];
  if (!entry) {
    rateLimitStore[ip] = { count: 1, windowStart: now };
    return false;
  }
  if (now - entry.windowStart > WINDOW_MS) {
    rateLimitStore[ip] = { count: 1, windowStart: now };
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

function looksFakeName(name) {
  if (typeof name !== 'string') return true;
  if (!/^[a-zA-Z\s]+$/.test(name)) return true;
  const words = name.trim().split(/\s+/);
  if (words.length < 2) return true;
  if (words.some(w => w.length < 4)) return true;
  if (!/[aeiouAEIOU]/.test(name)) return true;
  return false;
} //abuse heuristics: require 2+ words at least 4 chars each some vowels only letters/spaces
function looksFakeTourName(tour) {
  if (typeof tour !== 'string') return true;
  if (tour.length < 4) return true;
  if (/^[A-Z0-9]+$/.test(tour)) return true;
  if (!/[aeiouAEIOU]/.test(tour)) return true;
  return false;
}//no ALLuppercase no random looking strings at least 6 chars at least one space
function looksFakeEmail(email) {
  // Must contain @ and .
  if (typeof email !== 'string') return true;
  if (!email.includes('@') || !email.includes('.')) return true;
  return false;
}
function looksFakeComment(comment) {
  // Must be at least 12 chars, has at least one space and a vowell
  if (typeof comment !== 'string') return true;
  if (comment.length < 12) return true;
  if (!/[\s]/.test(comment)) return true;
  if (!/[aeiouAEIOU]/.test(comment)) return true;
  return false;
}

exports.handler = async (event, context) => {
  if (event.httpMethod && event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const ip =
    (event.headers && (event.headers['x-forwarded-for'] || event.headers['client-ip'])) ||
    'unknown';
  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many requests, try again later.' }),
    };
  }//basic rate limiting per IP

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'Malformed request.' };
  }
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
  } = body;

  if (
    looksFakeName(guest_name) ||
    looksFakeTourName(tour_name) ||
    looksFakeEmail(guest_email) ||
    looksFakeComment(guest_comment)
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Submission rejected by bot filter.' }),
    };
  }

  let formattedDate = [];
  if (Array.isArray(date)) {
    formattedDate = date.map((str) => new Date(str).toLocaleDateString());
  } else {
    formattedDate = [new Date(date).toLocaleDateString()];
  }
  const subjectLine = `CUSTOM TOUR REQUEST FROM: ${guest_name}`;
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
    port: Number(process.env.REACT_AWS_SES_PORT),
    secure: Number(process.env.REACT_AWS_SES_PORT) === 465,
    auth: {
      user: process.env.REACT_AWS_SES_SMTP_USER,
      pass: process.env.REACT_AWS_SES_SMTP_PASS,
    },
  });
  const mailOptions = {
    from: process.env.REACT_NO_REPLY_EMAIL,
    to: process.env.REACT_RECIPIENT_OWNER_EMAIL,
    subject: subjectLine,
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
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
    };
  }
};