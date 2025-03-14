import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
} from '@react-email/components';

export const OrderConfirmation = ({
  guestName = 'Guest',
  tourName = 'Sample Tour',
  startDate = 'N/A',
  endDate = 'N/A',
  totalTrans = '$0',
  orderDate = 'N/A',
  numberOfGuests = 0,
}) => {
  return (
    <Html>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
        />
        <style>{`
          /* Additional inline CSS or resets if you need them */
        `}</style>
      </Head>
      <Preview>Your order has been confirmed!</Preview>
      <Body style={bodyStyle}>
        <Section style={zeroPaddingStyle}>
          <Img
            src="https://cdn.shelbybourbontours.com/emails/order_confirm_text02.png"
            alt="Shelby Bourbon Tours Top Banner"
            style={bannerImgStyle}
          />
        </Section>
        <Container style={outerContainerStyle}>
          <Section style={headerStyle}>
            <Text style={headerTextStyle}>Shelby Bourbon Tours</Text>
          </Section>
          <Section style={contentSectionStyle}>
            <Text style={headingStyle}>Order Confirmation</Text>
            <Text style={normalTextStyle}>Hi {guestName},</Text>
            <Text style={normalTextStyle}>
              Thank you for booking <strong>{tourName}</strong>.
            </Text>
            <Text style={normalTextStyle}>
              <strong>Order Date:</strong> {orderDate}
            </Text>
            <Text style={normalTextStyle}>
              <strong>Tour Dates:</strong> {startDate} - {endDate}
            </Text>
            <Text style={normalTextStyle}>
              <strong>Number of Guests:</strong> {numberOfGuests}
            </Text>
            <Text style={normalTextStyle}>
              <strong>Transportation Cost:</strong> {totalTrans}
            </Text>
            <Text style={normalTextStyle}>
              If you have any questions, feel free to reply to
              shelbybourbontours@gmail.com.
            </Text>
            <Text style={normalTextStyle}>Cheers,</Text>
            <Text style={normalTextStyle}>Shelby Bourbon Tours</Text>
          </Section>
        </Container>
        <Section style={zeroPaddingStyle}>
          <Img
            src="https://cdn.shelbybourbontours.com/emails/email_custom_tour_logo.png"
            alt="Shelby Bourbon Tours Bottom Banner"
            style={bannerImgStyle}
          />
        </Section>
      </Body>
    </Html>
  );
};

export default OrderConfirmation;

// ==================
// Inline Styles
// ==================

const bodyStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif',
};

const zeroPaddingStyle = {
  margin: 0,
  padding: 0,
};

const bannerImgStyle = {
  display: 'block',
  width: '100%',
  margin: 0,
  padding: 0,
};

const outerContainerStyle = {
  margin: '40px auto',
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '10px',
  borderBottom: '1px solid #ddd',
  marginBottom: '20px',
};

const headerTextStyle = {
  fontSize: '14px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: 0,
};

const contentSectionStyle = {
  padding: '0 20px',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const normalTextStyle = {
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
  color: '#555',
};
