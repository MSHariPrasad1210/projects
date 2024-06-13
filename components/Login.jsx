import React, { useState } from "react";
import "../assets/css/Login.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
function Login() {

    const [email, setEmail] = useState(''); // Fix here: use useState correctly
    const [password, setPassword] = useState(''); // Add state for password
    const dispatch = useDispatch();
    const navigate = useNavigate();

//     const submit = () => {
//         alert("Sign up Completed");
//         console.log(email);
//         if (email.trim().includes('@admin.com')) {
//             const data = {
//                 email : email,
//                 password : password,
//                 role: "admin"
//                }
// console.log(data);
// dispatch(login(data))
//             navigate('/dashboard');
//         } else {
//             const data = {
//                 email : email,
//                 password : password,
//                 role: "user"
//             }
//             dispatch(login(data));
//             navigate('/userdashboard');
//         }  
//   };
const token=localStorage.getItem("jwtToken");
console.log(token);
const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const response= await axios.post(`http://localhost:8081/api/v1/auth/authenticate`,{email: email, password: password })
            
              const token = response.data.token;
              const id = response.data.id;
              console.log(email);
              console.log(token);
              localStorage.setItem('jwtToken2', token);
            
        
            if (email.trim().includes('@admin.com') && response.status===200) {
                            const data = {
                                email : email,
                                password : password,
                                role: "admin"
                               }
                console.log(data);
                localStorage.setItem("user",JSON.stringify({email : email,role: "admin" }))
                toast.success("LoggedIn Successfully");
                dispatch(login(data))
                            navigate('/dashboard');
                        }
                        else if(email.trim().includes('@gmail.com') && response.status===200){
                            const data = {
                                email : email,
                                password : password,
                                role: "user"
                            }
                            localStorage.setItem("user",JSON.stringify({email : email,role: "user" }))
                            console.log(data);
                            toast.success("LoggedIn Successfully");
                            dispatch(login(data));
                            navigate('/userdashboard');
                        }                    
        }
    catch(error) {
        console.error('Error sending data:', error);
    }
    
}
    return ( <>
        <ToastContainer
        position="top-center"
        reverseOrder={false}/>
    <div className="parent">
         <div className="sign">
            <center><div className="login"><h1 className="lo">Welcome</h1></div></center>
            <div className="fo">
                <center>
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <div className="pass">
            <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="but">
<div className="but1">
      
      {/* <button className="but2" onClick={handleSubmit}><Link to="/">Sign in</Link></button> */}
      <button className="but2" onClick={handleSubmit}>Sign in</button>
</div>
<Link to="/signup" className="link-button">
					    Create a new Account
				    </Link>
</div>
            </center>
            </div>
            
         </div>
    </div>
    </> );
}

export default Login;