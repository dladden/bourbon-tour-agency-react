import React from 'react';
import styled from 'styled-components';
import confirmation from '../assets/confirmation.svg';
import logo from '../assets/indent_logo_color.svg';
import { useUserContext } from '../context/user_context';
import { Link } from 'react-router-dom';

//Component responsible for transportation type and count of guests
const Confirmation = () => {
  const { tourUser } = useUserContext();
  return (
    <Wrapper>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <img
                  className="form-logo"
                  src={confirmation}
                  title="Thank You! Shelby Bourbon Tours"
                  alt="Thank You! Order Confirmation, with Bourbon Glass in Hand"
                />
                <div className="container-logo">
                  <img
                    className="form-logo"
                    src={logo}
                    title="Shelby Bourbon Tours Logo"
                    alt="Shelby Bourbon Tours Logo of A Lion with a Bourbon Bottle in the Left Paw"
                  />
                </div>
                <h3>Thank You For Your Reservation!</h3>
                <h3>{tourUser.name}</h3>
                <p>
                  An Email Confirmation is sent to{' '}
                  <strong>the Email you provided</strong>. We will contact you
                  within 24 hours with more information about your tour! More
                  importantly, don't forget to set a{' '}
                  <strong>calendar reminder</strong>!
                </p>
                <p>
                  If you wish to receive an invoice to a different email,
                  contact us on any platforms here:
                </p>
                {/* TODO: Setup validate */}
                <Link to="/contact" className="btn">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
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
    padding-top: 2rem;
    padding-bottom: 2rem;
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
    padding-top: 10px;
  }
  .container-logo {
    margin: auto;
    width: 50%;
  }
  .form-logo {
    justify-content: center;
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
    .form-logo {
    }
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
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .form-content h3.form-title {
    margin-bottom: 30px;
  }

  .form-content p {
    color: var(--clr-primary-4);
    text-align: center;
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
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    padding: 5px;
  }
`;
export default Confirmation;
