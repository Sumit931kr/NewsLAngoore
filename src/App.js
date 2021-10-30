
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Navbar/>
   
      <Switch>
          <Route exact path="/"> <News key = "general" pagesize='15' country="in" category='general'/>  </Route>
          <Route exact path="/sport"> <News key = "sport" pagesize='15' country="in" category='sport'/>  </Route>
          <Route exact path="/technology"> <News key = "technology" pagesize='15' country="in" category='technology'/>  </Route>
          <Route exact path="/science"> <News key = "science" pagesize='15' country="in" category='science'/>  </Route>
          <Route exact path="/health"> <News key = "health" pagesize='15' country="in" category='health'/>  </Route>
          <Route exact path="/entertainment"> <News key = "entertainment" pagesize='15' country="in" category='entertainment'/>  </Route>
          <Route exact path="/business"> <News key = "business" pagesize='15' country="in" category='business'/>  </Route> key = ""
         
        </Switch>
      </Router>
      </div>
    )
  }
}
