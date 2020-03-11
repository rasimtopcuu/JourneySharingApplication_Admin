import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from "./components/login"
import Header from "./components/Header"
import index from "./components/index"
import Footer from "./components/Footer"
import Logout from "./components/Logout"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>

      <Route exact path = "/login" component ={login}   />
      <Route exact path = "/header" component ={Header} />
      <Route exact path = "/index" component ={index}   />
      <Route exact path = "/footer" component ={Footer}   />
      <Route exact path = "/Logout" component ={Logout}   />

    </Switch>
    
    
    </div>
</Router>
  );
}

export default App;
