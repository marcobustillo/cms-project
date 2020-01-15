import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={() => <div>login</div>} />
            <Dashboard />
          </Switch>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
