import React, { Component } from 'react';
import Sidebar from './Sidebar1';
import "../assets/css/AddProfile.css";
import { useState } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';

function AddProfile() {

    const [name,setFirstname]=useState("");
    const [jobtitle,setjobtitle]=useState("");
    const [age,setage]=useState("");
    const [experience,setexperience]=useState("");
    const [language,setlanguage]=useState("");
    const [tellabout,settellabout]=useState("");
    const [salary,setsalary]=useState("");
    const [phonenumber,setphoneNumber]=useState("");
    const user=JSON.parse(localStorage.getItem('user'));

    const handlesubmit = async(e)=>{
        e.preventDefault();
        try{
          
            const response2= await axios.post(`http://localhost:8081/addusers`,{name,email:user.email,jobtitle,salary,phonenumber,age,experience,language,tellabout })
             toast.success("Profile added successfully");
            }
    
        catch(error) {
			console.error('Error sending data:', error);
		}
    }
    return ( <>
     <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
        <Sidebar/>
        <div className='prof'>
        <h1 className='ver23a'>My Profile</h1>
           <h3 className='ver45a'>Home / Dashboard / My Profile</h3>
           <div className='proform1'>
               <div className='proform11'>
               <h3 className='ver23aa'>Basic Info</h3>
               </div>
               <div className='prof11'>
                   <div className='prof111'>

                   </div>
                   <div className='prof112'>
                   <div class="form-group">
                    <label class="text-dark">First Name</label>
                    <input type="text" class="form-control" placeholder=" Hari" value={name} onChange={(e)=>{setFirstname(e.target.value)}} required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Last Name</label>
                    <input type="text" class="form-control" placeholder=" Prasad"   required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Phone number</label>
                    <input type="number" class="form-control" placeholder=" 91 9874872"  value={phonenumber} onChange={(e)=>{setphoneNumber(e.target.value)}} required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Age</label>
                    <input type="number" class="form-control" placeholder=" 21" value={age} onChange={(e)=>{setage(e.target.value)}} required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Language</label>
                    <input type="text" class="form-control" placeholder="Tamil English" value={language} onChange={(e)=>{setlanguage(e.target.value)}} required=""/>
                    </div>
                   </div>
                   <div className='prof113'>
                   <div class="form-group">
                    <label class="text-dark">Middle Name</label>
                    <input type="text" class="form-control" placeholder="Optional" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Job Title</label>
                    <input type="text" class="form-control" placeholder="Developer" value={jobtitle} onChange={(e)=>{setjobtitle(e.target.value)}} required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Expected Salary</label>
                    <input type="number" class="form-control" placeholder="600000" value={salary} onChange={(e)=>{setsalary(e.target.value)}} required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Experience in Years</label>
                    <input type="number" class="form-control" placeholder="4" value={experience} onChange={(e)=>{setexperience(e.target.value)}} required=""/>
                    </div>
                   </div>
               </div>
               <div className='tearea'>
               <div class="form-group">
                    <label class="text-dark">Tell About Yourself</label>
                    <textarea type="number" class="form-controll" placeholder="e.x about your skills and Educational details" value={tellabout} onChange={(e)=>{settellabout(e.target.value)}} required=""/>
                    </div>
               </div>
               <center><button className="but2" onClick={handlesubmit} style={{width:"10%",marginTop:"3vh"}} >Submit</button></center>
           </div>
        </div>
    </> );
}

export default AddProfile;