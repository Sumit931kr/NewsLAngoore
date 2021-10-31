import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pageSize = 8;
state={
  progress : 0
}
  setProgess = (progress)=>{
  this.setState({progress: progress})
}


  render() {
   return (
      <div>
        <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height= {3.5}
      />
   
      <Switch>
          <Route exact path="/"> <News setProgess={this.setProgess} key = "general" pageSize={this.pageSize}country="in" category='general'/>  </Route>
          <Route exact path="/sports"> <News setProgess={this.setProgess} key = "sports" pageSize={this.pageSize}country="in" category='sports'/>  </Route>
          <Route exact path="/technology"> <News setProgess={this.setProgess} key = "technology" pageSize={this.pageSize}country="in" category='technology'/>  </Route>
          <Route exact path="/science"> <News setProgess={this.setProgess} key = "science" pageSize={this.pageSize}country="in" category='science'/>  </Route>
          <Route exact path="/health"> <News setProgess={this.setProgess} key = "health" pageSize={this.pageSize}country="in" category='health'/>  </Route>
          <Route exact path="/entertainment"> <News setProgess={this.setProgess} key = "entertainment" pageSize={this.pageSize}country="in" category='entertainment'/>  </Route>
          <Route exact path="/business"> <News setProgess={this.setProgess} key = "business" pageSize={this.pageSize}country="in" category='business'/>  </Route>
         
        </Switch>
      </Router>
      </div>
    )
  }
}
