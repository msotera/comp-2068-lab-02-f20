import React from 'react';


// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch, Link, Route
} from 'react-router-dom';
import Styles from './styles';


// Don't forget to import your components
import Home from '../Home';
import About from '../About';

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About_Me!">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
      <Route exact path="../Home">
        <Home/>
      </Route>

      <Route exact path="../About">
        <About/>
      </Route>
      </Switch>
    </Router>
  );
}

export default Nav;