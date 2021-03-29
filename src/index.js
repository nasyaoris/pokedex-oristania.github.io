import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ApolloProvider } from '@apollo/client';
import { ConnectedRouter } from "connected-react-router";
import client from "./modules/client"

import "./index.css";
// import "normalize.css";

import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

const target = document.querySelector("#root");

render(
<ApolloProvider client={client}>
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
</ApolloProvider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
