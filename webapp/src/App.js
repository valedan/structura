import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Viewer from "./components/Viewer/Viewer";
import Navbar from "./components/Navbar/Navbar";
import { theme } from "./theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

const App = () => {
  return (
    <Router>
      {/* MUI and styled components each use their own theme contexts, so we have to provide the theme to both */}
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
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
