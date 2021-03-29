/* eslint-disable */
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header"

import { theme } from "./theme";
import { routes } from "./routes";

function App() {
    const pages = routes.map((route, i) => (
      <Route
        component={route.component}
        exact={route.exact}
        path={route.path}
        key={i}
      />
    ));
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>{pages}</Switch>
      </ThemeProvider>
    );
}

export default withRouter(
  connect(
    null,
    null
  )(App)
);
