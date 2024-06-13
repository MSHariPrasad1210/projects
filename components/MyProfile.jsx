import React, { useState } from "react";
import "../assets/css/Profile.css";
import Sidebar from "./Sidebar1";
import AdminSidebar from "./AdminSidebar";
import { useEffect } from "react";
import axios from "axios";
function MyProfile() {

    const [profile,setProfile]=useState([]);
    const user=JSON.parse(localStorage.getItem('user'));


    useEffect(()=>{
        axios.get(`http://localhost:8081/getuserByEmail/${user.email}`)
    .then(res=>{
        setProfile(res.data);
        console.log(user.email);
        console.log(profile);
    })
    },[])
    
    return ( 
        <>
       <AdminSidebar />
       <div className="pro1">
           <div className="pro2">
              <div className="top">
            
              <div className="im">
              
                   {/* <img src={virat} className="user"></img> */}
              
             
              </div>
              </div>
              <div className="content">
                   <div className="detail1">
                        <div className="det1">
                            <center>

                                
                            <h3 >
                                Username:
                            </h3>
                            </center>
                      </div>
                      <div className="det1">
                            <center>
                            <h3 >
                                Email:
                            </h3>
                            </center></div>
                      <div className="det1">
                                    <center>
                                    <h3 >
                                        Phone number:
                                    </h3>
                                    </center>
                        </div>
                      <div className="det1">
                            <center>
                            <h3 >
                                JobTitle:
                            </h3>
                            </center>
                      </div>
                      <div className="det1">
                            <center>
                            <h3 >
                                Salary:
                            </h3>
                            </center>
                      </div>
                      <div className="det1">
                            <center>
                            <h3 >
                                Age:
                            </h3>
                            </center>
                      </div>
                      <div className="det1">
                            <center>
                            <h3 >
                                Experience:
                            </h3>
                            </center>
                      </div>
                      <div className="det1">
                            <center>
                            <h3 >
                                Language:
                            </h3>
                            </center>
                      </div>
                     
                      <div className="det1">
                            <center>
                            <h3 >
                                tellabout:
                            </h3>
                            </center>
                      </div>
                     
                   </div >
                    <div className="detail2">
                        <div className="det1">
                        <center>
                            <h3 >
                               {profile.name}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.email}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.phoneNumber}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.jobtitle}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.salary}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.age}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.experience}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.language}
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                {profile.tellabout}
                            </h3>
                            </center></div>
                   </div>
                   </div>
              </div>
           </div>
           </>
      
     );
}

export default MyProfile;