//importing the pages for the export
import Home from "./HomePage";
import ConfirmationPage from "./ConfirmationPage";
import About from "./AboutPage";
import Cart from "./CartPage";
import Checkout from "./CheckoutPage";
import Contact from "./ContactPage";
import Error from "./ErrorPage";
import SingleTour from "./SingleTourPage";
import Tours from "./ToursPage";
import PrivateRoute from "./PrivateRoute"; //preventing users with no profile going to checkout
import AuthWrapper from "./AuthWrapper";

//exporting as name export
export {
  Home,
  ConfirmationPage,
  About,
  Cart,
  Checkout,
  Contact,
  Error,
  SingleTour,
  Tours,
  PrivateRoute,
  AuthWrapper,
};
