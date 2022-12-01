import React, { useState } from "react";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, priceFormat } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  //importing the filter context
  //search_text - used in the SEARCH INPUT to get the value: actual text and the name of the action: "search_text"
  //..
  //updateFilters - ran on change to update the function
  const {
    filters: {
      search_text,
      category,
      distillery,
      transport,
      min_price,
      max_price,
      price,
      special_res,
    },
    updateFilters,
    clearFilters,
    all_tours,
  } = useFilterContext();
  //These functions pass in the raw data and a string with a name for an array which are used in getUniqueValues
  const categories = getUniqueValues(all_tours, "category");
  const distilleries = getUniqueValues(all_tours, "dist");
  const transportation = getUniqueValues(all_tours, "trans");
  // console.log(transportation, distilleries, categories);
  const [mainTrans, setTrans] = useState(transportation[0]);
  return (
    <Wrapper>
      <div className="content">
        {/* default action onSubmit which refreshes the page, prevented with preventDefault */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* SEARCH INPUT */}
          <div className="form-control">
            <input
              className="search-input"
              type="text"
              name="search_text"
              placeholder="Search"
              value={search_text}
              onChange={updateFilters}
            />
          </div>
          {/* END SEARCH INPUT */}
          {/* CATEGORIES */}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((c, i) => {
                return (
                  <button
                    key={i}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* END CATEGORIES */}
          {/* DISTILLERIES SELECTION*/}
          <div className="form-control">
            <h5>Distilleries</h5>
            <select
              id="distillery"
              name="distillery"
              value={distillery}
              onChange={updateFilters}
              className="company"
            >
              {distilleries.map((c, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* END DISTILLERIES SELECTION*/}
          {/* TRANSPORTATION SELECTION -----------------NEEDS TO BE FIXED*/}
          <div className="form-control">
            <h5>Transportation</h5>
            <div className="transport">
              {transportation.map((car, index) => {
                if (car === "all") {
                  return (
                    <button
                      key={index}
                      name="transport"
                      onClick={() => setTrans(car)}
                      // onClick={updateFilters}
                      data-transport="all"
                      className={`${
                        mainTrans === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="transport"
                    className={`${
                      mainTrans === car ? "trans-btn active" : "trans-btn"
                    }`}
                    onClick={() => setTrans(car)}
                    // onClick={updateFilters}
                    data-transport={mainTrans}
                  >
                    {console.log(mainTrans)}
                    {car === "SUV" ? <img src={suv} alt="DL logo" /> : null}
                    {car === "VAN" ? <img src={van} alt="DL logo" /> : null}
                    {car === "BUS" ? <img src={bus} alt="DL logo" /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* END TRANSPORTATION SELECTION*/}
          {/* PRICE (controlled input)*/}
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{priceFormat(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* END PRICE */}
          {/* Special Reservation */}
          <div className="form-control reservation">
            <label htmlFor="reservation">Special Reservation:</label>
            <input
              type="checkbox"
              name="special_res"
              id="reservation"
              onChange={updateFilters}
              checked={special_res}
            />
          </div>
          {/* END Special Reservation */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Clear Filter
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .transport {
    // display: flex;
    // align-items: center;
  }
  .trans-btn {
    display: inline-block;
    grid-template-columns: 2fr;
    margin-right: 0rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;

    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }

  @media (min-width: 992px) {
    .trans-btn {
      margin-left: 0rem;
      grid-template-columns: 2fr;
      grid-column-gap: 0px;
      align-items: left;
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    color: var(--clr-grey-5);
    margin-bottom: 0.25rem;
  }
  .reservation {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }

  // input[type="range"] {
  //   -webkit-appearance: none;
  //   width: 150px;
  //   height: 10px;
  //   margin-right: 10px;
  //   border-radius: 6px;
  //   outline: 0;
  //   background: #ccc;
  // }

  // input[type="range"]::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  //   height: 18px;
  //   width: 18px;
  //   border-radius: 3px;
  //   background: orange;
  //   border-radius: 50%;
  //   border: 0;
  //   cursor: pointer;
  // }
`;

export default Filters;
