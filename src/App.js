import React from 'react';
import './styles/App.css';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/catalog' component={Catalog} />
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
