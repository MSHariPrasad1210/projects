import React, { Component, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import "../assets/css/PostJob.css";
import { FormControlLabel,Checkbox } from '@mui/material'; 
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
function PostJob() {
    
    const[title,setTitle]=useState('');
    const[description,setdescription]=useState('');
    const[email,setemail]=useState('');
    const[specialisms,setspecialisms]=useState('');
    const[username,setusername]=useState('');
    const[industry,setindustry]=useState('');
    const[jobType,settype]=useState('');
    const[carrierlevel,setcarrierlevel]=useState('');
    const[qualification,setqualification]=useState('');
    const[experience,setexperience]=useState('');
    const[expectedsalary,setexpectedsalary]=useState('');
    const[gender,setgender]=useState('');
    const[applicationDeadline,setapplicationDeadline]=useState('');
    const[city,setcity]=useState('');
    const[country,setcountry]=useState('');
    const[address,setaddress]=useState('');
    const[premium,setpremium]=useState(false);

    
    
    const handleSubmit = async(e) =>{
        console.log(premium);
        e.preventDefault();
        try{
            const response=await axios.post(`http://localhost:8081/job/postjob`,{title,description,email,specialisms,username,industry,jobType,
            carrierlevel,qualification,experience,expectedsalary,gender,applicationDeadline,city,country,address,premium});
            console.log('response',response.data);
        }
        catch(error) {
            console.error('Error sending data:', error);
		}
        toast.success("Posted Successfully");
    }
    return ( <>
    <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
        <AdminSidebar/>
        <div className='profjob'>
        <h1 className='ver23a'>Post A New Job</h1>
           <h3 className='ver45a'>Home / Dashboard / PostJob</h3>
           <div className='proform1po'>
               <div className='proform11'>
               <h3 className='ver23aa'>Basic Info</h3>
               </div>
               <div className='proform1cc'>
           <div class="formgroupcp">
                    <label class="text-dark">Job Title</label>
                    <input type="text" class="form-control" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
                    </div>
                    <div className='tearea1'>
               <div class="formgroupcd">
                    <label class="text-dark">Job Description</label>
                    <textarea type="number" class="form-controll" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}} required/>
                    </div>
               </div>
           </div>
               <div className='prof11joba'>
                   <div className='prof11112'>
                   <div class="form-group">
                    <label class="text-dark">Email Address</label>
                    <input type="text" class="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Specialisms</label>
                    <input type="text" class="form-control" placeholder="Web Design" value={specialisms} onChange={(e)=>{setspecialisms(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Job Type</label>
                    <input type="text" class="form-control" placeholder="Full Time" value={jobType} onChange={(e)=>{settype(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Qualification</label>
                    <input type="textr" class="form-control" placeholder="Graduation" value={qualification} onChange={(e)=>{setqualification(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Excepted Salary</label>
                    <input type="text" class="form-control" placeholder="0" value={expectedsalary} onChange={(e)=>{setexpectedsalary(e.target.value)}} required/>
                    </div>
                   <div class="form-group hr">
                   <label class="text-dark">Premium</label>
                   <input type="checkbox" class="form-controlwe"  value={premium} onChange={(e)=>{setpremium(e.target.checked)}} required/>

                    </div>
                   <div class="form-group">
                    <label class="text-dark">Country</label>
                    <input type="text" class="form-control" placeholder="India" value={country} onChange={(e)=>{setcountry(e.target.value)}} required/>
                    </div>
                   </div>
                   <div className='prof1113'>
                   <div class="form-group">
                    <label class="text-dark">Username</label>
                    <input type="text" class="form-control" placeholder="User" value={username} onChange={(e)=>{setusername(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Industry</label>
                    <input type="text" class="form-control" placeholder="IT & Software" value={industry} onChange={(e)=>{setindustry(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Career Level</label>
                    <input type="text" class="form-control" placeholder="Beginner" value={carrierlevel} onChange={(e)=>{setcarrierlevel(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Experience</label>
                    <input type="text" class="form-control" placeholder="4 years" value={experience} onChange={(e)=>{setexperience(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Gender</label>
                    <input type="text" class="form-control" placeholder="Male" value={gender} onChange={(e)=>{setgender(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Application Deadline</label>
                    <input type="date" class="form-control" placeholder="Male" value={applicationDeadline} onChange={(e)=>{setapplicationDeadline(e.target.value)}} required/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">City</label>
                    <input type="text" class="form-control" placeholder="Tuticorin" value={city} onChange={(e)=>{setcity(e.target.value)}} required/>
                    </div>
                   </div>
               </div>
                  
               
               {/* <div class="form-group">
                    <label class="text-darkh">City</label>
                    <input type="text" class="form-controlw" placeholder="Tuticorin" required=""/>
                    </div> */}
               <div className="form-group">
                    <label class="text-darkh">Full Address</label>
                    <input type="text" class="form-controlw" placeholder="Tuticorin" value={address} onChange={(e)=>{setaddress(e.target.value)}} required=""/>
                    </div>
                    
                    <div className='byt'>
                     <center><button className="but2gh" onClick={handleSubmit}>Submit</button></center>
                     </div>
           </div>
        </div>
    </> );
}

export default PostJob;