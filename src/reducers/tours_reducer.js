import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
} from "../actions";

const tours_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  //return all properties in the state if action type is tours begin this starts the loading process
  if (action.type === GET_TOURS_BEGIN) {
    return { ...state, tours_loading: true };
  }
  //Handling featured and tours
  if (action.type === GET_TOURS_SUCCESS) {
    const featured_tours = action.payload.filter(
      (tour) => tour.featured === true
    );
    return {
      ...state,
      tours_loading: false,
      tours: action.payload,
      featured_tours,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tours_reducer;
