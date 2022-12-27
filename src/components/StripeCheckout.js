import React, { useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";
//This is test public API key which is passed with the component for authentication
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

//CheckoutForm component returns all stripe
//this Component makes a post call to Strapi using netlify funcs in create-payment-intent.js
//, then it gets a callback with clientSecret which is then used to
const CheckoutForm = () => {
  //globals variables used in createPaymentIntent
  const { cart, total_amount, clearCart } = useCartContext();
  const { tourUser } = useUserContext();
  const history = useHistory();
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
  //
  const [purchaseDate, setPurchaseDate] = useState("");

  //createPaymentIntent uses axios to post the data when the component mounts
  //This get request is done with a try and catch to catch errors its equvilent
  //to an https request from a server (in this case serverless netlify func.)
  const createPaymentIntent = async () => {
    try {
      //post request:
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        //data of the post request as a string:
        JSON.stringify({ cart, total_amount })
      );
      //unique Secret pulled every time as soon as the user gets to checkout
      setClientSecret(data.clientSecret); //pulling client secret from response
      // console.log(data);
      // console.log(data.clientSecret);
    } catch (error) {
      // console.log(error.response);
    }
  };
  //useEffect that only invoked when component mounts bc of empty dependency array
  useEffect(() => {
    fetch(createPaymentIntent(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });
    // eslint-disable-next-line
  }, []);
  console.log(cart);

  // cart.map((item) => {
  //   setPurchaseDate(item.date);
  // });

  const tourCart = () => {
    cart.map((item) => {
      setPurchaseDate(item.date);
    });
  };

  //handling change provided by Stripe API
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
      //Taking user back to home page, clearing cart
      setTimeout(() => {
        clearCart();
        history.push("/");
      }, 15000);
    }
  }; //end handleSubmit

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
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
      {succeeded ? (
        <article>
          <h4>Thank You</h4>
          <h4>Your Payment Was Successful</h4>
          <h4>Redirect to home Page</h4>
        </article>
      ) : (
        <article>
          Hello, {tourUser && tourUser.name}
          {/* {console.log(tourUser.email)} */}
          <p>Your Total is {priceFormat(total_amount)}</p>
          <p>Test Card Number: 4242424242424242</p>
        </article>
      )}
      {/* CardElement is embedded directly from Stripe */}
      <form id="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          autoComplete="cardholder"
          className="sr-input"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="cardholder"
          className="sr-input"
        />
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        {/* Submit Button is disabled if the payment is processing or disabled or succeeded */}
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Error Handling */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Success Message */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          {" "}
          Payment Successful Stripe link:{" "}
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe Dashboard
          </a>
          Refresh the Page
        </p>
      </form>
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
    border-radius: 7px;
    padding: 40px;
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
`;

export default StripeCheckout;
