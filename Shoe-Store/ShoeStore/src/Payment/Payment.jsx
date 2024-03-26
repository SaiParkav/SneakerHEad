import React from "react";
import "./Payment.css";

export default function Payment(){
    return (
      <div className="container">
      <div className="left">
        <h3>BILLING ADDRESS</h3>
        <form>
             Full name
             <input type="text" name="" placeholder = "Enter name" />
             Email
             <input type="text" name="" placeholder = "Enter email" />
             Address
             <input type="text" name="" placeholder = "Enter address" />
             City
             <input type="text" name="" placeholder = "Enter City" />
             <div>
                  <label>
                    State
                    <select>
                           <option>Choose State</option>
                           <option>Rajasthan</option>
                           <option>Haryana</option>
                           <option>Andhra Pradesh</option>
                           <option>Karnataka</option>
                           <option>Uttar Praadesh</option>
                           <option>Madhya Pradesh</option>
                    </select>
                  </label>
                     <label>
                     Pin code
                     <input type="text" name="" placeholder = "Zip code"/>
                    </label>
             </div>
        </form>
      </div>
       <div className="right"></div>
         <h3>PAYMENT</h3>
  </div>
    )}
    


