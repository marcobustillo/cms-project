import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Dashboard />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
