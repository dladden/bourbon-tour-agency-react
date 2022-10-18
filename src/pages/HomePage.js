import React from "react";
import { FeaturedTours, Hero, Services, Contact } from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedTours />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
