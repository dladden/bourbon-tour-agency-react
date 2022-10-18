import React from "react";
import styled from "styled-components";
import { Filters, TourList, Sort, PageHero } from "../components";

const CreateTourPage = () => {
  return <h4>Create a Tour</h4>;
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default CreateTourPage;
