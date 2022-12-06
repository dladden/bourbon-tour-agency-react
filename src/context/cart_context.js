import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
//Reducers Specify how the apps state changes in response to action sent to the store.
//It is a function that accepts (state, action) as argument and then returns the next state of the application
//Reducers used in large scale projects to eliminate complexity and bugs.

//initialState:
//cart - will be a local storage array which is initialized empty
//total_tours - will be total tours added to cart (usually would be one)
const initialState = {
  cart: [],
  total_tours: 0,
  total_amount: 0,
  // cleaning_fee: 2000,
};

const CartContext = React.createContext(); //this initialization of context comes from React

export const CartProvider = ({ children }) => {
  //setting up the reducer: with state function and dispatch function / it passes cart_reducer and initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  //Add To Cart handles the data which will be passed to the cart page using the reducer
  //Expected function values are transportation chosen, total guests
  const addToCart = (date, id, trans, guests, tour) => {
    dispatch({ type: ADD_TO_CART, payload: { date, id, trans, guests, tour } });
  };
  //TODO: add functionality to remove tour in the cart

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
