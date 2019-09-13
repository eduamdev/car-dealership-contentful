import React from 'react';
import './styles/App.css';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Vehicle from './pages/Vehicle';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='app-wrapper'>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/catalog/:slug' component={Vehicle} />
          <Route component={Error}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
