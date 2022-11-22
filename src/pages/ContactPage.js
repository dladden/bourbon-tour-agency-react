import React, { useEffect } from "react";
import styled from "styled-components";
import facebook from "../assets/facebook_qr.svg";
import owner from "../assets/owner.jpg";
import { useParams, useHistory } from "react-router-dom"; //hooks from react router dom to access the url parameters
import { single_tour_url as url } from "../utils/constants";
import { useToursContext } from "../context/tours_context";

import { PageHero, OwnerCard, ContactList, CustomTour } from "../components";

const ContactPage = () => {
  return (
    <Wrapper>
      <PageHero title="contact" />
      <OwnerCard />
      <ContactList />
      <CustomTour />
    </Wrapper>
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
`;

export default ContactPage;
