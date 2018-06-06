import React, { Component } from "react";

import App from "./containers/App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from './store';

console.log('===========================');
console.log('store', store.getState());
console.log('===========================');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
