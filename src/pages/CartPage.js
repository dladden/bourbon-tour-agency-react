import "@fontsource/cormorant-garamond/700.css";
import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { HashLink as Link } from "react-router-hash-link";
import {
  Seo,
  CartContent,
  PageHero,
  CustomTourLink,
  CartLogo,
} from "../components";

const CartPage = () => {
  //importing cart array from context
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <Seo
          title="Cart"
          content="Secure Bourbon Trail Shopping Cart. Shelby Bourbon Tours offers custom trail tours or featured tours made for a quick reservation."
          robots="index"
          href="/cart"
        />
        <PageHero title="cart" />
        <CartLogo />
        <div className="empty">
          <h2>Cart is Empty</h2>
          <Link smooth to="/tours#tours-list" className="btn">
            Find A Tour
          </Link>
        </div>
        <div className="or-h5">
          <h5>Or</h5>
        </div>
        <div className="section-center">
          <CustomTourLink />
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Seo
        title="Cart"
        content="Secure Bourbon trail Shopping Cart. Shelby Bourbon Tours offers custom trail tours or featured tours made for a quick reservation."
        href="/cart"
      />
      <PageHero title="cart" />
      <Wrapper className="page">
        <section id="user-cart">
          <CartLogo />
          <CartContent />
        </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  h5 {
    padding-top: 1rem;
    // text-align: center;
  }
  .empty {
    text-align: center;
    h2 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .or-h5 {
    text-align: center;
  }
  @media (min-width: 900px) {
    padding: 0;
    .section-center {
      // transform: translateY(5rem);
    }
  }
`;

export default CartPage;
