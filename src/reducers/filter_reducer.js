import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
//HOOKS can only be invoked in another hook or in react component
//This filter reducer is a simple function responsible for filtering functionality
const filter_reducer = (state, action) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
