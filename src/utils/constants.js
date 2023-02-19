import React from "react";
import guestsImg0 from "../assets/Buffalo-Trace-Tour-Guests-01.webp";
import guestsImg1 from "../assets/Buffalo-Trace-Tour-Guests-02.webp";
import {
  GiBarrel,
  GiSaloon,
  GiSteamLocomotive,
  GiGlassShot,
} from "react-icons/gi";
//This constants set up so editing can be done fast and quick
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

//CUSTOMER SLIDES used in home page
export const slides = [
  {
    url: guestsImg0,
    title:
      "Our Tour Group of eight guests at Buffalo Trace Distillery in Frankfort Kentucky",
    alt: "Our Tour Group of eight guests at Buffalo Trace Distillery",
  },
  {
    url: guestsImg1,
    title:
      "Our Tour Group of five guests at Buffalo Trace Distillery in Frankfort Kentucky",
    alt: "Our Tour Group of five guests at Buffalo Trace Distillery",
  },
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
//The clause for the checkout page
export const checkout_clause =
  "On this Website, we have integrated components of Stripe. Stripe is an online payment service provider. Stripe allows paying via various other payment methods, such as credit cards, SOFORT, and so more. The operating company Stripe ensures secure protection of the Services, rights, privacy, safety and property of Stripe, you or others, including against other malicious or fraudulent activity and security incidents.";

//country selection
export const country_data = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
];

//Paragraphs used in the about page. Omit the first letter of each paragraph
export const about0 =
  "t Shelby Bourbon Tours, we agree that, ‘You can make bourbon anywhere in the country,’ ‘but if it's not Kentucky bourbon, it's not bourbon.’ Since 2020 Shelby Bourbon Tours has taken our guests on Bourbon Trail Tours to taste Kentucky Bourbon on the soil where it is made. And when we say there is plenty to go about, we mean that Kentucky is home to over 95 distilleries. This number is increasing as craft distilleries are coming to participate in an ever-growing bourbon and distillery tour industry. Shelby County is known as the Saddlebred Capital of the World. Take a drive in any direction and marvel at the beautiful horse farms with horses grazing lazily in the fields. Here in Shelby County, in the center of it all, we accumulated a collection of amazing places to stay to accommodate your bourbon trail adventures.";
export const about1 =
  "n 2009 Kentucky had about 19 full-time distilleries producing a 3 Billion dollar bourbon industry. That has grown to 95 distilleries and over 9 billion dollars. Although not all Bourbon is made in Kentucky, according to the Kentucky Distillers' Association, the Bluegrass State produces and ages approximately 95 percent of the world's bourbon whiskey. Why? The secret is in the water. Kentucky sits atop vast blue limestone deposits, which filter out hard iron and impart sweet-tasting calcium and magnesium. The soil is rich and dense to produce the corn and rye used in making Bourbon, and the climate and geographical location of the state make it the ideal place to create the world's finest Bourbon.";
export const about2 =
  "he popularity of Bourbon is in the secret of how it’s made. If you are reading this, you  probably already know.  If you have yet to visit a distillery in person and want to hear more about their process and history, this is a great time to book one today to experience Kentucky's finest Bourbon in your own way! Shelby Bourbon Tours is located in Shelby County, Kentucky, at the heart of the bourbon trail. Let us guide you and plan your stay, whether in Shelby County, Louisville, or Frankfort; we will make sure Kentucky's famous distilleries surround you.";

// https://stripe.com/legal/dpa/faqs

// https://stripe.com/legal/ssa

//https://stripe.com/legal/dpa#download-the-dpa

//"https://course-api.com/react-store-products";
export const tours_url = process.env.REACT_APP_TOURS_URL;
//`https://course-api.com/react-store-single-product?id=`;
export const single_tour_url = process.env.REACT_APP_SINGLE_TOUR_URL;
