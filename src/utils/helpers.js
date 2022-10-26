//Used in {Tours} for price formatting
//priceFormat takes a parameter "number"(the rice)checks if its 0 and returns null
//if not null it formats the number
export const priceFormat = (number) => {
  if (number == 0) {
    return null;
  }
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
