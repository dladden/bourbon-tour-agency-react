import React from "react";
import styled from "styled-components";
import { Filters, TourList, Sort, PageHero } from "../components";
import { Helmet } from "react-helmet-async";
//TourPage responsible for displaying the components
const ToursPage = () => {
  return (
    <main>
      <Helmet>
        <title>Tours</title>
        <meta
          name="description"
          content="Providing touring to all Kentucky distilleries. Such as Buffalo Trace, Woodford Reserve, Maker's Mark, Bulleit, Four Roses, Wild Turkey, Angel's Envy, and much more."
        />
        <link rel="canonical" href="/tours" />
      </Helmet>
      <PageHero title="tours" />
      <Wrapper className="page">
        <div className="section-center tours">
          <section id="filters-section">
            <Filters />
          </section>
          <div>
            <Sort />
            <TourList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .tours {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .tours {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ToursPage;
