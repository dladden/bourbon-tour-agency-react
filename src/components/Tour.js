import React from "react";
import styled from "styled-components";
import { priceFormat } from "../utils/helpers"; //component for formatting the price
import { AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
//tour displays the
const Tour = ({ url, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={url} alt={name} />
        <Link to={`/tours/${id}`} className="link">
          <AiFillSchedule />
        </Link>
      </div>
      <footer>
        <div>
          <AiFillSchedule />
        </div>
        <h5>{name}</h5>
        <p>{priceFormat(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 500;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Tour;
