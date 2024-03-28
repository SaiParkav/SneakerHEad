import React,{useState} from 'react';
import UserService from '../../services/UserService';
import  './LoginSignup.css';
 import user_icon from'../../assets/images/user.png';
 import email_icon from'../../assets/images/email.png';
 import password_icon from '../../assets/images/password.png';
 const Signup = () => {
    const initialSignupState ={
        email:"",
        user:"",
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
            user: signup.user,
            password: signup.password,
            role:"user"
        };
         console.log(data);

        UserService.create(data)
        .then((response)=> {
            setSignup ({
                email: response.data.email,
                user: response.data.user,
                password: response.data.password
            });
            alert("User Created Successfully");
        }).catch((error)=>{
            console.log(error);
            alert(error);
        });
    };

    

    const newSignUp =() => {
      setSignup(initialSignupState);
    };
    
    return (
<div className="w-full mt-40 flex flex-col items-center justify-center">
  <div className="bg-white shadow-md rounded border border-red-700 px-8 pt-6 pb-8 mb-4 w-auto">
    <div className="text-3xl font-bold mb-6 text-center text-blue-600">Sign Up</div>
    <div className="inputs mb-6">
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email ID" onChange={handleSignupChange} />
      </div>
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user" placeholder="Name" onChange={handleSignupChange} />
      </div>
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" placeholder="Password" onChange={handleSignupChange} />
      </div>
    </div>
    <div className="text-sm mb-4 text-center">
      Already existing user? <a href="/login" className="text-purple-500">Login here</a>
    </div>
    <div className="submit-container">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={saveSignupData}>Sign Up</button>
    </div>
  </div>
</div>

    
    )
 }
 export default Signup