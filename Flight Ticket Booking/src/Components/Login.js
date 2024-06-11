import React, { useState } from "react";
import "./login.css";
import { TextField } from "@mui/material";
import loginimg from "./image/login.avif";  
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {login} from './Redux/userSlice';
import axios from "axios";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');

// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 		// axios.get(`http://localhost:8080/get1/${username}/${password}`)
		// .then(res=>{
		// 	if(res.data!=null){
        //   dispatch(login({
		//   username :username
		// }))
// 		axios.post(`http://localhost:8181/api/v1/auth/authenticate`,{username,password})
// 		navigate('/home');
// 	// }
// 	// else{
// 	// 	alert("Invalid username");gmail.co
// 	// }
// }
const submitHandler=async(e)=>{
	// axios.post(`http://localhost:8080/post`,data)
	e.preventDefault();
	try{
		const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{email,password});
		console.log(response.data);
		if(response.status===200){
			dispatch(login({
				  username :email
				}));
			localStorage.setItem(
				"user",
				JSON.stringify({
					email:email,
					pass:password,
				})
			);
			setEmail('');
			setPassword('');
		
			//    setPassword('');
			navigate('/home');
		}
	}
	catch(error){
		console.log("Error: ",error);
	}
}
// )

	//   }
	return (
		<div className="loginbox">
			<div className="logincard">
			     <div className="loginimg">
				    <img src={loginimg} alt="login" height={350}/>
			     </div>
			    <div className="loginform">
					<center>
				    <h1>Login</h1>
					<br></br>
					<div className="fo">
				    <TextField id="outlined-basic" label="Username" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
					</div>
					<div className="fo">
				    <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
					</div>
					{/* <a href="/App"> */}
				    <button variant="contained" onClick={submitHandler}>Login</button>
					{/* </a> */}
				    <a href="/register" className="link-button">
					    Create a new Account
				    </a>
					</center>
				</div>
			</div>
		</div>
		
	);
}
export default Login;
