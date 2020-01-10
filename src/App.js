import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Dashboard />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
