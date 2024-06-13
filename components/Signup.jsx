import React, { useState } from "react";
import "../assets/css/Signup.css";
import { TextField } from "@mui/material";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Signup() {
    const[name,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[address,setAddress]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            // const response3= await axios.get(`http://localhost:8081/getuserByEmail/${email}`)
            // if(response3.status==200){
            //     toast.error("Email Already Exists");
            // }
            // else{
            

           const response= await axios.post(`http://localhost:8081/api/v1/auth/register`,{name:name,email: email, password: password })
        // if(resp)
              const token = response.data.token;
              const id = response.data.id;
              console.log(email);
              console.log(token);
              localStorage.setItem('jwtToken', token);
            const response2= await axios.post(`http://localhost:8081/addusers`,{name,email,password,phoneNumber,address })
            if(response.status==200 && email.trim().includes('@admin.com')){
                localStorage.setItem("user",JSON.stringify({name: name,email : email,role: "admin" }))
                toast.success("Registered Successfully");
                navigate('/dashboard');
              }
              else if(response.status==200 && email.trim().includes('@gmail.com')){
                toast.success("Registered Successfully");
              localStorage.setItem("user",JSON.stringify({name: name,email : email,role : "user" }))
              navigate('/userdashboard');
            }
            }
        // }
        catch(error) {
			console.error('Error sending data:', error);
		}
    }
    return ( <>
   <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
    <div className="parent">
        <div className="photo"></div>
         <div className="sign">
            <center><div className="login"><h1 className="lo">Welcome</h1></div></center>
            <div className="fo">
                    <center>
                        <div className="text">
                <TextField id="standard-basic" label="Username" variant="outlined" value={name} onChange={(e)=>{setUsername(e.target.value)}} required/>
                <br></br>
                </div>
                <TextField id="standard-basic" label="Email" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                <br></br>
                <TextField id="standard-basic" label="Phone number" variant="outlined" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} required/>
                <br></br>
                <div className="pass">
                {/* <TextField id="standard-basic" label="Phone number" variant="outlined" /> */}
                {/* <TextField id="standard-basic" label="Password" variant="outlined" />  */}
                 <TextField id="standard-basic" label="Address" variant="outlined" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                </div>
            
<TextField id="standard-basic" label="Password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/> 
<div className="but1">
      <button className="but2" onClick={handleSubmit}>Register</button>
</div>

            </center>
            </div>
            
         </div>
    </div>
    </> );
}

export default Signup;