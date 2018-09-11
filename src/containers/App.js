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
  updatingSectionName = (section) => {
      // this.setState({section})
      console.log("section", section)
      // return "teste"
  }  

  render() {     
    
    return (
      
      <div className="App">  
        <ErrorBoundary>            
          <Header section={this.state.section}/> 
          <Navbar updatingSectionName={this.updatingSectionName}/>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/members" component={Members}/>
              <Route path="/discography" component={Discography}/>
              <Route path="/calendar" component={Calendar}/>              
              <Route path="/contact" component={Contact}/>
            </Switch>
          </Router>       
        </ErrorBoundary>        
      </div>                             
    );
  }
}

export default App;
