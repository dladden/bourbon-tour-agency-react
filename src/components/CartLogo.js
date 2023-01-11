import React from "react";
import styled from "styled-components";
import logo from "../assets/cart_logo.svg";
// import { Link } from "react-router-dom";
const CartLogo = () => {
  return (
    <Wrapper>
      <img
        className="cart-logo"
        src={logo}
        alt="Cart"
        style={{ height: 250, width: 400 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  //background: var(--clr-background-main);

  .cart-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  @media only screen and (max-width: 480px) {
    .cart-logo {
      width: 100%;
    }
  }
`;

export default CartLogo;
