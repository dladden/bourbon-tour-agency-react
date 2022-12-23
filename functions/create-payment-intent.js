//handler (async) with two arguments event and context that return a promise
exports.handler = async function (event, context) {
  // const { cart, shipping_fee } = JSON.parse(event.body);
  // console.log(cart);
  console.log(event);
  return {
    statusCode: 200,
    body: "JSON.stringify(cart)",
  };
};
