import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Router = props => {
  const match = useRouteMatch();

  const routes = [
    {
      path: `${match.url}`,
      exact: true,
      main: () => <Home />
    },
    {
      path: `${match.url}/about`,
      exact: true,
      main: () => <About />
    }
  ];

  return (
    <>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </>
  );
};

export default Router;
