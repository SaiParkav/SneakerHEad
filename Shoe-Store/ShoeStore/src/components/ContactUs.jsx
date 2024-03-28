import React, { useState } from 'react';
import "../Sections/LoginSignup/LoginSignup.css"
import { useNavigate } from 'react-router-dom';
import FeedbackService from '../services/FeedbackService';
 
const ContactUs = () => {
  const navigate =useNavigate();
  const [addFeedback,setFeedback]=useState([]);
  const handleInputChange=event=>{
    const {name,value}=event.target;
    setFeedback({...addFeedback,[name]:value});
  };
  const handleAddFeedback=(e)=>{
    e.preventDefault();
    var data ={
      email:addFeedback.email,
      name:addFeedback.name,
      feedback:addFeedback.feedback
    };
    console.log(data);
    FeedbackService.create(data)
    .then((response)=>{
      console.log(response);
      alert("Feedback Submited Sucessfully, We will Get Back Soon");
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
      alert("Error In sending Your Feedback ,Please Send Again");
    });

  }
  return (
    <div className="w-full mt-20 flex flex-col items-center justify-center">
      <div className="bg-white  px-8 pt-4 pb-8 mb-4 w-auto"></div>
      <h1 className="text-3xl font-bold mb-6 text-center text-coral-red">Contact Us</h1>
      
      {/* <div className="inputs mb-6"> */}
      
      <p className='text-center text-lg  pb-3'>If you have any questions, comments, or feedback, please feel free to contact us using the form below:</p>
      <form className="mt-4 flex flex-col items-center justify-center gap-5 " >
      
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email ID" onChange={handleInputChange}  />
      </div>
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="user" name="name" placeholder="Name" onChange={handleInputChange}/>
      </div>

      <div className="input mb-30">
        <input className=" border rounded w-full py-2 px-3 textarea-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="feedback" name="feedback" placeholder="Feedback & Suggestions" onChange={handleInputChange}/>
      </div>
        <button className="bg-coral-red hover:bg-coral-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={(e)=>handleAddFeedback(e)}>Submit</button>
      </form>
      </div>
    // </div>
  );
};
 
export default ContactUs;