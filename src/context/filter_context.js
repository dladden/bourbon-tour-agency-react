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
import { useToursContext } from "./tours_context";
//Filter Context is responsible for
//two properties: filtered - changes as the user changes the filter; all_tours - back to default
const initialState = {
  filtered_products: [],
  all_tours: [],
};

const FilterContext = React.createContext();

//useReducer
export const FilterProvider = ({ children }) => {
  //tours cannot be passed into the initialState of this filter_context must be done with useEffect
  const { tours } = useToursContext(); //here we are grabbing the tours initial state from tours_context
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, [tours]);

  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
};
//useFilterContext HOOK
export const useFilterContext = () => {
  return useContext(FilterContext);
};
