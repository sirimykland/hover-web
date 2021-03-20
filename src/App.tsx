import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Privacy from './Privacy/Privacy';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Test from './Testing/Testing';

function App() {
  return (
    <div>
      <Router>
        <nav className="nav-bar">
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
              <Link to="/test">Testing</Link>
            </li>
          </ul>
        </nav>
        <div className="app-body">
          <div className="container-md">
            <div className="app-body-inner">
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
        </div>
      </Router>
    </div>
  );
}

export default App;
