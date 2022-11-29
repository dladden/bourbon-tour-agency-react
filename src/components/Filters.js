import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
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
      trans,
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
  console.log(categories);
  console.log(distilleries);
  console.log(transportation);
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
        </form>
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
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
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
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
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
`;

export default Filters;
