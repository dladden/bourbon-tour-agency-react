import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout, CustomTourLink } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  //cart used to check if the carts length if empty display div with
  //if it has items display the StripeCheckout
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Nothing to Book. Add Tours to Your Cart Here: </h2>
            <Link to="/tours" className="btn">
              Find A Tour
            </Link>
            <h5>Or</h5>
            <div className="section-center">
              <CustomTourLink />
            </div>
          </div>
        ) : (
          <section id="checkout-form">
            <StripeCheckout />
          </section>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
