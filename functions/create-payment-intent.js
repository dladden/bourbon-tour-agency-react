//domain/.netlify/functions/create-payment-intent
//handler (async) with two arguments event and context that return a promise (all NODE)

require("dotenv").config(); //importing dotenv

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

exports.handler = async function (event, context) {
  //if: if event body property exists on event object only then create POST request,
  //prase the data, else return create payment intent
  if (event.body) {
    //converting string data into javascript JSON object
    const { cart, total_amount } = JSON.parse(event.body);

    //IMPORTANT: this is where total is actually calculated for security purposes
    //Connect to the back end, pass in the id and get values of the total
    //TODO: set up calculation for the total amount like in the reducer
    const calculateOrderAmount = () => {
      return total_amount; //total formatted in cents
    };
    //try-catch: for connection to stripe
    try {
      //Stripe API from the docs:
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
    } catch (error) {}
  } //END if: event.body
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
