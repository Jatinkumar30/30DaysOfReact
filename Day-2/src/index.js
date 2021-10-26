import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Heading from './heading';
import List from './list';

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);
