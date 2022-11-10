import React, { useEffect } from "react";
import {
  GiBarrel,
  GiSaloon,
  GiSteamLocomotive,
  GiGlassShot,
  GiBeerBottle,
} from "react-icons/gi";
import { useParams, useHistory } from "react-router-dom"; //hooks from react router dom to access the url parameters
import { useToursContext } from "../context/tours_context";
import { single_tour_url as url } from "../utils/constants"; //single product url ending with ending: '?id=' calling it url
import { priceFormat } from "../utils/helpers";
import {
  Loading,
  Error,
  TourImages,
  AddToCart,
  Stars,
  PageHero,
  CalendarPicker,
} from "../components";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

const SingleTourPage = () => {
  //attaching the id (provided in the object) to the url
  const { id } = useParams(); //getting the id property in the object
  const history = useHistory(); //getting the history from reactRouter Dom
  // console.log(useParams());
  //pulling the variables from the context hook

  const {
    single_tour_loading: loading,
    single_tour_error: error,
    single_tour: tour,
    fetchSingleTour,
  } = useToursContext();
  //when the component loads invoke useEffect
  useEffect(() => {
    fetchSingleTour(`${url}${id}`);
  }, [id]);
  // console.log(tour);

  //setting up error which sends user back to the home page
  useEffect(() => {
    // console.log(error);
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000); //3000 miliseconds
    }
  }, [error]);
  //setting up the error view and loading
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    id: tour_id,
    category,
    name,
    available,
    price,
    images,
    desc,
    trans,
    dist,
    guests,
    stars,
    tour_url,
  } = tour;

  const renderIcon = () => {
    switch (category) {
      case "tour":
        return <GiBarrel />;
      case "stay":
        return <GiSaloon />;
      case "food":
        return <GiGlassShot />;
      case "event":
        return <GiGlassShot />;
    }
  };
  console.log(stars);

  // console.log(tour);

  return (
    <Wrapper>
      {/* passing the tour at the end for conditional rendering */}
      <PageHero title={name} tour />
      <div className="page section section-center">
        <Link to="/tours" className="btn">
          Back
        </Link>
        <div className="tour-center">
          {/* passing images prop into the component TourImages */}
          <TourImages images={images} />
          <section className="content">
            <div className="title-icon">
              <h2>{name}</h2>
              <h2 className="icon">{renderIcon()}</h2>
            </div>
            {/* passing the stars data to the Stars component */}
            <Stars stars={stars} />
            <h5 className="price">{priceFormat(price)}</h5>
            <p className="desc">{desc}</p>
            <p className="info-title">Distilleries: </p>
            <p className="info">
              {dist?.map((distillery, index) => {
                // console.log(distillery);
                return (
                  <span
                    key={index}
                    value={distillery}
                    // style={{ marginLeft: ".5rem" }}
                  >
                    <GiBeerBottle />
                    {distillery}
                  </span>
                );
              })}
            </p>
            <CalendarPicker />
            <hr />
            {available == true && <AddToCart />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .tour-center {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }
  .title-icon {
    display: flex;
    justify-content: space-between;
  }
  .icon {
    bottom: -3;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info-title {
    text-transform: capitalize;
    font-weight: 700;
    margin-bottom: 0rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: minmax(60px, 950fr);
    grid-column-gap: 0px;
    align-items: center;
    span {
      font-weight: 600;
    }
  }
  @media (min-width: 992px) {
    .tour-center {
      grid-template-columns: 20fr 20fr;
      grid-column-gap: 20px;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 1000px) {
    .info {
      grid-template-columns: 145px repeat(2, 145px);
      grid-column-gap: 0px;
      justify-items: left;
      //align-items: left;
    }
  }
  @media (min-width: 1300px) {
    .info {
      grid-template-columns: 145px repeat(3, 145px);
      grid-column-gap: 0px;
      justify-items: left;
      //align-items: left;
    }
  }
`;

export default SingleTourPage;
