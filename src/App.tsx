import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokedex from "./screen/Pokedex";

export default function App() {
  return (
    <Router>
      <div>
        Pokedex
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}
        <hr />
        <Switch>
          <Route exact path="/">
            <div>ggdgfdjjg</div>
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/about">
            <div>gfdgdg</div>
          </Route>
          <Route path="/dashboard">
            <div>ssss</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
