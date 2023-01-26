import React from "react";
// const dotenv = require("dotenv");
import guestsImg0 from "../assets/guests0.jpeg";
import guestsImg1 from "../assets/guests1.jpeg";
import guestsImg2 from "../assets/guests2.jpeg";
import {
  GiBarrel,
  GiSaloon,
  GiSteamLocomotive,
  GiGlassShot,
} from "react-icons/gi";

//links which are used globally to eliminate repetitive code
//LINKS FOR
export const links = [
  {
    id: 1,
    text: "HOME",
    url: "/",
  },
  {
    id: 2,
    text: "TOURS",
    url: "/tours",
  },
  {
    id: 3,
    text: "ABOUT",
    url: "/about",
  },
  {
    id: 4,
    text: "CONTACT",
    url: "/contact",
  },
];
//4 SERVICES WE PROVIDE
export const services = [
  {
    id: 1,
    icon: <GiBarrel />,
    title: "Lots of Bourbon",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiSaloon />,
    title: "Places to Stay",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiGlassShot />,
    title: "Food & Events",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 4,
    icon: <GiSteamLocomotive />,
    title: "On the Mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
//CUSTOMER SLIDES
export const slides = [
  { url: guestsImg0, title: "Our Guests" },
  { url: guestsImg1, title: "Our Guests" },
  { url: guestsImg2, title: "Our Guests" },
];
//MAX GUESTS ABLE TO BE RESERVED FOR A TOUR (USED IN CUSTOM TOUR)
export const guests = 20;
//THE 3 TRANSPORTATION TYPES (USED IN CUSTOM TOUR)
export const trans = ["suv", "van", "bus"];

// console.log(guestsImg0);

//"https://course-api.com/react-store-products";
export const tours_url = process.env.REACT_APP_TOURS_URL;
//`https://course-api.com/react-store-single-product?id=`;
export const single_tour_url = process.env.REACT_APP_SINGLE_TOUR_URL;
