import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { SnackbarProvider } from "notistack";
import MomentUtils from "@date-io/moment";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { StateProvider } from "./utils/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <SnackbarProvider maxSnack={1}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <BrowserRouter>
              <Switch>
                <Dashboard />
              </Switch>
            </BrowserRouter>
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
