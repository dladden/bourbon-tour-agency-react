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
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/shelbybourbontours",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://m.me/shelbybourbontours",
  },
  {
    id: 4,
    icon: <FaGoogle className="social-icon"></FaGoogle>,
    url: "https://www.google.com/maps/place/Shelbyville,+KY+40065/@38.1997916,-85.2368135,13z/data=!3m1!4b1!4m5!3m4!1s0x8869c035937a44ff:0xaf76a1f361758931!8m2!3d38.2120144!4d-85.2235666",
  },
  {
    id: 5,
    icon: <FaReddit className="social-icon"></FaReddit>,
    url: "https://www.reddit.com/u/Shelbybourbontours/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
  },
];

export default data;
