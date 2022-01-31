import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from '../javascript/pages/homePage'

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route>Oooops 404 NOT FOUND</Route>
    </Switch>
  </div>
);

export default App;
