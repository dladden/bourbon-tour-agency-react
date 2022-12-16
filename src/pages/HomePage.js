import React from "react";

import {
  FeaturedTours,
  Hero,
  ImageSlider,
  TourLogo,
  Services,
  NewsLetter,
} from "../components";
const HomePage = () => {
  //dynamically-computed style

  return (
    <main>
      <Hero />
      <TourLogo />
      <FeaturedTours />
      <Services />
      <ImageSlider />
      <NewsLetter />
    </main>
  );
};

export default HomePage;
