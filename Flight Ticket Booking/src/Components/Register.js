import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
	const[name1,setName]=useState('');
	const[username,setUsername]=useState('');
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');
	const[type,setType]=useState('');
	const navigate = useNavigate();
	 
	// const data={
	// 	name:name1,
	// 	username:username,
	//     email:email,
	// 	password:password,
	// 	type:type
	// }

	const submitHandler=async(e)=>{
        // axios.post(`http://localhost:8080/post`,data)
		console.log(name1);
		e.preventDefault();
		try{
			const response=await axios.post('http://localhost:8181/api/v1/auth/register',{name1,username,email,password,type});
			if(response.status==200){
				setName('');
				setUsername('');
				setEmail('');
				setPassword('');
				setType('');
				//    setPassword('');
				navigate('/');
			}
		}
		catch(error){
			console.log("Error: ",error);
		}
	}

	return (
		<div className="content login">
			<div className="card">
				<h1> Register </h1>
				<div className="line">
					<label htmlFor="name">
						<h2> Name: </h2>
					</label>
					<input type="text" id="name" className="inputfield" value={name1} onChange={(e)=>{setName(e.target.value)}}/>
				</div>
				<div className="line">
					<label htmlFor="username">
						<h2> Username: </h2>
					</label>
					<input type="text" id="username" className="inputfield" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
				</div>

				<div className="line">
					<label htmlFor="email">
						<h2> E-mail: </h2>
					</label>
					<input type="text" id="email" className="inputfield" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
				</div>
				<div className="line">
					<label htmlFor="password">
						<h2> Password: </h2>
					</label>
					<input type="text" id="password" className="inputfield" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
				</div>
				<div className="line">
					<label htmlFor="text">
						<h2> Type: </h2>
					</label>
					<input type="text" id="type" className="inputfield" value={type} onChange={(e)=>{setType(e.target.value)}}/>
				</div>
				{/* <Link to="/home"> */}
				<button className="register1" style={{width:"40%"}} onClick={submitHandler}> Register </button>
				{/* </Link> */}
				<a href="/" className="link-button">
					Already have an account?
				</a>
			</div>
		</div>
	);
}

export default Register;
