import React from 'react';
import logo from './logo.png';
import './App.css';
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    
      <Router basename={process.env.PUBLIC_URL}>
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
               <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/profilelist"/>
                    )}/>
                    <Route exact path='/profilelist' component={Profile}/>
                </Switch>

            </div>
        </Router>
    );    
}

export default App;
