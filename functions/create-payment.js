//handler (async) with two arguments event and context that return a promise
exports.handler = async function (event, context) {
  console.log(event);
  return {
    statusCode: 200,
    body: "payment-intent",
  };
};
