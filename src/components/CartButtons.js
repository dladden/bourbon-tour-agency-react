import React from "react";
import { FaCartArrowDown, FaUserMinus, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useToursContext } from "../context/tours_context";
//CartContext used to display number of items in the cart
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
//CartButtons is used for the cart button and it is display blocked in Navbar through class: cart-btn-wrapper before 960px
//It is also used to display the login link
const CartButtons = () => {
  const { closeSidebar } = useToursContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <FaCartArrowDown /> cart
          <span className="cart-value">2</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        <FaUserAlt />
        login
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-right: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -9px;
    right: -16px;
    background: var(--clr-green-dark);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-right: 5px;
    }
  }
`;
export default CartButtons;
