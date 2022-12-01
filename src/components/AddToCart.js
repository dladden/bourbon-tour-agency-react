import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
//Component responsible for transportation type and count of guests
const AddToCart = ({ tour }) => {
  const { id, guests, trans } = tour;
  //mainTrans = current transportation, setTrans = sets transportation
  //default transportation will always be first array item
  //in this case it is suv
  const [mainTrans, setTrans] = useState(trans[0]);
  //
  const [guest, setGuest] = useState(1);
  // console.log(trans);

  //The increase function uses count variable as storage and increments value by on
  //The function then prevents incremented amount from getting larger then the set max guests data
  const increase = () => {
    setGuest((count) => {
      let tempGuest = count + 1;
      if (tempGuest > guests) {
        tempGuest = guests;
      }
      return tempGuest;
    });
  };

  const decrease = () => {
    setGuest((count) => {
      let tempGuest = count - 1;
      if (tempGuest < 1) {
        tempGuest = 1;
      }
      return tempGuest;
    });
  };

  return (
    <Wrapper>
      <div className="trans">
        <span>Transportation: </span>
        <div>
          {trans.map((car, index) => {
            //for every item return a button then we wrap it in svg using conditional rendering
            return (
              <button
                key={index}
                //terinary operator:"?" if mainTrans is a car that is the first choice display active
                //":" if not: just display "trans-btn" styling
                className={`${
                  mainTrans === car ? "trans-btn active" : "trans-btn"
                }`}
                onClick={() => setTrans(car)}
              >
                {/* {console.log(mainTrans)} */}
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
      <div className="btn-container">
        <AmountButtons guest={guest} increase={increase} decrease={decrease} />
        Select Total Guests
        <hr className="hr" />
        <Link to="/cart" className="btn">
          Book Tour
        </Link>
      </div>
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
  .trans {
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
  .trans-btn {
    display: inline-block;
    margin-right: 1rem;
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
  .hr {
    width: 126px;
  }

  @media (min-width: 992px) {
    .trans-btn {
      margin-left: 3rem;
      grid-template-columns: 20fr 20fr;
      grid-column-gap: 20px;
      align-items: center;
    }
    .hr {
      width: 1px;
    }
  }
  @media (min-width: 810px) {
    .hr {
      width: 140px;
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
    width: 132.5px;
  }
`;
export default AddToCart;
