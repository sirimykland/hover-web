import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Privacy from "./Privacy";
import Home from "./Home";
import Contact from "./Contact";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>
        <div className="App-body">
        <div className="contentContainer">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>        
        </div>        
      </Router>
    </div>
  );
}

export default App;
