import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Viewer from "./components/Viewer/Viewer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@material-ui/styles";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
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
    </Router>
  );
};

export default App;

const Content = styled.div``;
