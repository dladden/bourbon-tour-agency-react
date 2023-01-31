import React, { useState, useEffect } from "react";
import card from "../assets/checkout_card.svg";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js"; //function from Stripe for React
//Hook imports from Stripe for React
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios"; //axios for post function request
import { useCartContext } from "../context/cart_context"; //cart context
import { useUserContext } from "../context/user_context"; //user context
import { priceFormat } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { FaAssistiveListeningSystems } from "react-icons/fa";
//This is test public API key which is passed with the component for authentication
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

//CheckoutForm component returns all stripe
//this Component makes a post call to Strapi using netlify funcs in create-payment-intent.js
//, then it gets a callback with clientSecret which is then used to
const CheckoutForm = () => {
  //globals variables used in createPaymentIntent
  const { cart, total_amount, tax, clearCart } = useCartContext();
  console.log(cart);
  const total_tax = total_amount * (tax / 100);

  const { ids, names, guests, transports } = {
    ids: cart.map((a) => a.id),
    names: cart.map((a) => a.name),
    guests: cart.map((a) => a.guests),
    transports: cart.map((a) => a.trans),
  };
  // console.log(ids, names, guests, transports);

  const { tourUser } = useUserContext();
  const navigate = useNavigate();
  // console.log(total_amount);
  //STRIPE state variables: If the payment is successful
  const [succeeded, setSucceeded] = useState(false); //initialized as FALSE
  const [error, setError] = useState(null);
  //variables for processing states
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  //clientSecret is Stripe callback API token for user
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const total_formatted = priceFormat(total_amount);

  //
  const [purchaseDate, setPurchaseDate] = useState("");

  //createPaymentIntent uses axios to POST the data when the component mounts to Stripe.
  //This is done with netlify serverless functions to post it to the server
  //This get request is done with a try and catch to catch errors its equvilent
  //to an https request from a server (in this case serverless netlify func.)
  const createPaymentIntent = async () => {
    try {
      //post request:
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        //data of the post request as a string:
        JSON.stringify({ cart, total_amount, tax })
      );
      //unique Secret pulled every time as soon as the user gets to checkout
      setClientSecret(data.clientSecret); //pulling client secret from response
      // console.log(data);
      // console.log(data.clientSecret);
    } catch (error) {
      // console.log(error.response);
    }
  };

  //orderSubmission is SMTP email which sends the a order confirmation to the sbt
  //business email with the data needed to further process the registration for
  //a tour. this email is sent using the serverless functions
  const orderSubmission = async () => {
    try {
      const response = await axios.post(
        "/.netlify/functions/order-submission",

        JSON.stringify({ cart, total_amount, tourUser })
      );
      if (!response.ok) {
        //all OK
        return;
      }
    } catch (error) {
      //error
    }
  }; //end async orderSubmission

  //this function takes care of the SendGrid dynamic email template that is sent to the signed-in
  //user upon payment confirmation passing the data needed to be shown to the user as a order
  //confirmation
  const orderConfirmation = async () => {
    try {
      const response = await axios.post(
        "/.netlify/functions/order-confirmation",

        JSON.stringify({ cart, total_formatted, tourUser })
      );
      if (!response.ok) {
        //all OK
        return;
      }
    } catch (error) {
      //error
    }
  };

  //useEffect that only invoked when component mounts bc of empty dependency array
  useEffect(() => {
    fetch(createPaymentIntent(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: names,
        currency: "USD",
        quantity: guests,
      }),
    });
    // eslint-disable-next-line
  }, []);
  console.log(ids);

  // cart.map((item) => {
  //   setPurchaseDate(item.date);
  // });

  const tourCart = () => {
    cart.map((item) => {
      setPurchaseDate(item.date);
    });
  };

  //handling change provided by Stripe API
  //This function uses the event which points to the event object
  const handleChange = async (event) => {
    //data requested
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }; //end handleChange

  //handling submit e = event Stripe docs
  const handleSubmit = async (e) => {
    e.preventDefault(); //stop the form from being submitted if there's an error
    setProcessing(true); //on submit the processing beings
    tourCart();
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: e.target.name.value,
          email: e.target.email.value,
        },
      },
    });
    //handling the error if processing fails
    if (payload.error) {
      setError(`Payment Failed: ${payload.error.message}`);
      setProcessing(false);
    }
    //else the processing was successful
    else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      orderSubmission();
      orderConfirmation();
      //Taking user back to home page, clearing cart --------------------------------------------------------------------
      setTimeout(() => {
        clearCart();
        navigate("/confirmation");
      }, 15000);
    }
  }; //end handleSubmit

  const cardStyle = {
    style: {
      base: {
        iconColor: "red",
        color: "red",
        lineHeight: "24px",
        fontWeight: "600",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div>
      <div class="wrapper">
        <div class="container">
          <form id="payment-form" onSubmit={handleSubmit}>
            <div>
              <img src={card} alt="Secure Checkout Logo" />
            </div>
            {/* ----------------------------------- */}
            <div class="card">
              <div class="img">
                <img src={tourUser.picture} alt="guest" />
              </div>
              <div class="infos">
                <div class="name">
                  <h2>{tourUser && tourUser.name}</h2>
                </div>
                <h4 class="text">
                  Total: {priceFormat(total_amount + total_tax)}
                </h4>
              </div>
            </div>

            {/* ------------------------------------ */}
            <h1>
              <i class="fas fa-shipping-fast"></i>
              Shipping Details
            </h1>
            <div class="name">
              <div>
                <label for="f-name">First</label>
                <input type="text" name="f-name" />
              </div>
              <div>
                <label for="l-name">Last</label>
                <input type="text" name="l-name" />
              </div>
            </div>
            <div class="street">
              <label for="name">Street</label>
              <input type="text" name="address" />
            </div>
            <div class="address-info">
              <div>
                <label for="city">City</label>
                <input type="text" name="city" />
              </div>
              <div>
                <label for="state">State</label>
                <input type="text" name="state" />
              </div>
              <div>
                <label for="zip">Zip</label>
                <input type="text" name="zip" />
              </div>
            </div>
            <h1>
              <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
              <label for="card-num">Credit Card No.</label>
              <input type="text" name="card-num" />
            </div>
            <div class="cc-info">
              <div>
                <label for="card-num">Exp</label>
                <input type="text" name="expire" />
              </div>
              <div>
                <label for="card-num">CCV</label>
                <input type="text" name="security" />
              </div>
            </div>
            <div class="btns">
              <button>Purchase</button>
            </div>
            <div>
              <CardElement
                id="card-element"
                options={cardStyle}
                onChange={handleChange}
              />
              {/* Submit Button is disabled if the payment is processing or disabled or succeeded */}
              <button
                disabled={processing || disabled || succeeded}
                id="submit"
              >
                <span id="button-text">
                  {processing ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Pay"
                  )}
                </span>
              </button>
              {/* Error Handling */}
              {error && (
                <div className="card-error" role="alert">
                  {error}
                </div>
              )}
              {/* Success Message */}
              <p
                className={
                  succeeded ? "result-message" : "result-message hidden"
                }
              >
                {" "}
                Payment Successful Stripe link:{" "}
                <a href={`https://dashboard.stripe.com/test/payments`}>
                  Stripe Dashboard
                </a>
                Refresh the Page
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* CardElement is embedded directly from Stripe */}
    </div>
  );
}; //end CheckoutForm

