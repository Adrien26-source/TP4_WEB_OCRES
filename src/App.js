import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Profil';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    
      <Router basename={process.env.PUBLIC_URL}>
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
               <Routes>
                    <Route exact path="/" render={() => (
                        <Navigate to="/profillist"/>
                    )}/>
                    <Route exact path='/profillist' element={Profil}/>
                </Routes>

            </div>
        </Router>
    );    
}

export default App;
