import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
