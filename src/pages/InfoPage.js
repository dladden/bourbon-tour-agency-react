import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import info_data from "../utils/info_data"; //default export always resolves to default name
import { Question, Cancelation } from "../components";

//Simple Information Page with Q&A/FAQ style
const InfoPage = () => {
  const [questions, setQuestion] = useState(info_data);
  return (
    <Wrapper>
      <main>
        <div className="container">
          <h3>Shelby Bourbon Tours Common FAQ</h3>
          <section className="info">
            {/* This map method passes the data from info_data to the Question component */}
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
      <Cancelation />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: var(--clr-background-main);
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--clr-purple);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  /*  global classes */

  /* section */
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  /*
=============== 
Questions
===============
*/

  main {
    min-height: 100vh;
    /* using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 90vw;
    margin: 5rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
  @media screen and (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
  }
`;

export default InfoPage;
