import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; //hook from auth0
//Auth0 can be used simply with the hook but here we are setting up user context and wrapping
//the application so it is accessible everywhere
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  //destructuring the properties from auth0 like user: which tells us the user and credentials
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [tourUser, setTourUser] = useState(null);

  //useEffect envoked every-time isAuthenticated changes
  useEffect(() => {
    if (isAuthenticated) {
      setTourUser(user); //set tourUser to user from auth0
    } else {
      setTourUser(false); //else set user to false
    } //end if else Authenticated is true

    //viewing the returns:
    console.log(`user:${user}`);
    console.log(`authenticated:${isAuthenticated}`);
    console.log(`loading..:${isLoading}`);
  }, [isAuthenticated]);

  return (
    //return value
    <UserContext.Provider value={{ loginWithRedirect, logout, tourUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
