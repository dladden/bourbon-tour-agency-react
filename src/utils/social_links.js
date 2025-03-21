import React from "react";
import {
  FaReddit,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaGoogle,
} from "react-icons/fa";
//Social_links are placed into an array. They are iterated in Hero.js and Footer.js components
const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.facebook.com/shelbybourbontours",
    alt: "Shelby Bourbon Tours on Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/shelbybourbontours",
    alt: "Shelby Bourbon Tours on Instagram",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://m.me/shelbybourbontours",
    alt: "Shelby Bourbon Tours on Messenger",
  },
  {
    id: 4,
    icon: <FaGoogle className="social-icon"></FaGoogle>,
    url: "https://goo.gl/maps/2ERLFVvaPSZGF31s7",
    alt: "Shelby Bourbon Tours on Google",
  },
  {
    id: 5,
    icon: <FaReddit className="social-icon"></FaReddit>,
    url: "https://www.reddit.com/u/Shelbybourbontours/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
    alt: "Shelby Bourbon Tours on Reddit",
  },
];

export default data;
