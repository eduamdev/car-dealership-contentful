import React from "react";
import "./styles/App.scss";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Car from "./pages/Car";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/search" component={Search} />
        <Route exact path="/car/:slug" component={Car} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
