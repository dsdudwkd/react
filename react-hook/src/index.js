import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Props from './Props';
import Props2 from './Props2';
import Event from './Event';
import State from './State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Props name="란마" local="서울" content="리액트" age={40+1}/>
    <Props2 name="메가" local="강남역" content="자바스크립트" age={40} />
    <Event />
    <State />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
