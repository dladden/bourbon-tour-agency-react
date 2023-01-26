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
      <section id="featured-tours">
        <TourLogo />
        <FeaturedTours />
      </section>
      <Services />
      <section id="image-slider">
        <ImageSlider />
      </section>
      <NewsLetter />
    </main>
  );
};

export default HomePage;
