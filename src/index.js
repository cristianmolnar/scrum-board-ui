import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainLayout from "./components/MainLayout";
import store from "./reduxStore/store";
import "./index.css";


ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>, 
  document.getElementById("root")
);