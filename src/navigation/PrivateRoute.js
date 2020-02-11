import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../utils/store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    state: { isAuthenticated },
    dispatch
  } = useContext(store);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated || rest.exempt ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
