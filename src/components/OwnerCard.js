import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import contactQR from "../assets/contact_qr.svg";
import owner from "../assets/owner.jpg";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
//Component responsible for the OwnerCard used in Contact page
const OwnerCard = ({ tour }) => {
  // const { tour_url } = tour;
  //   console.log(tour_url);

  return (
    <Wrapper>
      <div class="container">
        <div class="team">
          <div class="member">
            <img src={owner} alt="member_image" />
            <h3>Steve Ladden</h3>
            <span>shelbybourbontours@gmail.com</span>

            <p>
              <hr />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.amet
              consecteturamet consecteturamet. You can also reach me at 502
              216..
            </p>
            <div class="date-time">
              <img src={contactQR} alt="" style={{ height: 90, width: 90 }} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #f4f4f4;
  }

  .container {
    margin-top: 25px;
  }

  .container img {
    border-radius: 50%;
  }
  .date-time img {
    border-radius: 0%;
  }
  .container .team {
    width: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }

  .container .team .member {
    width: 325px;
    margin: 10px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    padding: 25px;
  }

  .container .team .member img {
    width: 90px;
  }

  .container .team .member h3 {
    color: #444;
  }

  .container .team .member span {
    font-size: 12px;
    color: #999;
  }

  .container .team .member p {
    margin: 15px 0;
    font-weight: 400;
    color: #999;
    font-size: 15px;
    text-align: justify;
  }

  .container .team .member .btn a {
    background: #ddd;
    display: block;
    float: right;
    width: 125px;
    margin: 0 10px;
    padding: 10px;
    border-radius: 6px;
    color: #444;
    text-transform: capitalize;
    transition: all 0.3s ease;
  }

  .container .team .member .btn a:hover {
    background: #5a36dd;
    color: #fff;
  }

  body {
    background: #eceff8;
  }
`;
export default OwnerCard;
