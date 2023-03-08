import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroSBT from "../assets/sbt_cover.webp";
import heroSBT2 from "../assets/sbt_cover2.webp";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Tour Your Favorite <br />
          Distilleries in the Heart of Kentucky
        </h1>
        <p>
          Shelby Bourbon Tours provides bourbon trail tour transportation to all
          of the major Bourbon distillery locations. Whether you are a group of
          2 or 20, we can ensure that you visit all of your favorite
          distilleries while having peace of mind that you can participate and
          enjoy all of the tastings and not have to worry about driving. So
          leave the driving to us and contact us today to craft your personal
          favorite Bourbon distilleries day.
        </p>
        <Link to="/tours" className="btn hero-btn">
          Find A Tour
        </Link>
      </article>
      <article className="img-container">
        <img
          src={heroSBT}
          title="Best Tasting Bourbon Logo Shelby Bourbon Tours"
          alt="Best Tasting Bourbon glass with Shelby Bourbon Tours Logo"
          className="main-img"
        />
        <img
          src={heroSBT2}
          title="Blanton's Single Barrel Bourbon, Buffalo Trace"
          alt="Blanton's Single Barrel Bourbon, Buffalo Trace"
          className="accent-img"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1.2rem;
  }
  @media (min-width: 992px) {
    height: calc(80vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--images-radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
