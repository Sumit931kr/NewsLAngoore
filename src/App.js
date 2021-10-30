
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
pageSize = 6;
  render() {
   return (
      <div>
        <Router>
      <Navbar/>
   
      <Switch>
          <Route exact path="/"> <News key = "general" pageSize={this.pageSize}country="in" category='general'/>  </Route>
          <Route exact path="/sport"> <News key = "sport" pageSize={this.pageSize}country="in" category='sport'/>  </Route>
          <Route exact path="/technology"> <News key = "technology" pageSize={this.pageSize}country="in" category='technology'/>  </Route>
          <Route exact path="/science"> <News key = "science" pageSize={this.pageSize}country="in" category='science'/>  </Route>
          <Route exact path="/health"> <News key = "health" pageSize={this.pageSize}country="in" category='health'/>  </Route>
          <Route exact path="/entertainment"> <News key = "entertainment" pageSize={this.pageSize}country="in" category='entertainment'/>  </Route>
          <Route exact path="/business"> <News key = "business" pageSize={this.pageSize}country="in" category='business'/>  </Route> key = ""
         
        </Switch>
      </Router>
      </div>
    )
  }
}
