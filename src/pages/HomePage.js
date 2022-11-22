import React from "react";
import {
  FeaturedTours,
  Hero,
  TourLogo,
  Services,
  NewsLetter,
} from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <TourLogo />
      <FeaturedTours />
      <Services />
      <NewsLetter />
    </main>
  );
};

export default HomePage;
