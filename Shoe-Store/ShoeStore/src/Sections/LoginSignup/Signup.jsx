import React,{useState} from 'react';
import UserService from '../UserService';
// import {useNavigate} from "react-router-dom";
import  './LoginSignup.css';
 import user_icon from'../../assets/images/user.png';
 import email_icon from'../../assets/images/email.png';
 import password_icon from '../../assets/images/password.png';
const Signup = () => {
    const initialSignupState ={
        email:"",
        username:"",
        password:""
    };
   
    const [signup,setSignup] = useState(initialSignupState);
    

    // let navigate = useNavigate();
    const handleSignupChange = event => {
        const {name,value} = event.target 
        setSignup({...signup,[name]:value});
    };
    

    const saveSignupData = () => {
        var data ={
            email: signup.email,
            username: signup.username,
            password: signup.password
        };
         console.log(data);

        UserService.createsignup(data)
        .then((response)=> {
            setSignup ({
                email: response.data.email,
                username: response.data.username,
                password: response.data.password
            });
        }).catch((error)=>{
            console.log(error);
            alert(error);
        });
    };

    

    const newSignUp =() => {
      setSignup(initialSignupState);
    };
    
    return (
    
        <div className = "container">
        <div className = "header">
        <div className ="text ">Sign Up</div>
        <div className = "underline"></div>
        </div>

        <div className ="inputs">
        <div className ="input">
        <img src = {email_icon} alt= ""/>
        <input type ="email"name="email" placeholder = "Email ID" onChange={handleSignupChange}/>
        </div>
        <div className ="input">
        <img src = {user_icon} alt= ""/>
        <input type ="text"name="username" placeholder ="Name"onChange={handleSignupChange} />
        </div>
         
        <div className ="input">
        <img src = {password_icon} alt= ""/>
        <input type ="password" name="password" placeholder = "Password"onChange={handleSignupChange}/>
        </div>
        </div>
        
        <div className ="forgot-password">Already existing user? <span><a href='/login'>Click here</a></span></div>
         <div className = "submit-container">
        <div className = "submit" onClick={()=> {saveSignupData()
    }}>Sign Up</div>
        
        </div>
        </div>
    )
 }
 export default Signup
