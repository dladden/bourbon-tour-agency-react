import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  //This if handles the ADD_TO_CART action
  //TODO: Check of the data is already in the cart
  if (action.type === ADD_TO_CART) {
    const { id, date, trans, guests, tour } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id + trans);
    if (tempItem) {
    } else {
      const newItem = {
        id: id + trans, //id + trans used to alow multiple tours with dif transportation
        name: tour.name, //name from the data
        trans, //transportation chosen in the single tour page from addToCart
        guests, //guests passed from addToCart
        image: tour.images[0].url, //tour image
        price: tour.price,
        max_guest: tour.guests,
      }; //new object item

      return { ...state, cart: [...state.cart, newItem] }; //return state cart value & newItem
    } //else item is not in the cart
  } //END ADD_TO_CART

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
