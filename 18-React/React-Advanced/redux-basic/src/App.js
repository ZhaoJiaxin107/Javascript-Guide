import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import store from "./store";

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    return (
      <div className="">
        <h1>数字是{store.getState().count}</h1>
        <button
          onClick={() => {
            store.dispatch({ type: "add", num: 10 });
            console.log(store.getState());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "minus", num: 10 });
            console.log(store.getState());
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
