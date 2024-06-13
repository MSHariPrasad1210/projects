import React, { Component } from 'react';
import "../assets/css/contact.css";
import contact from "../assets/images/contact.avif";
function Contact() {
    return ( <>
    <div className='contact1'>
       <div className='cht12'>
         <div className='imgc1'>
            <img src={contact} className='imgc2'></img>
         </div>
         <div className='cont2'>
         <div className='prof1112'>
                   <div class="formgroupcppp">
                    <label class="text-dark">Name</label>
                    <input type="text" class="form-control" placeholder="Hari" required=""/>
                    </div>
                   <div class="formgroupcppp">
                    <label class="text-dark">Mobile no</label>
                    <input type="text" class="form-control" placeholder="938235713" required=""/>
                    </div>
                   <div class="formgroupcppp">
                    <label class="text-dark">Email Address</label>
                    <input type="text" class="form-control" placeholder="hari@gmail.com" required=""/>
                    </div>
                   <div class="formgroupcppp">
                    <label class="text-dark">Message</label>
                    <input type="textr" class="form-controlcpp" placeholder="Queries" required=""/>
                    </div>
                   </div>
         <center><button className="but2">Submit</button></center>
         </div>
       </div>
    </div>
    </> );
}

export default Contact;