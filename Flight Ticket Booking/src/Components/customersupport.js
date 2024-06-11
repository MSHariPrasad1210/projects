import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import './customer.css';
import { TextField } from "@mui/material";
import axios from 'axios';
import { useState } from 'react';

function CustomerSupport() {
  const[email,setEmail]=useState('');
  const[feedback,setFeedBack]=useState('');

  const submitHandler=async()=>{
    alert("Thanks for your feedback");
   try{
      const res= await axios.post('http://localhost:8080/api/v1/users/addUserFeedback',{email,feedback});
      console.log(res.response.data);
    }
		catch(error){
			console.log("Error: ",error.response.data);
		}
  }
  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div
        style={{ marginLeft: "7%" }}
        className="home34"
      >
       <div className='feed'>
        <div className='onr'>
            <h1 className='t23er'>Feedback</h1>
            </div>
					<div className='one'>
          <TextField  minRows={6} label="name" />
				  </div>
          <div className='one'>
          <TextField minRows={6} label="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
				  </div>
          <div className='one'>
          {/* <Textarea minRows={2} /> */}
          <TextField
                  label="Feedback"
                  multiline
                  rows={2}
                  maxRows={4} value={feedback} onChange={(e)=>{setFeedBack(e.target.value)}}
                />
				  </div>
          <div className='oner'>
          <button className="sub" onClick={submitHandler}>Submit</button>
          </div>
       </div>
      </div>
    </>
  );
}

export default CustomerSupport;