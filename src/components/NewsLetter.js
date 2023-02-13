import React from "react";
import styled from "styled-components";
import logo from "../assets/newsletter_frontpage.svg";

const NewsLetter = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join Shelby Bourbon Tours Newsletter and receive 10% off</h3>
        <img className="newsletter" src={logo} alt="Newsletter" />
        <div className="content">
          <p>
            Fill out the Shelby Bourbon Tours Newsletter Form, and we will send
            you a confirmation with a discount code which can be used at the
            checkout! Our Newsletter sends out exciting events, distillery
            tours, and our promotions bimonthly so you do not miss out on all
            your favorite 🥃. Finally, we respect your privacy. Unsubscribe at
            any time.
          </p>
          <form action="" className="contact-form">
            <div className="form-example">
              <p>In Our Form Provide: First, Last Name & Email</p>
            </div>
            <a
              className="submit-btn"
              href="https://cdn.forms-content.sg-form.com/7fb68344-a742-11ed-ab44-4289808bb666"
            >
              Fill Out The Form
            </a>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    padding-bottom: 0.5rem;
    text-transform: none;
  }

  a {
    font-weight: 900;
    margin: auto;
    padding: 0;
    line-height: 2;
  }

  p {
    font-weight: 900;
    margin: auto;
    padding: 0;
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .newsletter {
  }
  .contact-form {
    padding-top: 1rem;
    width: 90vw;
    max-width: 550px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-example,
  .submit-btn {
    font-size: 0.55rem;
    padding: 0.5rem 0.5rem;
    border: 2px solid var(--clr-black);
  }
  .form-example {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--input-radius);
    border-bottom-left-radius: var(--input-radius);
  }
  .submit-btn {
    border-top-right-radius: var(--input-radius);
    border-bottom-right-radius: var(--input-radius);
  }
  .form-example::placeholder {
    color: var(--clr-primary-3);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-8);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 6rem;
      margin-top: 1rem;
    }
    p {
      margin-bottom: 0;
    }
    .form-example,
    .submit-btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 480px) {
    .form-example,
    .submit-btn {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 1280px) {
    padding: 4rem 0;
  }
`;

export default NewsLetter;
