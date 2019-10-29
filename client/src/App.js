import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Members from "./pages/Members";
import Add from "./pages/Add";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Members />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
