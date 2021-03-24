import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import CartReducer from './Redux/Reducers/CartReducer';
import thunk from 'redux-thunk';

const store = createStore(CartReducer,applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

