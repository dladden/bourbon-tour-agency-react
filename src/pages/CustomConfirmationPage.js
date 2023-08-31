import React from "react";
import styled from "styled-components";
//hooks from react router dom to access the url parameters
//This is a confirmation page after a form is filled out for a custom tour
//This page will not be crawled by google bots since it is set up as <meta name="robots" content="noindex" />
import { Seo, PageHero, CustomConfirmation } from "../components";

const CustomConfirmationPage = () => {
  return (
    <main>
      <Seo
        title="Form Submission Confirmation"
        content="Confirmation of submission to Shelby Bourbon Tours Custom Tours Form."
        robots="index"
        href="/submission-confirmation"
      />
      <PageHero title="Submission Confirmed" />
      <Wrapper>
        <CustomConfirmation />
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

export default CustomConfirmationPage;
