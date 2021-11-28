import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux'
import store from './store/index'
import App from './App';

App = connect((state) => {
  console.log(state)
  return {
    number: state.count,
    name: state.name
  }
})(App)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

