//domain/.netlify/functions/create-payment-intent
//handler (async) with two arguments event and context that return a promise (all NODE)

require("dotenv").config(); //importing dotenv

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

exports.handler = async function (event, context) {
  console.log(event);
  //if: if event body property exists on event object only then create POST request,
  //prase the data, else return create payment intent
  if (event.body) {
    //parsing: converting string data into javascript JSON object
    const { cart, total_amount } = JSON.parse(event.body);
    console.log(cart);
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
        // statement_descriptor_suffix: "Bourbon Tours",
        // name: cart.name,
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          cart,
          clientSecret: paymentIntent.client_secret,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } //END if: event.body
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
