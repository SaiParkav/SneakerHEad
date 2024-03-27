import React,{useState} from 'react';
import UserService from '../UserService';
// import {useNavigate} from "react-router-dom";
import  './LoginSignup.css';
 import user_icon from'../../assets/images/user.png';
 import email_icon from'../../assets/images/email.png';
 import password_icon from '../../assets/images/password.png';
const Login= () => {
   
    const initialLoginState ={
        email:"",
        password:""
    }
   
    const [login,setLogin]= useState(initialLoginState);
    
    // let navigate = useNavigate();
   
    const handleLoginChange = event => {
        const{name,value} = event.target
        setLogin({...login,[name]:value});
    }

    

    const saveLoginData = () => {
        var data = {
            email: login.email,
            password: login.password
        };
        console.log(data);
        UserService.createlogin(data)
        .then((response)=> {
            setLogin({
                email: response.data.email,
                passsword: response.data.password
            });

        }).catch((error)=>{
            console.log(error);
            alert(error);
        });
    };

   
    const newLogin = () => {
        setLogin(initialLoginState);
    };
    return (
    
        <div className = "container">
        <div className = "header">
        <div className ="text ">Login</div>
        <div className = "underline"></div>
        </div>

        <div className ="inputs">
        <div className ="input">
        <img src = {email_icon} alt= ""/>
        <input type ="email"name="email"  placeholder = "Email ID" onChange={handleLoginChange}/>
        </div>
         <div className ="input">
        <img src = {password_icon} alt= ""/>
        <input type ="password" name="password" placeholder = "Password" onChange={handleLoginChange}/>
        </div>
        </div>
        
        <div className ="forgot-password">New User? <span><a href='/signup'>Click here</a></span></div>
         <div className = "submit-container">
        <div className ="submit"onClick={()=>{saveLoginData()}}>Login</div>
        </div>
        </div>
    )
 }
 export default Login
