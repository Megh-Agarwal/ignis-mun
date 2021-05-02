import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import CoreTeam from './components/CoreTeam/CoreTeam';
import Allocations from './components/Allocations/Allocations';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ'
import Resources from './components/Resources/Resources'
import Contact from './components/Contact/Contact';
import Committee from "./components/Committee/Committee";
import AboutUs from './components/AboutUs/AboutUs';

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
          <Route path="/faq" exact>
            <FAQ />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route exact path="/committee/:name" component={Committee} />
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
