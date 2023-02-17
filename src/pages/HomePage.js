import React from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Shelby Bourbon Tours provides bourbon trail tour transportation to all of the major Bourbon distillery locations in the heart of Kentucky."
        />
        <link rel="canonical" href="/" />
      </Helmet>
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
