import React from "react";
import People from "./people/components/people";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Person from "./people/components/person";

function App() {
  return (
    <div className="App">
      <header className="App-header">React API Demo</header>
      <Router>
        <Switch>
          <Route exact path="/">
            <People />
          </Route>
          <Route path="/person/:id">
            <Person />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
