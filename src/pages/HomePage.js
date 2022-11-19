import React from "react";
import { FeaturedTours, Hero, Services, NewsLetter } from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedTours />
      <Services />
      <NewsLetter />
    </main>
  );
};

export default HomePage;
