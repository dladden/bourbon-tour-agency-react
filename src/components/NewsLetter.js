import React from "react";
import styled from "styled-components";
import logo from "../assets/newsletter_frontpage.svg";

const NewsLetter = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          Join Shelby Bourbon Tours Newsletter and receive <em>10% off</em>
        </h3>
        <img
          className="newsletter"
          src={logo}
          title="Shelby Bourbon Tours Newsletter"
          alt="Our News Letter glass of Bourbon paired with cigar"
        />
        <div className="content">
          <p>
            Fill out the Shelby Bourbon Tours Newsletter Form, and we will send
            you a confirmation with a discount code which can be used at the
            checkout! Our Newsletter sends out exciting events, distillery
            tours, and our promotions bimonthly so you do not miss out on all
            your favorite 🥃. Finally, we respect your privacy. Unsubscribe at
            any time.
          </p>
          <div action="" className="contact-form">
            <a
              href="https://cdn.forms-content.sg-form.com/7fb68344-a742-11ed-ab44-4289808bb666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="join-btn">
                <button className="btn">JOIN NOW</button>
              </div>
            </a>
          </div>
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
    font-size: 1.2rem;
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

    display: grid;
    grid-template-columns: 1fr auto;
  }
  .btn {
    margin-top: 0.5rem;
    font-size: 1rem;
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .join-btn {
    align-items: center;
  }
  .submit-btn {
    font-size: 0.55rem;
    padding: 0.5rem 0.5rem;
    border: 2px solid var(--clr-black);
  }
  .submit-btn {
    border-top-right-radius: var(--input-radius);
    border-bottom-right-radius: var(--input-radius);
    border-top-left-radius: var(--input-radius);
    border-bottom-left-radius: var(--input-radius);
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
    .contact-form {
      padding-top: 1rem;
      width: 90vw;
      max-width: 450px;
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .submit-btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 480px) {
    .submit-btn {
      font-size: 0.8rem;
      align-items: center;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 1280px) {
    padding: 4rem 0;
    align-items: center;
  }
`;

export default NewsLetter;
