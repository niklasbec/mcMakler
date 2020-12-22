import React from "react";
import "react-app-polyfill/stable";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { render } from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>, // Contextprovider does not work at the moment as they have an error there
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
