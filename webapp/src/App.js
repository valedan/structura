import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "@material-ui/styles";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
