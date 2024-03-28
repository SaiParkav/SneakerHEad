import React from 'react';
import "../Sections/LoginSignup/LoginSignup.css"
import { useNavigate } from 'react-router-dom';
 
const ContactUs = () => {
  const navigate =useNavigate();
  function submit(){
    alert("Feedback Submited Successfully");
    navigate('/');
  }
  return (
    <div className="w-full mt-20 flex flex-col items-center justify-center">
      <div className="bg-white  px-8 pt-4 pb-8 mb-4 w-auto"></div>
      <h1 className="text-3xl font-bold mb-6 text-center text-coral-red">Contact Us</h1>
      <p className='text-center text-lg  pb-3'>If you have any questions, comments, or feedback, please feel free to contact us using the form below:</p>
      <form className="mt-4 flex flex-col items-center justify-center " >
      
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email ID"  />
      </div>
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" name="user" placeholder="Name" />
      </div>

      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 textarea-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="textarea" name="user" placeholder="Feedback & Suggestions" />
      </div>
        

        <button className="bg-coral-red text-white px-4 py-2 rounded hover:bg-coral-red" type="submit" onClick={submit}>Submit</button>
      </form>
    </div>
  );
};
 
export default ContactUs;