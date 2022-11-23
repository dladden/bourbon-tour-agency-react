import {
  LOAD_TOURS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  SORT_TOURS,
} from "../actions";
//HOOKS can only be invoked in another hook or in react component
//This filter reducer is a simple function responsible for filtering functionality

//if load_products change state values using the spread opperator to copy values "data"
const filter_reducer = (state, action) => {
  if (action.type === LOAD_TOURS) {
    return {
      ...state,
      all_tours: [...action.payload],
      filtered_tours: [...action.payload],
    };
  }
  //This if statements set the views: GridView
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  //This if statements set the views: ListView
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  //This if sets the reducers state to match the value select in the
  //sort option (by default set to sort ALL)
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_TOURS) {
    const { sort, filtered_tours } = state;
    let tempTour = [];
    if(sort ===)

    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
