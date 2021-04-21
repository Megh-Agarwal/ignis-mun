import logo from './logo.svg';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import CoreTeam from './components/CoreTeam/CoreTeam';
import Allocations from './components/Allocations/Allocations';
import Footer from './components/Footer/Footer';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/core-team" exact>
            <CoreTeam />
          </Route>
          <Route path="/allocations" exact>
            <Allocations />
          </Route>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
