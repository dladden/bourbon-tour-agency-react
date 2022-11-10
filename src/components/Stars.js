import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, tour_url }) => {
  console.log(stars, tour_url);
  return (
    <Wrapper>
      <div className="stars">
        {/* Stars React ternary Operator for 1 Star */}
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* StarsEnd */}
        {/* Stars React ternary Operator for 2 Star */}
        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* StarsEnd */}
        {/* Stars React ternary Operator for 3 Star */}
        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* StarsEnd */}
        {/* Stars React ternary Operator for 4 Star */}
        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* StarsEnd */}
        {/* Stars React ternary Operator for 4 Star */}
        <span>
          {stars === 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* StarsEnd */}
      </div>
      {/* target="_blank" link in a new tab every time & no referrer information passing */}
      <a href={tour_url} target="_blank" rel="noreferrer">
        <p className="reviews">(Facebook Reviews)</p>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--clr-primary-6);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
