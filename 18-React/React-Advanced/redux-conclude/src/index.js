import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import "./index.css";
import App from "./App";

let store = createStore(todoApp);

// 声明一个App组件, 然后这个组件用 Provider 进行包装
const Todo = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Todo, document.getElementById("root"));
