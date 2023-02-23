import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
//hooks from react router dom to access the url parameters

import {
  PageHero,
  OwnerCard,
  ContactList,
  Cancelation,
  Faq,
  CustomTour,
} from "../components";

const ContactPage = () => {
  return (
    <main>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact us to tour bourbon distilleries in Kentucky and find the best bourbon you've been looking for or create a customizable tour."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <PageHero title="Contact" />
      <Wrapper>
        <OwnerCard />
        <section id="contact-us">
          <ContactList />
        </section>
        <section id="cancellations">
          <Cancelation />
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
