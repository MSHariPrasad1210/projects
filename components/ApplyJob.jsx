import React, { Component } from 'react';
import "../assets/css/ApplyJob.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ApplyJob() {
    const showToastMessage = () => {
        alert("Applied successfully");
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
    return ( <>
         <div className='ajd1'>
             <div className='aj1'>
                 <h1 className='aver23'>Job Details</h1>
                 <h1 className='avr23'>Website design and building</h1>
                 <div className='col45'><h1 className='avr223'>Ecommerce Website Development</h1></div>
                 <h1 className='s23'>build and design a physiotherapy clinic website.
require:</h1>
                 <h1 className='s23'>1. appointment booking from website, need to send patient sms for reminder etc.</h1>
                 <h1 className='s23'>2. website design to come from designer. Please do not ask me for pictures I hope the designer can design and create by yourself.</h1>
                 <h1 className='s23'>3. Must finish fast within a week.
require:</h1>
                  <hr className='hr23'></hr>
                <h1 className='avr23'>Skills and expertise</h1>
                <div className='aj456'>
                <div className='col451'><h1 className='avr223'>Web Design</h1></div>
                <div className='col451'><h1 className='avr223'>Graphic Design</h1></div>
                <div className='col452'><h1 className='avr223'>Web Development</h1></div>
                <div className='col451'><h1 className='avr223'>WordPress</h1></div>
                <div className='col452'><h1 className='avr223'>Adobe Photoshop</h1></div>
                </div>
             </div>
              <div className='aj1f'>
              <h1 className='aver23'>Fill Details</h1>
                 <div className='appf'>
                    <div className='appf1'>
                   <div class="form-group">
                    <label class="fill">First Name</label>
                    <input type="text" class="form-contro" placeholder=" Hari" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="fill">Phone number</label>
                    <input type="text" class="form-contro" placeholder="91 9874872" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="fill">Resume</label>
                    <input type="file" class="form-contro" placeholder=" " required=""/>
                    </div>
                    </div>
                    <div className='appf1'>
                   <div class="form-group">
                    <label class="fill">Last Name</label>
                    <input type="text" class="form-contro" placeholder="Prasad" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="fill">Email id</label>
                    <input type="text" class="form-contro" placeholder="hari@gmail.com" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="fill">Experience</label>
                    <input type="number" class="form-contro" placeholder="5 years" required=""/>
                    </div>
                    </div>
                    </div>
                    <center><button className="but2j" onClick={showToastMessage}>Submit</button></center>
                    <ToastContainer />
                   </div>
              
         </div>
    </> );
}

export default ApplyJob;