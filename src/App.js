import React from "react";
import "./styles/App.scss";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Vehicle from "./pages/Vehicle";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:slug" component={Vehicle} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
