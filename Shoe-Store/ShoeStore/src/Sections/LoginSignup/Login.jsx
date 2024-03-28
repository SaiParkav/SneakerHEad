import React,{useState} from 'react';
import UserService from '../UserService';
// import {useNavigate} from "react-router-dom";
import  './LoginSignup.css';
 import user_icon from'../../assets/images/user.png';
 import email_icon from'../../assets/images/email.png';
 import password_icon from '../../assets/images/password.png';
 import { useNavigate } from 'react-router-dom';
 const Login= () => {
   const navigate =useNavigate();
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
        setLogin(initialLoginState);
        var data = {
            email: login.email,
            password: login.password
        };
        console.log(data);
        UserService.login(data)
        .then((response)=> {
            setLogin({
                email: response.data.email,
                passsword: response.data.password
            });
            if(response.data.value)
            {
               navigate('/')
            }
            else
            {
                navigate('/signup')
            }
        }).catch((error)=>{
            console.log(error);
            alert(error);
        });
    };

   
    const newLogin = () => {
        setLogin(initialLoginState);
    };
    return (
    
        <div className="w-full mt-40 flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4">
        <div className="text-3xl font-bold mb-6 text-center text-blue-600">Login</div>
        <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" value={login.email} placeholder="Email ID" onChange={handleLoginChange} />
        </div>
        <div className="mb-6">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={login.password} placeholder="Password" onChange={handleLoginChange} />
        </div>
        <div className="text-sm mb-4 text-center">
            New User? <a href="/signup" className="text-purple-500">Sign up here</a>
        </div>
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={() => { saveLoginData() }}>Login</button>
        </div>
    </div>
</div>

    )
 }
 export default Login