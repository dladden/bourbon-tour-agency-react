import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_TOURS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_TOURS,
  UPDATE_FILTERS,
  FILTER_TOURS,
  CLEAR_FILTERS,
} from "../actions";
//Grabbing the context from the tour_context hook
import { useToursContext } from "./tours_context";
//Filter Context is responsible for providing
//two properties: filtered - changes as the user changes the filter;
//all_tours - stays the same, used to return to default
//grid_view - toggle for the view
//sort - controlled input that changes depending on the value set in Sort.js form
const initialState = {
  filtered_tours: [],
  all_tours: [],
  grid_view: false,
  sort: "all",
};
//Filter Context
const FilterContext = React.createContext();

//useReducer
export const FilterProvider = ({ children }) => {
  //tours cannot be passed into the initialState of this filter_context must be done with useEffect
  const { tours } = useToursContext(); //here we are grabbing the tours initial state from tours_context (initially empty array)
  const [state, dispatch] = useReducer(reducer, initialState);
  //This use effect dispatches action load tours when called on (replaces the empty array)
  useEffect(() => {
    dispatch({ type: LOAD_TOURS, payload: tours });
  }, [tours]);
  console.log(tours);

  //View setters for grid-view and list-view
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  //sorting e = event
  //name is..., value is the actual option that the user is choosing
  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };

  //state passing filtered_tours: [], all_tours: [].
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
//useFilterContext HOOK
export const useFilterContext = () => {
  return useContext(FilterContext);
};
