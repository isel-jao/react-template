/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import "./i18next";
import "./scipts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
