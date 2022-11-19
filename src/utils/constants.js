import React from "react";
import {
  GiBarrel,
  GiSaloon,
  GiSteamLocomotive,
  GiGlassShot,
} from "react-icons/gi";
//links which are used globally to eliminate repetitive code
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
//
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
//"https://course-api.com/react-store-products";
export const tours_url = "https://sbt-serverless.netlify.app/api/tours";
//`https://course-api.com/react-store-single-product?id=`;
export const single_tour_url = `https://sbt-serverless.netlify.app/api/tours?id=`;
