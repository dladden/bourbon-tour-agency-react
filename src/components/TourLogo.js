import React from "react";
import styled from "styled-components";
import logo from "../assets/indent_logo.svg";
import { Link } from "react-router-dom";
const TourLogo = ({ title, tour }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <img src={logo} alt="Custom Tour" style={{ height: 250, width: 250 }} />
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
    text-align: center;
  }
`;

export default TourLogo;
