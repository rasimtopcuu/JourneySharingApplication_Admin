import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Navbar from "./Navbar";

const NotFound = () =>
  <div>
        <Navbar/>
        <div class="container-fluid">
          <div class="text-center">
          <br></br><br></br><br></br>
            <div class="error mx-auto" data-text="404">404</div>
            <p class="lead text-gray-800 mb-5">Page Not Found</p>
            <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
            <a href="/index">&larr; Dashboard'a geri dön. </a>
          </div> {/* text center */}
        </div> {/* container fluid */}
  </div>
  
export default NotFound;