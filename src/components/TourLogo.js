import React from "react";
import styled from "styled-components";
import logo from "../assets/indent_logo.svg";

const TourLogo = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <img
          src={logo}
          alt="Custom Tour"
          style={{ paddingTop: 20, height: 250, width: 250 }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  //background: var(--clr-background-main);
  width: 100%;

  // min-height: 10vh;
  // display: flex;
  .section-center {
    margin-top: 10 rem;
    text-align: center;
  }
`;

export default TourLogo;
