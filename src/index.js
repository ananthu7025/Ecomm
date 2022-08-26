import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from './redux/store'
import {Provider} from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>

  </BrowserRouter>,
  document.getElementById("root")
);
