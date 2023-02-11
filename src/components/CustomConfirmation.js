import React, { useState } from "react";
import styled from "styled-components";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import c_tour from "../assets/custom_tour.svg";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import { NewsLetter } from "../components";

//Component responsible for transportation type and count of guests
const CustomConfirmation = () => {
  return (
    <Wrapper>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <img src={c_tour} alt="Custom Tour" />
                <h3>Thank You For Your Purchase!</h3>
                <p>
                  An Email Confirmation will be sent to{" "}
                  <strong>
                    The Email you provided will receive confirmation
                  </strong>
                </p>
                {/* TODO: Setup validate */}
                <Link to="/" className="btn">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );

  //{/* <input type="checkbox" /> */}
  // <img src={bus} alt="DL logo" />
  // <img src={van} alt="DL logo" />
  // <img src={suv} alt="DL logo" />
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  *,
  body {
    font-weight: 400;
  }

  html,
  body {
    height: 100%;
    background-color: #152733;
  }

  .form-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }

  .form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 40px;
  }

  .form-content .form-items {
    border: 4px solid #fff;
    padding: 20px;
    display: inline-block;
    width: 100%;
    min-height: 40px;
    min-width: 320px;
    max-width: 400px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 16px;
    text-align: left;
  }
  @media (min-width: 690px) {
    .form-content .form-items {
      padding: 40px;
      width: 100%;
      min-width: 695px;
    }
  }

  @media (min-width: 992px) {
    .form-content .form-items {
      width: 100%;
      min-width: 695px;
    }
  }

  .form-content h3 {
    color: var(--clr-primary-4);
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .form-content h3.form-title {
    margin-bottom: 30px;
  }

  .form-content p {
    color: var(--clr-primary-4);
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .form-content label,
  .was-validated .form-check-input:invalid ~ .form-check-label,
  .was-validated .form-check-input:valid ~ .form-check-label {
    color: #fff;
  }

  .form-content input[type="text"],
  .form-content input[type="comment"],
  .form-content input[type="email"],
  .form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 0.6rem;
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8d8d8d;
    margin-top: 16px;
  }

  .btn-primary {
    background-color: #6c757d;
    outline: none;
    border: 0px;
    box-shadow: none;
  }

  .form-content textarea:hover,
  .form-content textarea:focus {
    border: 0;
    background-color: #ebeff8;
    color: #8d8d8d;
  }

  .valid-feedback {
    color: var(--clr-primary-4);
  }
`;
export default CustomConfirmation;
