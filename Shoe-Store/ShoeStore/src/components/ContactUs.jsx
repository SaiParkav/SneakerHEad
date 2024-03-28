import React from 'react';
import "../Sections/LoginSignup/LoginSignup.css"
 
const ContactUs = () => {
  return (
    <div className="mt-20 w-full p-4">
      <h1 className="text-4xl font-montserrat mb-4 text-coral-red text-center">Contact Us</h1>
      <p className='text-center text-lg font-regular'>If you have any questions, comments, or feedback, please feel free to contact us using the form below:</p>
      <form className="mt-4 flex flex-col items-center justify-center " >
      
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email ID"  />
      </div>
      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user" placeholder="Name" />
      </div>

      <div className="input mb-4">
        <input className=" border rounded w-full py-2 px-3 textarea-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="textarea" name="user" placeholder="Feedback & Suggestions" />
      </div>
        

        <button className="bg-coral-red text-white px-4 py-2 rounded hover:bg-coral-red" type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default ContactUs;