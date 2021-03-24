import React from 'react';
import './App.css';
import ProductListContainer from './Containers/ProductListContainer/ProductListContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductDetailsContainer from './Containers/ProductDetailsContainer/ProductDetailsContainer';
import ShoppingCartContainer from './Containers/ShoppingCartContainer/ShoppingCartContainer';
import SignInContainer from './Containers/SignInContainer/SignInContainer';
import RegisterContainer from './Containers/RegisterContainer/RegisterContainer';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={ProductListContainer}></Route>
      <Route exact path='/cart' component={ShoppingCartContainer}></Route>
      <Route exact path='/sign-in' component={SignInContainer}></Route>
      <Route exact path='/register' component={RegisterContainer}></Route>
      <Route exact path='/:id' component={ProductDetailsContainer}></Route>
      </Switch>
    </Router>
  );
}

export default App;
