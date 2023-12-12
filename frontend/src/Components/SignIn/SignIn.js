import React,{Component} from "react";
import { storage,auth } from "../firebase";
import HomePage from "../HomePage/HomePage";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import Home from "../Home/Home";

class SignIn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  
            emailId:null,
            password: null
        };
    }

    getUserDetails=()=>{
        fetch("http://localhost:8080/users/" + JSON.parse(localStorage.getItem("users")).uid)             //get post of following users
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const userDetails = data;
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
                window.location.href = "/home";
                
            })
            .catch(error=>{
                console.log(error);
            })
    }

    login=()=>{
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // const userKey = `user_${user.email}`;
                // localStorage.setItem(userKey,JSON.stringify(user));
                localStorage.setItem("users",JSON.stringify(user));

                this.getUserDetails();

                // window.location.reload();
                
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    
    render() { 
        return ( 

            <div>
                <input className='loginpage_text' type='text' onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} placeholder='Phone number, username, or email'/>
                <input className='loginpage_text' type='password' onChange={(event)=>{this.state.password=event.currentTarget.value;}} placeholder='Password'/>
                <button className='login_btn' onClick={this.login}>Log In</button>
                {/* <div id="link-container"></div> */}
            </div>
        );
    }
}
 
export default SignIn;