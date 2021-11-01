import './App.css';
import React, { useState} from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App = ()=> {
  const apikey= '3530665078ab4ff1a9dcedaf8d3ee742'
  const pageSize = 8

const [progress, setProgress] = useState(0)


   return (
      <div>
        <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height= {3.5}
      />
   
      <Switch>
          <Route exact path="/"> <News apikey={apikey} setProgress={setProgress} key = "general" pageSize={pageSize}country="in" category='general'/>  </Route>
          <Route exact path="/sports"> <News apikey={apikey} setProgress={setProgress} key = "sports" pageSize={pageSize}country="in" category='sports'/>  </Route>
          <Route exact path="/technology"> <News apikey={apikey} setProgress={setProgress} key = "technology" pageSize={pageSize}country="in" category='technology'/>  </Route>
          <Route exact path="/science"> <News apikey={apikey} setProgress={setProgress} key = "science" pageSize={pageSize}country="in" category='science'/>  </Route>
          <Route exact path="/health"> <News apikey={apikey} setProgress={setProgress} key = "health" pageSize={pageSize}country="in" category='health'/>  </Route>
          <Route exact path="/entertainment"> <News apikey={apikey} setProgress={setProgress} key = "entertainment" pageSize={pageSize}country="in" category='entertainment'/>  </Route>
          <Route exact path="/business"> <News apikey={apikey} setProgress={setProgress} key = "business" pageSize={pageSize}country="in" category='business'/>  </Route>
         
        </Switch>
      </Router>
      </div>
    )
  }
export default App;
