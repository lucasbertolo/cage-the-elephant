import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import {
    Home,
    About,
    Members,
    Calendar,
    Discography,
    Contact
} from './AsyncComponents';


import './App.css';

class App extends Component {   
  constructor(props){
    super();
    this.state = {
      section: ''
    }
  }
  

  render() {     
    
    return (
      
      <div className="App">  
        <ErrorBoundary>            
          <Header section={this.state.section}/> 
          <Navbar/>
          <Router>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
              <Route path={process.env.PUBLIC_URL +"/about"} component={About}/>
              <Route path={process.env.PUBLIC_URL +"/members"} component={Members}/>
              <Route path={process.env.PUBLIC_URL +"/discography"} component={Discography}/>
              <Route path={process.env.PUBLIC_URL +"/calendar"} component={Calendar}/>              
              <Route path={process.env.PUBLIC_URL +"/contact"} component={Contact}/>
            </Switch>
          </Router>       
        </ErrorBoundary>        
      </div>                             
    );
  }
}

export default App;
