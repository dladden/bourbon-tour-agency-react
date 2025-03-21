import React from "react";
import { TbZoomQuestion, TbInfoCircle } from "react-icons/tb";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
//List View is responsible for displaying the tours in an inline view
const Faq = () => {
  return (
    <Wrapper>
      <div>
        <div className="contact-faq">
          <h2 className="heading">Frequently Asked Questions</h2>
          <div className="event-card-faq">
            <div className="left-faq">
              <div className="qr-code-faq color-faq">
                <TbZoomQuestion size={70} />
              </div>

              <div className="faq-info">
                <h3 className="faq-name">
                  {" "}
                  <TbInfoCircle /> Visit Our FAQ
                </h3>
                <p className="event-detail">
                  Check to see if your question has already been answered in our
                  FAQ page!
                </p>
              </div>
            </div>

            <div className="right-gap"></div>
            <div className="right">
              <Link smooth to="/faq#questions" className="button-faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    transition: ease 0.5s;
  }

  .heading {
    text-align: center;
  }

  .contact-faq {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .faq-name {
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .faq-name {
      width: 100%;
      font-size: 20px;
    }
  }

  .event-card-faq {
    width: 100%;
    background: var(--clr-white);
    border-radius: var(--content-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .event-card-faq:hover {
    box-shadow: var(--clr-primary-9) 0 0 10px 5px;
  }

  .left-faq {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .qr-code-faq {
    flex: 0 0 80px;
    width: 100px;
    height: 80px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }

  .color-faq {
    background: #fff;
  }

  .event-detail {
    font-size: 1.1rem;
    color: var(--clr-grey-2)
    margin-top: 5px;
  }

  .button-faq {
    width: 4rem;
    // display: inline-block;
    background: var(--clr-primary-4);
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: var(--btn-radius);
  }
  .button-faq:hover {
    box-shadow: var(--clr-primary-9) 0 0 5px 1px;
    transform: scale(1.1);
  }

  @media  screen and (min-width: 576px) {
    .event-detail {
      width: 100%;
      font-size: 17px;
      }
  }
  @media  screen and (min-width: 376px) {
  .button-faq {
    width: 5rem;
    font-size: 15px;
    padding: 10px 5px;
    }
  .button-faq:hover {
    box-shadow: var(--clr-primary-9) 0 0 5px 1px;
    transform: scale(1.1);
    }
  }
`;

export default Faq;
