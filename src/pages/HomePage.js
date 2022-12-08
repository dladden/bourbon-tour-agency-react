import React from "react";
import guestsImg0 from "../assets/guests0.jpeg";
import guestsImg1 from "../assets/guests1.jpeg";
import guestsImg2 from "../assets/guests2.jpeg";

import {
  FeaturedTours,
  Hero,
  ImageSlider,
  TourLogo,
  Services,
  NewsLetter,
} from "../components";
const HomePage = () => {
  const slides = [
    { url: guestsImg0, title: "Our Guests" },
    { url: guestsImg1, title: "Our Guests" },
    { url: guestsImg2, title: "Our Guests" },
  ];
  //dynamically-computed style
  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    marginBottom: "60px",
  };
  return (
    <main>
      <Hero />
      <TourLogo />
      <FeaturedTours />
      <Services />
      <NewsLetter />
      <div style={containerStyle}>
        <ImageSlider slides={slides} />
      </div>
    </main>
  );
};

export default HomePage;
