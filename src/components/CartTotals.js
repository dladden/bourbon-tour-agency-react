import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { priceFormat } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  //values from cart_context.js
  const { total_amount, tax } = useCartContext();
  //values from user_context.js for functional rendering (if user not logged in set login)
  const { tourUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal:{" "}
            <span>
              {total_amount === 0 ? "$0.00" : `${priceFormat(total_amount)}`}
            </span>
          </h5>
          <p>
            Tax: <span>{tax}</span>
          </p>
          <hr />
          <h4>
            Order Total : <span>{priceFormat(total_amount)}</span>
          </h4>
        </article>
        {tourUser ? (
          <Link to="/checkout" className="btn">
            Proceed to Checkout
          </Link>
        ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            Sign in
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
