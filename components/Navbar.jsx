import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/jobify5.png";
function Navbar() {
    return ( 
    <>
    <div className="header">
        
        <div className="img"><img src={logo} height={40}></img></div>
       <div className="one">
             <Link to="/"><h3>Home</h3></Link>
        </div>
       <div className="one"><Link to="/searchjob"><h3>Jobs</h3></Link></div>
       <div className="one"><Link to="/member"><h3>Membership</h3></Link></div>
       <div className="one"><Link to="/contact"><h3>Contact</h3></Link></div>
       <div className="lr">  
        <button className="but3">
            <Link to="/login">Login</Link>
        </button>  
    <button className="but4"><Link to="/signup">Register</Link></button>
    </div>
    {/* <div className="dr">
    <Dropdown/>
   
    </div> */}
    </div>
    
    </>
     );
}

export default Navbar;