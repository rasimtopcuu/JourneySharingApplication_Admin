import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from "./components/login"
import Header from "./components/Header"
import Footer from "./components/Footer"
import index from "./components/index"
import Logout from "./components/Logout"
import userSave from "./components/userSave"
import Navbar from "./components/Navbar"
import User from "./components/User"

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>

      <Route exact path = "/login" component ={login}         />
      <Route exact path = "/header" component ={Header}       />
      <Route exact path = "/index" component ={index}         />
      <Route exact path = "/footer" component ={Footer}       />
      <Route exact path = "/Logout" component ={Logout}       />
      <Route exact path = "/Navbar" component ={Navbar}       />
      <Route exact path = "/User" component ={User}   />
      <Route exact path = "/userSave" component ={userSave}   />

    </Switch>
    
    
    </div>
</Router>
  );
}

export default App;
