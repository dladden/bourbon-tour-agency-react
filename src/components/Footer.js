import React from "react";
import styled from "styled-components";
import seal from "../assets/seal.webp";
import socialLinks from "../utils/social_links";
import { HashLink as Link } from "react-router-hash-link";
import { MdLocationPin } from "react-icons/md";
//Footer is used to show the footer as one of the global components
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <section className="ft-main">
          <div className="seal">
            <img
              src={seal}
              title="Shelby Bourbon Tours Wax Seal"
              alt="Shelby Bourbon Tours Wax Seal with Lion holding Bourbon Bottle in the Left Paw"
              width="904"
              height="416"
            />
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li>
                <Link smooth to="/about#about-shelby-bourbon-tours">
                  About
                </Link>
              </li>
              <li>
                <Link smooth to="/#image-slider">
                  Customers
                </Link>
              </li>
              <li>
                <Link smooth to="/faq#questions">
                  Our Services
                </Link>
              </li>
              <li>
                <Link smooth to="/#featured-tours">
                  Featured Tours
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li>
                <Link smooth to="/about#distilleries">
                  Distilleries
                </Link>
              </li>
              <li>
                <Link smooth to="/contact#form">
                  Documents
                </Link>
              </li>
              <li>
                <Link smooth to="/privacy#privacy-section">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link smooth to="/faq#questions">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>
                <Link smooth to="/contact#contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link smooth to="/contact#custom-tour">
                  Custom Tour
                </Link>
              </li>
              <li>
                <Link smooth to="/contact#cancellations">
                  Cancellations
                </Link>
              </li>
              <li>
                <Link smooth to="/faq#questions">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            {/* <h2 className="ft-title">Contact</h2> */}
            <div className="location">
              <MdLocationPin className="location-item" />
            </div>
            <a
              className="location-text"
              href="https://goo.gl/maps/epvHggAnfnQE5jLK9"
              target="_blank"
              rel="noreferrer"
            >
              Shelbyville, KY
            </a>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <h5 className="footer-text">
              If you like to stay one step ahead on your bourbon game, subscribe
              to our newsletter and follow us on Instagram or Facebook! We not
              only talk about distilleries and tours but also talk about the
              history and share our favorite recipes and, of course, our
              favorite bourbon!
            </h5>
          </div>
        </section>
        <section className="ft-social">
          <div className="ft-social-list social-link">
            <div className="social-links">
              {socialLinks.map((link) => {
                return (
                  <a
                    href={link.url}
                    title={link.alt}
                    target="_blank"
                    rel="noreferrer"
                    key={link.id}
                    className="social-link"
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <Link smooth to="/privacy#privacy-section">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link smooth to="/privacy#privacy-section">
                Privacy Policy
              </Link>
            </li>
            <li>&copy; {new Date().getFullYear()} Shelby Bourbon Tours</li>
          </ul>
        </section>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  //----------------------------
  /* Generic styling */
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  footer {
    background-color: var(--clr-background-main);
    color: #bbb;
    line-height: 1.5;
  }
  footer a {
    text-decoration: none;
    color: var(--clr-primary-5);
  }

  .footer-text {
    font-size: 1.3rem;
    text-transform: none;
    color: var(--clr-grey-3);
  }

  a:hover {
    text-decoration: underline;
  }
  .ft-title {
    text-decoration: underline;
    color: var(--clr-primary-5);
    font-size: 1.375rem;
    padding-bottom: 0.625rem;
  }
  /* Sticks footer to bottom */
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .container {
    flex: 2;
  }
  /* Footer main */
  .ft-main {
    padding: 1.25rem 3rem;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 20rem;
      align: center;
      padding-left: 0rem;
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (min-width: 29.8125rem /* 477px */) {
    .ft-main {
      img {
        width: 30rem;
        align: center;
        padding-left: 3rem;
        width: 90%;
      }
      justify-content: left;
    }
  }
  @media only screen and (min-width: 77.5rem /* 1240px */) {
    .ft-main {
      img {
        width: 583px;
        align: center;
        padding-left: 1.5rem;
      }
      justify-content: left;
    }
  }
  .ft-main-item {
    padding: 1rem;
    min-width: 12.5rem;
    padding-left: 2rem;
  }
  .ft-main-item ul li {
    font-size: 1.3rem;
  }

  /* Footer social */
  .social-links {
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }
  .social-link {
    font-size: 1.75rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .location-item {
    font-size: 2rem;
    color: var(--clr-grey-1);
  }
  .location {
    padding-left: 2.5rem;
  }
  .location-text {
    font-size: 1.3rem;
  }
  .ft-social {
    padding: 0 1.875rem 1.25rem;
  }
  .ft-social-list {
    display: flex;
    justify-content: center;
    border-top: 2px #777 solid;
    padding-top: 1.25rem;
  }
  .ft-social-list li {
    margin: 0.5rem;
    font-size: 1.25rem;
  }
  /* Footer legal */
  .ft-legal {
    padding: 0.9375rem 1.875rem;
    background-color: var(--clr-grey-3);
  }
  .ft-legal-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .ft-legal-list li {
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
  }
  /* one before the last child */
  .ft-legal-list li:nth-last-child(2) {
    flex: 1;
  }
`;

export default Footer;
