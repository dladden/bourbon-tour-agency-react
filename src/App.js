import React from "react"; //adding React functionality into the file from the node_modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
//Importing the pages from index.js this is done so that it can be called in the app when needed
import {
  Home,
  About,
  Cart,
  Checkout,
  CreateTour,
  Error,
  SingleTour,
  Tours,
  PrivateRoute,
} from "./pages";

//Using tag-template-literals with styled-component called button
// const Button = styled.button``;

//Below is the main function (aka stateless functional component) of the React
//As JavaScrip it is main function since it is capitalized and it always must return something like JSX
//The "return <h4></h4>" is called JSX it is the HTML used in the React.js
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/tours">
          <Tours />
        </Route>
        <Route exact path="/create-tour">
          <CreateTour />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/tours/:id" children={<SingleTour />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
