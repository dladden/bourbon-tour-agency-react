import React from "react";

import {
  Seo,
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
      <Seo
        title="Home"
        content="Poop Bourbon Tours provides bourbon trail tour transportation to all of the major Bourbon distillery locations in the heart of Kentucky."
        robots="index"
        href="/"
      />
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
