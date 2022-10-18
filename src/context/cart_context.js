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

const initialState = {};

const CartContext = React.createContext(); //this initialization of context comes from React

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value="cart context">{children}</CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
