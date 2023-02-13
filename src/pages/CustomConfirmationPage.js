import React from "react";
import styled from "styled-components";
//hooks from react router dom to access the url parameters

import { PageHero, CustomConfirmation } from "../components";

const CustomConfirmationPage = () => {
  return (
    <main>
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
