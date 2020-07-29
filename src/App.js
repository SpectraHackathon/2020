import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import FullSchedule from "./FullSchedule";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";

const NoMatch = ({ location }) => (
  <div>
  <h3>No Page for <code>{location.pathname}</code></h3>
  </div>
)


class App extends Component {

  render(){

    return (

      <Router>
      <div className="App">

        <ScrollToTop />

        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + '/FullSchedule'} component={FullSchedule}/>
          <Route component={NoMatch}/>
          </Switch>

          <ScrollToTop />

      </div>
      </Router>
    );
  }
}

export default App;
