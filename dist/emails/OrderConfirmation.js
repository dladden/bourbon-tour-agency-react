"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OrderConfirmation = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OrderConfirmation = ({
  guestName = 'Guest',
  tourName = 'Sample Tour',
  startDate = 'N/A',
  endDate = 'N/A',
  totalTrans = '$0',
  orderDate = 'N/A',
  numberOfGuests = 0
}) => {
  return /*#__PURE__*/_react.default.createElement(_components.Html, null, /*#__PURE__*/_react.default.createElement(_components.Head, null, /*#__PURE__*/_react.default.createElement("meta", {
    httpEquiv: "Content-Security-Policy",
    content: "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
  }), /*#__PURE__*/_react.default.createElement("style", null, `
          /* Additional inline CSS or resets if you need them */
        `)), /*#__PURE__*/_react.default.createElement(_components.Preview, null, "Your order has been confirmed!"), /*#__PURE__*/_react.default.createElement(_components.Body, {
    style: bodyStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: zeroPaddingStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Img, {
    src: "https://cdn.shelbybourbontours.com/emails/order_confirm_text02.png",
    alt: "Shelby Bourbon Tours Top Banner",
    style: bannerImgStyle
  })), /*#__PURE__*/_react.default.createElement(_components.Container, {
    style: outerContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: headerStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: headerTextStyle
  }, "Shelby Bourbon Tours")), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: contentSectionStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: headingStyle
  }, "Order Confirmation"), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, "Hi ", guestName, ","), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, "Thank you for booking ", /*#__PURE__*/_react.default.createElement("strong", null, tourName), "."), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Order Date:"), " ", orderDate), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Tour Dates:"), " ", startDate, " - ", endDate), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Number of Guests:"), " ", numberOfGuests), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Transportation Cost:"), " ", totalTrans), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, "If you have any questions, feel free to reply to shelbybourbontours@gmail.com."), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, "Cheers,"), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: normalTextStyle
  }, "Shelby Bourbon Tours"))), /*#__PURE__*/_react.default.createElement(_components.Section, {
    style: zeroPaddingStyle
  }, /*#__PURE__*/_react.default.createElement(_components.Img, {
    src: "https://cdn.shelbybourbontours.com/emails/email_custom_tour_logo.png",
    alt: "Shelby Bourbon Tours Bottom Banner",
    style: bannerImgStyle
  }))));
};
exports.OrderConfirmation = OrderConfirmation;
var _default = exports.default = OrderConfirmation; // ==================
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
const outerContainerStyle = {
  margin: '40px auto',
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '10px',
  borderBottom: '1px solid #ddd',
  marginBottom: '20px'
};
const headerTextStyle = {
  fontSize: '14px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: 0
};
const contentSectionStyle = {
  padding: '0 20px'
};
const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px'
};
const normalTextStyle = {
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
  color: '#555'
};