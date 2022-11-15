import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import { FaCheck, truck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ tour }) => {
  const { id, trans } = tour;
  //mainTrans = current transportation, setTrans = sets transportation
  //default transportation will always be firs array item
  //in this case it is suv
  const [mainTrans, setTrans] = useState(trans[0]);

  // console.log(trans);

  return (
    <Wrapper>
      <div className="colors">
        <span>Transportation: </span>
        <div>
          {trans.map((car, index) => {
            return (
              <button
                key={index}
                //terinary operator:"?" if mainTrans is a car that is the first choice display active
                //":" if not: just display "color-btn" styling
                className={`${
                  mainTrans === car ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setTrans(car)}
              >
                {/* {trans} */}
                {car === "SUV" ? <img src={suv} alt="DL logo" /> : null}
                {car === "VAN" ? <img src={van} alt="DL logo" /> : null}
                {car === "BUS" ? <img src={bus} alt="DL logo" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      {mainTrans.length > 0 ? (
        <p className="text-center">
          <span className="bold">
            {" "}
            Current Transportation Chosen: {mainTrans}{" "}
            {mainTrans === "SUV" ? "(MAX 6 Guests)" : null}
            {mainTrans === "VAN" ? "(MAX 15 Guests)" : null}
            {mainTrans === "BUS" ? "(MAX 20 Guests)" : null}
          </span>
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Current Transportation Chosen:</span>{" "}
          {mainTrans}
        </p>
      )}
      <hr />
    </Wrapper>
  );
  //{/* <input type="checkbox" /> */}
  // <img src={bus} alt="DL logo" />
  // <img src={van} alt="DL logo" />
  // <img src={suv} alt="DL logo" />
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    margin-right: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
