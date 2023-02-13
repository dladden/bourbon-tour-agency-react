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
//The current list of distilleries we are able to visit:
export const distilleries = [
  "Buffalo Trace",
  "Castle & Key",
  "Woodford Reserve",
  "Bulleit Distilling",
  "Angel's Envy",
  "Four Roses",
  "Jim Beam",
  "Maker's Mark",
  "Willett Distillery",
  "Evan Williams",
  "Heaven Hill",
  "Old Forester",
  "The Old Crow",
  "Glenns Creek",
  "Stitzel Weller",
  "Wild Turkey",
  "Three Boys",
  "Town Branch",
  "Rabbit Hole",
  "Preservation",
  "Limestone Branch",
  "Lux Row Distillers",
  "Jefferson's",
  "James E. Pepper",
  "Bardstown Bourbon",
  "Michter's Shively",
  "Jeptha Creed",
  "Bourbon Company",
  "Peerless Distillery",
  "Prohibition Spirits",
  "Cooperage",
];
//All the distilleries
export const distilleries_select = [
  { value: "Buffalo Trace", label: "Buffalo Trace" },
  { value: "Castle & Key", label: "Castle & Key" },
  { value: "Woodford Reserve", label: "Woodford Reserve" },
  { value: "Bulleit Distilling", label: "Bulleit Distilling" },
  { value: "Angel's Envy", label: "Angel's Envy" },
  { value: "Four Roses", label: "Four Roses" },
  { value: "Jim Beam", label: "Jim Beam" },
  { value: "Maker's Mark", label: "Maker's Mark" },
  { value: "Willett Distillery", label: "Willett Distillery" },
  { value: "Evan Williams", label: "Evan Williams" },
  { value: "Heaven Hill", label: "Heaven Hill" },
  { value: "Old Forester", label: "Old Forester" },
  { value: "The Old Crow", label: "The Old Crow" },
  { value: "Glenns Creek", label: "Glenns Creek" },
  { value: "Stitzel Weller", label: "Stitzel Weller" },
  { value: "Wild Turkey", label: "Wild Turkey" },
  { value: "Three Boys", label: "Three Boys" },
  { value: "Town Branch", label: "Town Branch" },
  { value: "Rabbit Hole", label: "Rabbit Hole" },
  { value: "Preservation", label: "Preservation" },
  { value: "Limestone Branch", label: "Limestone Branch" },
  { value: "Lux Row Distillers", label: "Lux Row Distillers" },
  { value: "Jefferson's", label: "Jefferson's" },
  { value: "James E. Pepper", label: "James E. Pepper" },
  { value: "Bardstown Bourbon", label: "Bardstown Bourbon" },
  { value: "Michter's Shively", label: "Michter's Shively" },
  { value: "Jeptha Creed", label: "Jeptha Creed" },
  { value: "Bourbon Company", label: "Bourbon Company" },
  { value: "Peerless Distillery", label: "Peerless Distillery" },
  { value: "Prohibition Spirits", label: "Prohibition Spirits" },
  { value: "Cooperage", label: "Cooperage" },
];

export const country_data = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
];

export const info_clause =
  "This Data Processing Agreement only applies to you if you have a Stripe Account located in the United States, the United Kingdom, the European Economic Area and Switzerland. If you have a Stripe Account located elsewhere or would like more information on our Data Processing Agreement, please see our FAQs. Need a copy of this Data Processing Agreement? Click here.";

// https://stripe.com/legal/dpa/faqs

// https://stripe.com/legal/ssa

//https://stripe.com/legal/dpa#download-the-dpa

//"https://course-api.com/react-store-products";
export const tours_url = process.env.REACT_APP_TOURS_URL;
//`https://course-api.com/react-store-single-product?id=`;
export const single_tour_url = process.env.REACT_APP_SINGLE_TOUR_URL;
