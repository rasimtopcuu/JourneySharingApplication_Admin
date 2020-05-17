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
import UserBan from "./components/UserBan"
import Driver from "./components/Driver"
import DriverBan from "./components/DriverBan"
import Journeys from "./components/Journeys"
import Payments from "./components/Payments"
import PaymentList from "./components/PaymentList"
import NotFound from "./components/NotFound"


import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path = "/login" component ={login}/>
          <Route exact path = "/header" component ={Header}/>
          <Route exact path = "/index" component ={index}/>
          <Route exact path = "/footer" component ={Footer}/>
          <Route exact path = "/Logout" component ={Logout}/>
          <Route exact path = "/Navbar" component ={Navbar}/>
            {/*User */}
          <Route exact path = "/User" component ={User}/>
          <Route exact path = "/UserBan" component ={UserBan}/>
            {/*Driver */}
          <Route exact path = "/Driver" component ={Driver}/>
          <Route exact path = "/DriverBan" component ={DriverBan}/>
          <Route exact path = "/Journeys" component ={Journeys}/>
          <Route exact path = "/Payments" component ={Payments}/>
          <Route exact path = "/PaymentList" component ={PaymentList}/>
          <Route exact path = "*" component={NotFound} />

      
        </Switch>   


        
         
      </div>
    </Router>
  );
}

export default App;
