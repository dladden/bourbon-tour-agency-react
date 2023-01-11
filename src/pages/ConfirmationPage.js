import React from "react";
import styled from "styled-components";
// import { useParams, useHistory } from "react-router-dom"; //hooks from react router dom to access the url parameters

import {
  PageHero,
  Confirmation,
  ContactList,
  Cancelation,
  CustomTour,
} from "../components";

const ConfirmationPage = () => {
  return (
    <main>
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
