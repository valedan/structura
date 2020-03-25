import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Viewer from "./components/Viewer/Viewer";
import Navbar from "./components/Navbar/Navbar";
import { theme } from "./theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Content>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/viewer">
                <Viewer />
              </Route>
            </Switch>
          </Content>
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;

const Content = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;
`;
