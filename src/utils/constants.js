import React from "react";
import guestsImg0 from "../assets/guests0.jpeg";
import guestsImg1 from "../assets/guests1.jpeg";
import {
  GiBarrel,
  GiSaloon,
  GiSteamLocomotive,
  GiGlassShot,
} from "react-icons/gi";

//SOCIAL LINKS to be inserted in the pages:
export const messenger_link = "https://m.me/shelbybourbontours";
export const instagram_link = "https://www.instagram.com/shelbybourbontours";
export const whats_app_link = "https://wa.me/5022164530?text=Hello%20Steve!";
export const email_link = "steven@shelbybourbontours.com";

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
    text: "We will take you on the best bourbon trail tour while ensuring you do not leave your taste buds and hands empty-handed! Tour any distilleries in Kentucky and enjoy bourbon at every step.",
  },
  {
    id: 2,
    icon: <GiSaloon />,
    title: "Places to Stay",
    text: "Whether it is out in the country, all distilleries in Kentucky are close to places hand-picked as stays, or in urban Louisville, all distilleries in Louisville are ready for your visit.",
  },
  {
    id: 3,
    icon: <GiGlassShot />,
    title: "Food & Events",
    text: "Being in the business, we accumulated unique a list of locations to stay, eat and visit on your bourbon whiskey tour! All to ensure you get all the beauty of Kentucky and have some of its best bourbons.",
  },
  {
    id: 4,
    icon: <GiSteamLocomotive />,
    title: "On the Mission",
    text: "In 8 hours, we can visit up to 4 to 5 distilleries. Our goal is to make it a day's worth of enjoyable visitations while having time to eat and drink! One day bourbon trail or 3 day itinerary, we got your back!",
  },
];

//CUSTOMER SLIDES
export const slides = [
  { url: guestsImg0, title: "Our Guests" },
  { url: guestsImg1, title: "Our Guests" },
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
  "Bardstown Bourbon CO.",
  "Michter's",
  "Jeptha Creed",
  "Peerless Distillery",
  "Prohibition Spirits",
  "KY Cooperage",
  "Barton 1792",
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
  { value: "Bardstown Bourbon", label: "Bardstown Bourbon CO." },
  { value: "Michter's", label: "Michter's" },
  { value: "Jeptha Creed", label: "Jeptha Creed" },
  { value: "Peerless Distillery", label: "Peerless Distillery" },
  { value: "Prohibition Spirits", label: "Prohibition Spirits" },
  { value: "KY Cooperage", label: "KY Cooperage" },
];

export const country_data = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
];

export const checkout_clause =
  "On this Website, we have integrated components of Stripe. Stripe is an online payment service provider. Stripe allows paying via various other payment methods, such as credit cards, SOFORT, and so more. The operating company Stripe ensures secure protection of the Services, rights, privacy, safety and property of Stripe, you or others, including against other malicious or fraudulent activity and security incidents.";

// https://stripe.com/legal/dpa/faqs

// https://stripe.com/legal/ssa

//https://stripe.com/legal/dpa#download-the-dpa

//"https://course-api.com/react-store-products";
export const tours_url = process.env.REACT_APP_TOURS_URL;
//`https://course-api.com/react-store-single-product?id=`;
export const single_tour_url = process.env.REACT_APP_SINGLE_TOUR_URL;
