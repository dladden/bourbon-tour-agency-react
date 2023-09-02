import "@fontsource/cormorant-garamond/700.css";
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
//hooks from react router dom to access the url parameters

import {
  Seo,
  PageHero,
  OwnerCard,
  ContactList,
  Faq,
  RequestForm,
  Cancelation,
  CustomTour,
} from "../components";

const ContactPage = () => {
  return (
    <main>
      <Seo
        title="Contact"
        content="Since 2020 Shelby Bourbon Tours has provided touring on a trail to all distillers around Kentucky. If you are curious about the distilling process as we are, contact us."
        robots="index"
        href="/about"
      />
      <PageHero title="Contact" />
      <Wrapper>
        <OwnerCard />
        <section id="contact-us">
          <ContactList />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="cancellations">
          <Cancelation />
        </section>
        <section id="form">
          <RequestForm />
        </section>
        <section id="custom-tour">
          <CustomTour />
        </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-background-main);
  padding: 1rem;

  * {
    margin: 0;
    padding: 0;
    transition: ease 0.2s;
  }
  .hero {
    background-color: var(--clr-background-main);
  }
`;

export default ContactPage;
