import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join Shelby Bourbon Tours Newsletter and receive 10% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            possimus ipsum, nemo odio ratione error quasi veniam at ea nobis,
            totam modi, veritatis minus eum? Laudantium exercitationem error
            voluptas odit.
          </p>
          <form action="" className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--input-radius);
    border-bottom-left-radius: var(--input-radius);
  }
  .submit-btn {
    border-top-right-radius: var(--input-radius);
    border-bottom-right-radius: var(--input-radius);
  }
  .form-input::placeholder {
    color: var(--clr-primary-3);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-9);
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
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 4rem 0;
  }
`;

export default NewsLetter;
