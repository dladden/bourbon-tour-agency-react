import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero, CustomTourLink, CartLogo } from "../components";

const CartPage = () => {
  //importing cart array from context
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <CartLogo />
        <div className="empty">
          <h2>Cart is Empty</h2>
          <Link to="/tours" className="btn">
            Find A Tour
          </Link>
        </div>
        <h5>Or</h5>
        <div className="section-center">
          <CustomTourLink />
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  h5 {
    margin-top: 1rem;
    text-align: center;
  }
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  @media (min-width: 900px) {
    padding: 0;
    .section-center {
      // transform: translateY(5rem);
    }
  }
`;

export default CartPage;
