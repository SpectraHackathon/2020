import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import FullSchedule from "./FullSchedule";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";


class App extends Component {

  render(){

    return (

      <Router>
      <div className="App">

        <ScrollToTop />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/FullSchedule" component={FullSchedule}/>
          </Switch>

          <ScrollToTop />

      </div>
      </Router>
    );
  }
}

export default App;
