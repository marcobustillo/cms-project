import React, { memo } from "react";
import { Route, withRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Education from "../components/education/Education";
import Skills from "../components/skills/Skills";
import SocialMedia from "../components/social-media/SocialMedia";
import Project from "../components/projects/Projects";
import Language from "../components/language/Language";
import Article from "../components/article/Article";

const Router = memo(props => {
  const { match } = props;
  const routes = [
    {
      path: `${match.url}`,
      exact: true,
      main: () => <Article />
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
      path: `${match.url}:id/projects`,
      exact: true,
      main: () => <Project />
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
      path: `${match.url}:id/language`,
      exact: true,
      main: () => <Language />
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
