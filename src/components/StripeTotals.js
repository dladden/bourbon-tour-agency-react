import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { priceFormat } from "../utils/helpers";
import { useCartContext } from "../context/cart_context"; //cart context
import { useUserContext } from "../context/user_context"; //user context
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
//Component responsible for the OwnerCard used in Contact page
const StripeTotals = () => {
  const { total_amount, tax, discountAmount } = useCartContext();
  const { calculateDiscount } = useCartContext();

  // if (discountAmount) {
  //   total_amount -= discountAmount;
  // }
  // total_amount -= discountAmount;
  const discAmount = discountAmount;
  //calculating total with tax
  const total_tax = total_amount * (tax / 100);

  const [coupon_code, setCoupon_code] = useState("");

  console.log(priceFormat(discountAmount));
  console.log(coupon_code);

  console.log(process.env.REACT_APP_DISC_CODE);

  return (
    <Wrapper>
      <div className="cc-info">
        <div className="discount-container">
          <input
            onChange={(e) => setCoupon_code(e.target.value)}
            // className="discount-input"
            id="coupon_code"
            name="coupon_code"
            type="text"
            maxLength={21}
            className="text"
            placeholder="Add Discount Code"
          />
          <button
            type="button"
            className="apply-button"
            onClick={() => {
              process.env.REACT_APP_DISC_CODE === coupon_code &&
                calculateDiscount();
            }}
          >
            Apply
          </button>
        </div>
        {/* END DISCOUNT & EMAIL PORTION */}
        {/* TOTALS */}
        <div className="totals">
          <h6 className="totals-text">Subtotal: {priceFormat(total_amount)}</h6>
          <h6 className="totals-text">Subtotal: {priceFormat(total_amount)}</h6>
          <h6 className="totals-text">
            Taxes & Fees: {priceFormat(total_tax)}
          </h6>
          <h6 className="totals-text">
            Total: {priceFormat(total_amount + total_tax)}
          </h6>
        </div>
      </div>
    </Wrapper>
  );
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  /*
=============== 
DISCOUNT INPUT BUTTON
===============
*/
  .discount-container {
    display: inline-block;
    position: relative;
  }
  .apply-button {
    cursor: pointer;
    padding: 0px;
    background-color: var(--clr-primary-9);
    border-radius: var(--input-radius);
    position: absolute;
    right: 0.2em;
    top: 0.5em;
    width: 4em;
    height: 1.9em;
  }
  .discount-input {
    padding: 0.5em 3.5em 0.5em 0.5em;
  }
`;
export default StripeTotals;
