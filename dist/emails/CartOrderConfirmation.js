"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CartOrderConfirmation = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CartOrderConfirmation = ({
  cartItems = [],
  totalFormatted = '$0',
  userName = '',
  userEmail = '',
  images = [],
  dateId = ''
}) => {
  return /*#__PURE__*/_react.default.createElement(_components.Html, null, /*#__PURE__*/_react.default.createElement(_components.Head, null), /*#__PURE__*/_react.default.createElement(_components.Preview, null, "Your tour order is confirmed!"), /*#__PURE__*/_react.default.createElement(_components.Body, {
    style: bodyStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Container, {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: zeroPaddingStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Img, {
    src: "https://cdn.shelbybourbontours.com/emails/order_confirm_text02.png",
    alt: "Shelby Bourbon Tours Top Banner",
    style: bannerImgStyle
  })), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: headingStyle
  }, "Shelby Bourbon Tours"), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: subheadingStyle
  }, "Order Confirmation")), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, null, "Hi ", userName, ","), /*#__PURE__*/_react.default.createElement(_components.Text, null, "Thank you for booking with Shelby Bourbon Tours!"), /*#__PURE__*/_react.default.createElement(_components.Text, null, /*#__PURE__*/_react.default.createElement("strong", null, "Order Date:"), " ", dateId)), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: sectionTitleStyle
  }, "Your Selected Tours:"), cartItems.map((item, index) => /*#__PURE__*/_react.default.createElement(_components.Section, {
    key: index,
    style: {
      ...sectionStyle,
      border: '1px solid #eee',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: itemTitleStyle
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Tour Name:"), " ", item.name), /*#__PURE__*/_react.default.createElement(_components.Text, null, /*#__PURE__*/_react.default.createElement("strong", null, "Number of Guests:"), " ", item.guests), /*#__PURE__*/_react.default.createElement(_components.Text, null, /*#__PURE__*/_react.default.createElement("strong", null, "Transport:"), " ", item.trans), images[index] && /*#__PURE__*/_react.default.createElement(_components.Img, {
    src: images[index],
    alt: `Tour image for ${item.name}`,
    style: itemImageStyle
  })))), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, null, /*#__PURE__*/_react.default.createElement("strong", null, "Total Cost:"), " ", totalFormatted)), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: footerStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: footerTextStyle
  }, "If you have any questions, feel free to reply to shelbybourbontours@gmail.com."), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: footerTextStyle
  }, "Cheers,"), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: footerTextStyle
  }, "Shelby Bourbon Tours")), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: zeroPaddingStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Img, {
    src: "https://cdn.shelbybourbontours.com/emails/email_tour_logo.png",
    alt: "Shelby Bourbon Tours Bottom Banner",
    style: bannerImgStyle
  })))));
};
exports.CartOrderConfirmation = CartOrderConfirmation;
var _default = exports.default = CartOrderConfirmation; // ==================
// Inline Styles
// ==================
const bodyStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif'
};
const zeroPaddingStyle = {
  margin: 0,
  padding: 0
};
const bannerImgStyle = {
  display: 'block',
  width: '100%',
  margin: 0,
  padding: 0
};
const containerStyle = {
  margin: '40px auto',
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};
const sectionStyle = {
  marginBottom: '20px'
};
const headingStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px'
};
const subheadingStyle = {
  fontSize: '16px',
  marginBottom: '10px',
  fontWeight: 'bold',
  color: '#555'
};
const sectionTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '10px'
};
const itemTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '8px'
};
const itemImageStyle = {
  display: 'block',
  marginTop: '8px',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '100%'
};
const footerStyle = {
  marginTop: '20px',
  borderTop: '1px solid #eee',
  paddingTop: '10px'
};
const footerTextStyle = {
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '8px',
  color: '#555'
};