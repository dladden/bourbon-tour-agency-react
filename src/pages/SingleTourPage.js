import '@fontsource/cormorant-garamond/700.css';
import React, { useEffect } from 'react';
import {
  GiBarrel,
  GiSaloon,
  GiGlassShot,
  GiBeerBottle,
  GiTicket,
} from 'react-icons/gi';
import { useParams, useNavigate } from 'react-router-dom'; //hooks from react router dom to access the url parameters
import { useToursContext } from '../context/tours_context';
import { single_tour_url as url } from '../utils/constants'; //single product url ending with ending: '?id=' calling it url
import { priceFormat } from '../utils/helpers';
import {
  Seo,
  Loading,
  Error,
  TourImages,
  AddToCart,
  LinkButton,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { HashLink as Link } from 'react-router-hash-link';
//Page responsible for layout of akk component for single tour
const SingleTourPage = () => {
  //attaching the id (provided in the object) to the url
  const { id } = useParams(); //getting the id property in the object
  const navigate = useNavigate(); //getting the history from reactRouter Dom
  //pulling the variables from the context hook

  const {
    single_tour_loading: loading,
    single_tour_error: error,
    single_tour: tour,
    fetchSingleTour,
  } = useToursContext();
  //when the component loads invoke useEffect
  //React Warning: React Hook useEffect has a missing dependency. to disable the
  //warning "eslint-disable-next-line" is used
  useEffect(() => {
    if (id) fetchSingleTour(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  //setting up error which sends user back to the home page
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 4000); //3000 milliseconds
    }
    //eslint-disable-next-line
  }, [error]);
  //setting up the error view and loading
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  if (!tour || Object.keys(tour).length === 0) {
    return <Loading />; //fetching issues with airtable have to use this
  }

  const {
    category,
    name,
    available,
    price,
    images,
    desc,
    dist,
    stars,
    rev_url,
  } = tour;
  //id is passed to addToCart to check uniqueness in the cart
  const DefaultIcon = () => {
    // Return your default icon component here
    return <GiBarrel />;
  };
  const renderIcon = () => {
    switch (category) {
      case 'tour':
        return <GiBarrel />;
      case 'stay':
        return <GiSaloon />;
      case 'food':
        return <GiGlassShot />;
      case 'event':
        return <GiTicket />;
      default:
        return <DefaultIcon />;
    }
  };

  return (
    <Wrapper>
      <Seo
        title="Tours"
        content="Tour Distilleries in Kentucky form Shelby Bourbon Tours Selection. Anywhere on the map of Kentucky, from Louisville, Shelby County, Frankfort, and Lexington."
        robots="index"
      />
      {/* passing the tour at the end for conditional rendering */}
      <PageHero title={name} tour />
      <div className="section section-center page">
        <Link smooth to="/tours#tours-list" className="btn">
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
            <Stars stars={stars} rev_url={rev_url} category={category} />
            <h5 className="price">
              {priceFormat(price)}{" "}
              <span className="per-person">
                (or <span className="highlight">$150</span> per person)
              </span>
            </h5>
            <p className="desc">{desc}</p>
            <p className="info-title">Distillery Choices:</p>
            <p className="info">
              {dist?.map((distillery, index) => {
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

            {/* using conditional rendering  and passing the all props to AddToCart*/}
            {available === true ? (
              <AddToCart tour={tour} />
            ) : (
              <LinkButton tour={tour} />
            )}
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
  .content {
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
    font-weight: 600;
    font-size: 1.25rem;
  }
  .per-person {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--clr-grey-5);
  }
  .highlight {
    color: var(--clr-primary-5); //HERE distinct accent
    font-weight: 700;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    font-size: 1.3rem;
  }
  .info-title {
    color: var(--clr-primary-5);
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0rem;
  }
  .info {
    color: var(--clr-primary-5);
    text-transform: capitalize;
    font-size: 1.2rem;
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
      align-items: top;
    }
    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .per-person {
      margin-left: 0;
      font-size: 0.95rem;
      color: var(--clr-grey-6);
    }
    .highlight {
    color: var(--clr-primary-7); //HERE distinct accent
    font-weight: 700;
  }
  }
  @media (min-width: 1000px) {
    .info {
      grid-template-columns: 145px repeat(2, 155px);
      grid-column-gap: 0px;
      justify-items: left;
      //align-items: left;
    }
  }
  @media (min-width: 1300px) {
    .info {
      grid-template-columns: 155px repeat(3, 155px);
      grid-column-gap: 0px;
      justify-items: left;
      //align-items: left;
    }
  }
`;

export default SingleTourPage;
