// 219, 220
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// 218
// import App from "./App";
// import Hello from "./Hello";
// 220
// import Card from "./Card";
// 220 importing robots data file
import { robots } from "./robots";
import reportWebVitals from "./reportWebVitals";
// 219 import tachyons
import "tachyons";
// 222 CardList Component
// import CardList from "./CardList";
// 223 App
import App from "./containers/App";

// 219 React properties
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
