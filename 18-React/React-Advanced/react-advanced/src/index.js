import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Uncontrolled from '../src/unControll'
import HOC from '../src/HOC';
import WithMouse from '../src/withMouse'

ReactDOM.render(
  <WithMouse />,
  // <HOC className="box"/>,
  // <Uncontrolled />,
  document.getElementById('root')
);


