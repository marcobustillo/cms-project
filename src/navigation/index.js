import React, { memo } from "react";
import { Route, withRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Education from "../components/Education";
import Skills from "../components/Skills";
import SocialMedia from "../components/SocialMedia";

const Router = memo(props => {
  const { match } = props;
  const routes = [
    {
      path: `${match.url}`,
      exact: true,
      main: () => <div>test</div>
    },
    {
      path: `${match.url}:id`,
      exact: true,
      main: () => <Home />
    },
    {
      path: `${match.url}:id/about`,
      exact: true,
      main: () => <About />
    },
    {
      path: `${match.url}:id/work`,
      exact: true,
      main: () => <Work />
    },
    {
      path: `${match.url}:id/education`,
      exact: true,
      main: () => <Education />
    },
    {
      path: `${match.url}:id/skills`,
      exact: true,
      main: () => <Skills />
    },
    {
      path: `${match.url}:id/social-media`,
      exact: true,
      main: () => <SocialMedia />
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
});

export default withRouter(Router);
