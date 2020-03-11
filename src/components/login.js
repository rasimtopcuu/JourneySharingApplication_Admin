import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";

const initialState ={
}
 class login extends Component {
   
     constructor(props){
        const token = localStorage.getItem('jwt');
        let loggedIn =true;
        if(token==null){
      
            loggedIn =false;
        }
        super(props);
        const initialState ={
            loginError:"",
            email:"",
            password:"",
            emailError:"",
            passwordError:"",
            token:"",
            loggedIn
        }
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     
     }
     
    state = initialState;
  
        
    handleChange = event =>{
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]:isCheckbox
            ?event.target.checked
            :event.target.value,
        })
    };

    validate = () =>{
     
        let emailError = "";
        let passwordError = "";
        let loginError= "";
    
         //let password error
         const {password,email,loggedIn}=this.state;
       
         if(!password.match(/^[#\w@_-]{6,20}$/) ){
             passwordError ="unfortunately you entered invalid password";
         }
        
        if(!email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)){
             emailError = 'Please enter a valid email address example@ypu.com';
        }
        if(loggedIn && !emailError && !passwordError){
            loginError="No such user was found in our system, please check your password and e-mail again.";
            this.setState({loginError})
            }
        if(emailError){
         this.setState({emailError});
         return false;
        }
        return true;
     };
     handleSubmit = event =>{
        event.preventDefault();
        
        const isValid =this.validate();
        console.log(this.state);
        if(isValid){    
            console.log(this.state);
            //clear form
            this.setState(initialState);
            const {loggedIn,loginError}=this.state;
             fetch('https://cors-anywhere.herokuapp.com/https://journey-sharing-application.herokuapp.com/token',{
                method: 'POST',
                body: JSON.stringify({
                emailAddress: this.state.email,
                password:this.state.password,
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('jwt',json.token);
                let jwt="";
                let loginError="";
                jwt =json.token;
                if(jwt){
                    this.setState({loggedIn:true})
                    }
                    if(!loggedIn ){
                        loginError="No such user was found in our system, please check your password and e-mail again.";
                        this.setState({loginError})
                        }
            
                }
            )}
    }
    render() {
        if(this.state.loggedIn){
            return   <Redirect to="/header"/>
       }
        return (
            <div>
                <body className="bg-gradient-primary">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                               
                                <div className="row">

                                <div className="col-lg-12">
                                    <div className="p-5">

                                    <div className="text-center">
                                        <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-taxi"></i>
                                        </div>
                                        <h1 className="h4 text-gray-900 mb-4">JSA Admin Paneli</h1>

                                    </div>
                                    <form  onSubmit={this.handleSubmit} className="user">
                                        <div className="form-group">
                                        <input className="email" name="email" className="form-control form-control-user" id="exampleInputUsername" placeholder="Kullanıcı adı"onChange={this.handleChange}/>
                                        <div><label className="border-bottom-primary">{this.state.emailError}</label></div>
                                        </div>
                                        <div className="form-group">
                                        <input type="password" name="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Parola" onChange={this.handleChange}/>
                                        <div><label className="border-bottom-primary">{this.state.passwordError}</label></div>
                                        </div>
                                        <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                            <label className="custom-control-label" htmlFor="customCheck">Beni Hatırla</label>
                                        </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Giriş Yap
                                        </button>
                                        <hr/>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>

                        </div>
                    </div>
                    </body>
            </div>
        );
    }
}

export default login;