import React from "react";
import {
  FaReddit,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaTwitter,
} from "react-icons/fa";
//Social_links are placed into an array. They are iterated in Hero.js and Footer.js components
const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.facebook.com/shelbybourbontours",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://www.behance.net/denysladden",
  },
  {
    id: 4,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaReddit className="social-icon"></FaReddit>,
    url: "https://www.instagram.com/denysladden",
  },
];

export default data;
