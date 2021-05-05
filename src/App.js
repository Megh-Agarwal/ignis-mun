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
import Error from './components/Error/Error';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
  HashRouter,
  Link
} from "react-router-dom";

import browserHistory from "history/createBrowserHistory";

function App() {
  return (
    <Router history={browserHistory}>
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
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      <Footer/>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();
  console.log(location);

  var paths = ['/core-team', '/allocations', '/faq', '/resources', '/contact', '/about-us', '/committee'];

  if(paths.includes(location.pathname)) {
    <Redirect to={location.pathname} />
  } else {
    var message = `The page ${location.pathname} does not exist`;
    return (
      <Error info={message} />
    );
  }
}

export default App;