import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//The created store--------
// import { Provider } from 'react-redux';
// import {legacy_createStore} from 'redux'
// import { CounterReducer } from '../Redux/reducers/CounterReducer';
// import { createStore } from "redux"; 
//import CounterReducer from './Redux/reducers/counterReducer'; 
// const store = legacy_createStore(CounterReducer); 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
 <React.StrictMode>
        <App/>
 </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

