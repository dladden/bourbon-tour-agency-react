import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
//tourList used for displaying the tours in either grid view or list view
const TourList = () => {
  //filtered_tours is passed from FilterContext (filter_context.js) as alias of tours
  const { filtered_tours: tours } = useFilterContext();
  return <GridView tours={tours}>Tour List</GridView>;
};

export default TourList;
