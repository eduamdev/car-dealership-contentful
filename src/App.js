import React from "react";
// import "./styles/App.scss";
import "./styles/main.css";
import Index from "./pages";
import Search from "./pages/search";
import Car from "./pages/car";
import NotFound from "./pages/not-found";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/search" component={Search} />
        <Route exact path="/car/:slug" component={Car} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
