import React from "react";
import styled from "styled-components";
import seal from "../assets/seal.webp";
import socialLinks from "../utils/social_links";
//Footer is used to show the footer as one of the global components
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <section className="ft-main">
          <div className="seal">
            <img src={seal} alt="Shelby Bourbon Tours" />
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis
              possimus fuga nam ratione ab sint aut optio quas doloribus harum,
              suscipit eius voluptatum. Sit et quae impedit porro rem.
            </h5>
          </div>
        </section>
        <section className="ft-social">
          <div className="ft-social-list social-link">
            <div className="social-links ">
              {socialLinks.map((link) => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
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
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              &copy; {new Date().getFullYear()} Copyright Shelby Bourbon Tours
              LLC
            </li>
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
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
  .ft-title {
    color: black;

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
      padding-left: 1rem;
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (min-width: 29.8125rem /* 477px */) {
    .ft-main {
      img {
        width: 30rem;
        align: center;
        padding-left: 5rem;
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
        padding-left: 2rem;
      }
      justify-content: left;
    }
  }
  .ft-main-item {
    padding: 1rem;
    min-width: 12.5rem;
    padding-left: 2rem;
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

  .ft-social {
    padding: 0 1.875rem 1.25rem;
  }
  .ft-social-list {
    display: flex;
    justify-content: center;
    border-top: 1px #777 solid;
    padding-top: 1.25rem;
  }
  .ft-social-list li {
    margin: 0.5rem;
    font-size: 1.25rem;
  }
  /* Footer legal */
  .ft-legal {
    padding: 0.9375rem 1.875rem;
    background-color: #3e3b35;
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
