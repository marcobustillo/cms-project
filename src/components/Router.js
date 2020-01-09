import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";

const Router = props => {
  const match = useRouteMatch();
  const routes = [
    {
      path: `${match.url}`,
      exact: true,
      main: () => <Home />
    },
    {
      path: `${match.url}about`,
      exact: true,
      main: () => <About />
    },
    {
      path: `${match.url}work`,
      exact: true,
      main: () => <Work />
    },
    {
      path: `${match.url}education`,
      exact: true,
      main: () => <Education />
    },
    {
      path: `${match.url}skills`,
      exact: true,
      main: () => <Skills />
    },
    {
      path: `${match.url}social-media`,
      exact: true,
      main: () => <Skills />
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
