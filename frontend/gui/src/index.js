import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOL_EXENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances (
  applyMiddleware(thunk)
))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)



ReactDOM.render(
  <React.StrictMode>
    app
  </React.StrictMode>,
  document.getElementById('root')
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
