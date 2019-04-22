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

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {   
  constructor(props){
    super();
    this.state = {
        section: '',
      }
    }        

    setSection = (e) => {
      this.setState({
        section: e
      })
    } 

  render() {     
    
    return (
      
      <div className="App">  
        <ErrorBoundary>            
          <Header section={this.state.section}/> 
          <Navbar/>
          <Router>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"} 
                render={(props) => <Home {...props} setSection={this.setSection} />}
              />
              <Route exact path={process.env.PUBLIC_URL + "/about"} 
                render={(props) => <About {...props} setSection={this.setSection} />}
              />
               <Route exact path={process.env.PUBLIC_URL + "/members"} 
                render={(props) => <Members {...props} setSection={this.setSection} />}
              />
               <Route exact path={process.env.PUBLIC_URL + "/discography"} 
                render={(props) => <Discography {...props} setSection={this.setSection} />}
              />
               <Route exact path={process.env.PUBLIC_URL + "/calendar"} 
                render={(props) => <Calendar {...props} setSection={this.setSection} />}
              />
               <Route exact path={process.env.PUBLIC_URL + "/contact"} 
                render={(props) => <Contact {...props} setSection={this.setSection} />}
              />

            </Switch>
          </Router>       
        </ErrorBoundary>        
      </div>                             
    );
  }
}

export default App;
