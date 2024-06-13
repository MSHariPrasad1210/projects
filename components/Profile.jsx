import React from "react";
import "../assets/css/Profile.css";
import Sidebar from "./Sidebar1";
import user from "../assets/images/user.png";
import virat from "../assets/images/virat.jpg"
function Profile() {
    return ( 
        <>
       <Sidebar />
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
                                Address:
                            </h3>
                            </center>
                      </div>
                     
                   </div >
                    <div className="detail2">
                        <div className="det1">
                        <center>
                            <h3 >
                                Hari Prasad
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                hari@gmail.com
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                938746832
                            </h3>
                            </center></div>
                            <div className="det1">
                        <center>
                            <h3 >
                                156,Subash Nagar,Tuticorin.
                            </h3>
                            </center></div>
                   </div>
                   </div>
              </div>
           </div>
           </>
      
     );
}

export default Profile;