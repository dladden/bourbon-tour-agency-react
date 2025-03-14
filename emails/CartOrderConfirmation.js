import React from 'react';
import {
  Html,
  Head,
  Body,
  Preview,
  Container,
  Section,
  Text,
  Img,
} from '@react-email/components';

export const CartOrderConfirmation = ({
  cartItems = [],
  totalFormatted = '$0',
  userName = '',
  userEmail = '',
  images = [],
  dateId = '',
}) => {
  return (
    <Html>
      <Head />
      <Preview>Your tour order is confirmed!</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={zeroPaddingStyle}>
            <Img
              src="https://cdn.shelbybourbontours.com/emails/order_confirm_text02.png"
              alt="Shelby Bourbon Tours Top Banner"
              style={bannerImgStyle}
            />
          </Section>
          {/* Title Section */}
          <Section style={sectionStyle}>
            <Text style={headingStyle}>Shelby Bourbon Tours</Text>
            <Text style={subheadingStyle}>Order Confirmation</Text>
          </Section>

          {/* Intro Section */}
          <Section style={sectionStyle}>
            <Text>Hi {userName},</Text>
            <Text>Thank you for booking with Shelby Bourbon Tours!</Text>
            <Text>
              <strong>Order Date:</strong> {dateId}
            </Text>
          </Section>

          {/* Items Section */}
          <Section style={sectionStyle}>
            <Text style={sectionTitleStyle}>Your Selected Tours:</Text>

            {cartItems.map((item, index) => (
              <Section
                key={index}
                style={{
                  ...sectionStyle,
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  padding: '10px',
                  marginBottom: '15px',
                }}
              >
                <Text style={itemTitleStyle}>
                  <strong>Tour Name:</strong> {item.name}
                </Text>
                <Text>
                  <strong>Number of Guests:</strong> {item.guests}
                </Text>
                <Text>
                  <strong>Transport:</strong> {item.trans}
                </Text>
                {/* If each item has a corresponding image */}
                {images[index] && (
                  <Img
                    src={images[index]}
                    alt={`Tour image for ${item.name}`}
                    style={itemImageStyle}
                  />
                )}
              </Section>
            ))}
          </Section>

          <Section style={sectionStyle}>
            <Text>
              <strong>Total Cost:</strong> {totalFormatted}
            </Text>
          </Section>

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              If you have any questions, feel free to reply to
              shelbybourbontours@gmail.com.
            </Text>
            <Text style={footerTextStyle}>Cheers,</Text>
            <Text style={footerTextStyle}>Shelby Bourbon Tours</Text>
          </Section>
          <Section style={zeroPaddingStyle}>
            <Img
              src="https://cdn.shelbybourbontours.com/emails/email_tour_logo.png"
              alt="Shelby Bourbon Tours Bottom Banner"
              style={bannerImgStyle}
            />
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CartOrderConfirmation;

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

const containerStyle = {
  margin: '40px auto',
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const sectionStyle = {
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const subheadingStyle = {
  fontSize: '16px',
  marginBottom: '10px',
  fontWeight: 'bold',
  color: '#555',
};

const sectionTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const itemTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const itemImageStyle = {
  display: 'block',
  marginTop: '8px',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '100%',
};

const footerStyle = {
  marginTop: '20px',
  borderTop: '1px solid #eee',
  paddingTop: '10px',
};

const footerTextStyle = {
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '8px',
  color: '#555',
};
