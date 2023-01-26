import React from "react";
// import ReactDOM from "react-dom"
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const CustomTourLink = () => {
  return (
    <Wrapper>
      <article className="header">
        <h3>
          Custom Tours
          <br />
          <Link smooth to="/contact#custom-tour" className="btn">
            Create
          </Link>
        </h3>
        {/* <Route path="/contact" element={<CustomTour />} />
          </Router> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita
          doloribus ducimus similique, laborum facere minima magni architecto
          sint distinctio nisi non eligendi velit consectetur quo sunt
          voluptatem provident molestias.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  .header h3 {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0.4rem;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .h3 {
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
  .btn {
    margin-top: 0.5rem;
    padding: 0.8rem 0.8rem;
    font-size: 1rem;
  }
`;
export default CustomTourLink;
