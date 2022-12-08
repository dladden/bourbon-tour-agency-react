import React from "react";
import aboutImg0 from "../assets/about_cover0.jpeg";
import aboutImg1 from "../assets/about_cover1.jpeg";
import aboutImg2 from "../assets/about_cover2.png";

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
    { url: aboutImg0, title: "Our Guests" },
    { url: aboutImg1, title: "Our Guests" },
    { url: aboutImg2, title: "Our Guests" },
  ];
  //dynamically-computed style
  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
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
