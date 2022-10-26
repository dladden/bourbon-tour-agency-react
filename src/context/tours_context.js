import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/tours_reducer";
//tours_url is imported from out constants and called url in this file
import { tours_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_TOURS_BEGIN, //var for loading the tour
  GET_TOURS_SUCCESS, //var for when tour is loaded and there is no errors
  GET_TOURS_ERROR, //var for error handling
  GET_SINGLE_TOUR_BEGIN as GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
} from "../actions";
//the Tours Context uses the useReducer
//It also uses state to control the application state and dispatch for the control of the state
const initialState = {
  isSidebarOpen: false, //var for the panel state (default state false)
  tours_loading: false, //var for loading state
  tours_error: false, //var for error handling
  tours: [], //empty var for actual data aka tours aka all data pulled from reducer
  featured_tours: [], //empty var for featured tours
  //TODO add variables for loading error
}; //empty object

const ToursContext = React.createContext();
//Context responsible for the sidebar when the screen is at certain size.
export const ToursProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); //state and dispatch use reducer hook and function from tours_reducer.js
  //openSidebar dispatches and action without parameters
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  //The Tours are showcased in 2 locations: HomePage.js and ToursPage.js to make this easier and fetch the api once instead of twice
  const fetchTours = async (url) => {
    dispatch({ type: GET_TOURS_BEGIN }); //set up in tours_reducer.js
    //this try-catch fetches the data
    try {
      const response = await axios.get(url);
      const tours = response.data; //data is in the array property stored to tours
      //React dispatch ACTION
      dispatch({ type: GET_TOURS_SUCCESS, payload: tours }); //action setup (dispatch called GET_SINGLE_TOUR_SUCCESS with payload of tours)
    } catch (error) {
      dispatch({ type: GET_TOURS_ERROR }); //handling error in reducer
    }

    // console.log(response);
  }; //end fetchTours

  useEffect(() => {
    fetchTours(url);
  }, []);

  return (
    <ToursContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ToursContext.Provider>
  );
}; //end ToursProvider
// make sure use
export const useToursContext = () => {
  return useContext(ToursContext);
};
