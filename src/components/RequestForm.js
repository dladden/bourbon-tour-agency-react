import React from "react";
import { BsFileEarmarkPdfFill, BsCheckSquare } from "react-icons/bs";
import styled from "styled-components";
import form from "../assets/SBT-Request-Form-2023.pdf";
import { HashLink as Link } from "react-router-hash-link";
//Form lets user download document from the site

const downloadPdf = () => {
  const link = document.createElement("a"); // Create a new <a> (anchor) element
  link.href = form; // Set the href attribute of the anchor element to the path of the PDF file
  link.download = "Request-Form-2023.pdf"; // Set the download attribute to specify the desired filename when downloaded
  document.body.appendChild(link); // Append the anchor element to the <body> of the document
  link.click(); // Simulate a click event on the anchor element
  document.body.removeChild(link); // Remove the anchor element from the <body> after the click event
};

const RequestForm = () => {
  return (
    <Wrapper>
      <div>
        <div className="contact-form">
          <h2 className="heading">Forms</h2>
          <div className="event-card-form">
            <div className="left-form">
              <div className="qr-code-form color-form">
                <BsFileEarmarkPdfFill size={80} />
              </div>

              <div className="form-info">
                <h3 className="form-name">
                  <BsCheckSquare /> Tour Request Form
                </h3>
                <p className="event-detail">
                  Fill out the tour request form send it to us and we will
                  respond with a quote in 24 hours.
                </p>
              </div>
            </div>

            <div className="right-gap"></div>
            <div className="right">
              <Link to="#" onClick={downloadPdf} className="button-form">
                {" "}
                DOWNLOAD
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

  .contact-form {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .form-name {
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .form-name {
      width: 100%;
      font-size: 20px;
    }
  }

  .event-card-form {
    width: 100%;
    background: var(--clr-white);
    border-radius: var(--content-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .event-card-form:hover {
    box-shadow: var(--clr-primary-9) 0 0 10px 5px;
  }

  .left-form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .qr-code-form {
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

  .color-form {
    background: #fff;
  }

  .event-detail {
    font-size: 15px;
    color: var(--clr-grey-2)
    margin-top: 5px;
  }

  .button-form {
    width: 6rem;
    // display: inline-block;
    background: var(--clr-primary-4);
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: var(--btn-radius);
  }
  .button-form:hover {
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
  .button-form {
    width: 8rem;
    font-size: 15px;
    padding: 10px 10px;
    }
  .button-form:hover {
    box-shadow: var(--clr-primary-9) 0 0 5px 1px;
    transform: scale(1.1);
    }
  }
`;

export default RequestForm;
