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
    const { id, date, trans, guests, tour } = action.payload; //getting data from payload
    // date.toDateString();
    //using javascript find to search the cart to see if item + trans + date already exist
    //if true ... if not a new entry is incoming else takes care of that
    const tempItem = state.cart.find((i) => i.id === id + trans + date);
    if (tempItem) {
      //already in the cart
      const tempCart = state.cart.map((cartItem) => {
        //if: id = match:
        if (cartItem.id === id + trans + date) {
          let newGuestAmount = cartItem.guests + guests; //++ the guests by incoming amount
          //if bound: setting bounds to data max guests (currently max is 20)
          if (newGuestAmount > cartItem.max_guests) {
            newGuestAmount = cartItem.max_guests; //setting it equal to max
          } //end if bound
          //return new value newGuestAmount
          return { ...cartItem, guests: newGuestAmount };
        } //end if: id = match
        //id = no match
        else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      //new object constructed on 'BOOK TOUR" button
      const newItem = {
        date, //receiving the date from the react-calendar
        id: id + trans + date, //id + trans + date used to alow multiple tours with dif transportation
        name: tour.name, //name from the data
        trans, //transportation chosen in the single tour page from addToCart
        guests, //guests passed from addToCart
        image: tour.images[0].url, //tour image
        price: tour.price, //tour price in the data
        max_guests: tour.guests, //retrieved in data guests is the max value of tour visitors
      }; //new object item
      //state overwrites the cart with tate cart value & newItem (when new item incoming)
      return { ...state, cart: [...state.cart, newItem] };
    } //else item is not in the cart
  } //END ADD TO CART

  //Remove cart item removes a tour after removeTour function called
  if (action.type === REMOVE_CART_ITEM) {
    //if the tour id doesn't match match passed id in action.payload to tour.id
    const tempCart = state.cart.filter((tour) => tour.id !== action.payload);
    return { ...state, cart: tempCart };
  } //END REMOVE CART ITEM
  //Clear Cart returns an empty array replacing all items
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  } //END CLEAR CART
  //This if statement checks current amount in matched id and adds or decreases by one
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, amount } = action.payload; //retrieved id and guest increase / decrease from payload
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (amount === "inc") {
          let newAmount = item.guests + 1;
          if (newAmount > item.max_guests) {
            newAmount = item.max_guests;
          } //end if bound check
          return { ...item, guests: newAmount }; //amount = newAmount
        } //end if inc
        if (amount === "dec") {
          let newAmount = item.guests - 1;
          if (newAmount < 1) {
            newAmount = 1;
          } //end if min check
          return { ...item, guests: newAmount }; //amount = newAmount
        } //end if dec
      }
      return item;
    }); //end map
    return { ...state, cart: tempCart };
  } //END TOGGLE CART ITEM AMOUNT

  //REDUCER must return total: this
  if (action.type === COUNT_CART_TOTALS) {
    const tempCart = state.cart;
    const { total_tours, total_amount } = state.cart.reduce(
      (total) => {
        total.total_tours = tempCart.length;
        return total;
      },
      {
        total_tours: 0,
        total_amount: 0,
      }
    );
    console.log(total_tours);
    return { ...state, total_tours, total_amount };
  } //END COUNT CART TOTALS

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
