import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

class index extends Component {
    
    constructor(props){
        super(props)
        const token = localStorage.getItem('jwt');

        let loggedIn =true;
        if(token==null){

            loggedIn =false;
        }
        this.state={loggedIn}
      }

    render() 
    {
        
        if(this.state.loggedIn === false){
            return   <Redirect to="/login"/>
       }
    
        return (
            <div className="App">
                <Header/>
                    <h1>Welcome</h1>
                <Footer/>                  
            </div>
        );
    }
}

export default index;
