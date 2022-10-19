import React from "react";
import { useToursContext } from "../context/tours_context"; //hook
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Tour from "./Tour";
//TODO: check for loading, check for error, and iterate the featured tours
const FeaturedTours = () => {
  //getting the object from tours_context
  const {
    tours_loading: loading, //tours_loading with alias of loading
    tours_error: error,
    featured_tours: featured,
  } = useToursContext;
  //displaying loading if loading is true and url is
  if (loading) {
    return <Loading />;
  }
  //displaying loading if loading is true
  if (error) {
    return <Error />;
  }
  return <h4>Featured Tours</h4>;
};

const Wrapper = styled.section`s
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedTours;