//The rendering is happening here: element with api wraps the checkout form
const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: var(--content-radius);
    padding: 60px;
    background-color: var(--clr-primary-10);
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }

  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }

  /*
=============== 
Container
===============
*/

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .container {
    align-self: center;
    width: 100%;
    padding: 5% 5%;
  }

  h1 {
    align-self: left;
  }

  form {
    width: 100%;

    > * {
      margin-top: 20px;
    }

    input {
      width: 100%;
      min-height: 25px;
      border: 0;
      font-size: 1rem;
      letter-spacing: 0.15rem;
      font-family: "Arimo";
      margin-top: 5px;
      color: $maroon;
      border-radius: 4px;
    }

    label {
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      color: $maroon;
    }

    h1 {
      font-size: 24px;
      line-height: 10px;
      color: $title;
      letter-spacing: 1px;
    }

    h1:nth-of-type(2) {
      margin-top: 10%;
    }
  }

  .name {
    justify-content: space-between;
    display: flex;
    width: 100%;

    div {
      width: 45%;
    }
  }

  .address-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 30%;
    }
  }

  .cc-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 45%;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      margin: 3px 0;
      height: 30px;
      width: 40%;
      color: #cfc9e1;
      background-color: #4a3b76;
      text-transform: uppercase;
      border: 0;
      border-radius: 0.3rem;
      letter-spacing: 2px;

      &:hover {
        animation-name: btn-hov;
        animation-duration: 550ms;
        animation-fill-mode: forwards;
      }
    }
  }

  @keyframes btn-hov {
    100% {
      background-color: #cfc9e1;
      color: #4a3b76;
      transform: scale(1.05);
    }
  }

  input:focus,
  button:focus {
    outline: none;
  }

  @media (max-width: 736px) {
    .wrapper {
      width: 100%;
    }

    .container {
      color: #eb9478;
      width: 100%;
    }

    .btns {
      align-items: center;

      button {
        width: 50%;
      }
    }

    form h1 {
      text-align: left;
    }

    .name,
    .address-info,
    .cc-info {
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      div {
        align-items: left;
        flex-direction: column;
        width: 100%;
        display: flex;
      }
    }

    .street,
    .cc-num {
      text-align: center;
    }

    input {
      margin: 5px 0;
      min-height: 30px;
    }
  }

  /*
=============== 
Container
===============
*/

  img {
    max-width: 100%;
    display: block;
  }
  /* Utilities */
  .card::after,
  .card img {
    border-radius: 50%;
  }
  body,
  .card,
  .stats {
    display: flex;
  }

  .card {
    padding: 2.5rem 2rem;
    border-radius: var(--content-radius);
    background-color: var(--clr-white);
    max-width: 500px;
    // box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
    margin: 1rem;
    position: relative;
    transform-style: preserve-3d;
    overflow: hidden;
  }
  .card::before,
  .card::after {
    content: "";
    position: absolute;
    z-index: -1;
  }
  .card::before {
  }
  .card::after {
    height: 15rem;
    width: 15rem;
    background-color: #4172f5aa;
    top: -8rem;
    right: -8rem;
    box-shadow: 2rem 6rem 0 -3rem #fff;
  }

  .card img {
    width: 8rem;
    min-width: 80px;
    box-shadow: 0 0 0 5px #fff;
  }

  .infos {
    margin-left: 1.5rem;
  }

  .name {
    margin-bottom: 1rem;
  }
  .name h2 {
    font-size: 1.3rem;
  }
  .name h4 {
    font-size: 0.8rem;
    color: #333;
  }

  .text {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .stats {
    margin-bottom: 1rem;
  }
  .stats li {
    min-width: 5rem;
  }
  .stats li h3 {
    font-size: 0.99rem;
  }
  .stats li h4 {
    font-size: 0.75rem;
  }

  .links button {
    font-family: "Poppins", sans-serif;
    min-width: 120px;
    padding: 0.5rem;
    border: 1px solid #222;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  .links .follow,
  .links .view:hover {
    background-color: #222;
    color: #fff;
  }
  .links .view,
  .links .follow:hover {
    background-color: transparent;
    color: #222;
  }

  @media screen and (max-width: 450px) {
    .card {
      display: block;
    }
    .infos {
      margin-left: 0;
      margin-top: 1.5rem;
    }
    .links button {
      min-width: 100px;
    }
  }
`;

export default StripeCheckout;
