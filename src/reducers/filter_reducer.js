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

//if load_products change state values using the spread operator to copy values "data"
const filter_reducer = (state, action) => {
  if (action.type === LOAD_TOURS) {
    //getting the max price of a tour for the pricing filter
    let maxPrice = action.payload.map((tour) => tour.price);
    //using math package to get the max price
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice);
    return {
      ...state,
      all_tours: [...action.payload],
      filtered_tours: [...action.payload],
      //filters object bring all the initial values with state.filters
      //it sets max_price equal to maxPrice with "max_price: maxPrice"
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
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
  //SORT PORTION
  if (action.type === SORT_TOURS) {
    const { sort, filtered_tours } = state;
    let tempTours = [...filtered_tours]; //making sure array is not empty
    console.log(tempTours.best_sel);
    if (sort === "all") {
      tempTours = tempTours.sort((x, y) => y.price - x.price);
    }
    if (sort === "price-lowest") {
      //sort function with access to x=current item and y = next item
      //this sort function works by comparison
      tempTours = tempTours.sort((x, y) => x.price - y.price);
    }
    if (sort === "price-highest") {
      //expanded logic for sorting
      tempTours = tempTours.sort((x, y) => {
        if (x.price < y.price) {
          return -1; //then sort one behind the stack
        }
        if (x.price > y.price) {
          return 1; //then sort one on top of the stack
        }
        return 0;
      });
    }
    if (sort === "name-highest") {
      tempTours = tempTours.sort((x, y) => {
        return x.name.localeCompare(y.name);
      });
    }
    if (sort === "name-lowest") {
      tempTours = tempTours.sort((x, y) => {
        return y.name.localeCompare(x.name);
      });
    }

    return { ...state, filtered_tours: tempTours };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
