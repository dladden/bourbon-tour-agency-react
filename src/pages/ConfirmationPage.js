import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
//hooks from react router dom to access the url parameters
//This is a confirmation page after a customer makes a purchase of a reservation for a tour
//This page will not be crawled by google bots since it is set up as <meta name="robots" content="noindex" />
import { PageHero, Confirmation } from "../components";

const ConfirmationPage = () => {
  return (
    <main>
      <Helmet>
        <title>Confirmation</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="confirmation" />
        <link rel="canonical" href="/confirmation" />
      </Helmet>
      <PageHero title="Confirmation" />
      <Wrapper>
        <Confirmation />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-background-main);
  padding: 20px;

  * {
    margin: 0;
    padding: 0;
    transition: ease 0.2s;
  }
  .hero {
    background-color: var(--clr-background-main);
  }
`;

export default ConfirmationPage;
