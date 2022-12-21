import React from "react";
import { GiBarrel, GiSaloon, GiGlassShot } from "react-icons/gi";
import styled from "styled-components";
import { priceFormat } from "../utils/helpers";
import { Link } from "react-router-dom";
//List View is responsible for displaying the tours in an inline view
const ListView = ({ tours }) => {
  return (
    <Wrapper>
      {tours.map((tour) => {
        const { id, category, url, name, price, desc } = tour;
        const renderIcon = () => {
          switch (category) {
            case "tour":
              return <GiBarrel size={17} />;
            case "stay":
              return <GiSaloon size={17} />;
            case "food":
              return <GiGlassShot size={17} />;
            case "event":
              return <GiGlassShot size={17} />;
            default:
              return <GiBarrel size={17} />;
          }
        };
        console.log(id);
        return (
          <article key={id}>
            <img src={url} alt={name} />
            <div>
              <div className="tour-icon">{renderIcon()}</div>
              <h4>{name}</h4>
              <h5 className="price">{priceFormat(price)}</h5>
              <p>{desc.substring(0, 150)}...</p>
              <Link to={`/tours/${id}`} className="btn">
                Book Now
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    display: inline-block;
    margin-left: 0.2rem;
  }
  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .tour-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
