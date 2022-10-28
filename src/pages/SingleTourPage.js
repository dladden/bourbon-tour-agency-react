import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"; //hooks from react router dom to access the url parameters
import { useToursContext } from "../context/tours_context";
import { single_tour_url as url } from "../utils/constants"; //single product url ending with ending: '?id='
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  TourImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleTourPage = () => {
  //attaching the id (provided in the object) to the url
  const { id } = useParams(); //getting the id property in the object
  //pulling the variables from the context hook
  const {
    single_tour_loading: loading,
    single_tour_error: error,
    single_tour: tour,
    fetchSingleTour,
  } = useToursContext();

  // console.log(useParams());
  return <h4>single product page</h4>;
};

const Wrapper = styled.main`
  .tour-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .tour-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleTourPage;
