import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from "./reducers"


const store = configureStore({
  reducer: reducers,
  middleware: [thunk]
});


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


