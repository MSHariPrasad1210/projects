import React from "react";
import {Link,Outlet} from "react-router-dom";
import flight from "./image/booking.png";
import Search1 from './image/search-removebg-preview.png';
import "./navbar2.css";
function Navbar2() {
	return (
		<>
		
        <div className="nvbar2">
          <div className="home1">
            <div className="title">
               <div className="imgf">
                  <img src={flight} alt='flight' height={50}/>
               </div>
               <div className="texts">
                  <h2 id="ti"><span id="t1">Sky</span><span id="t2">Connect</span></h2>
               </div>
            </div>
            <div className="searchout">
                  <div className="search">
                  <div className="imgs">
                     <img src={Search1} alt="search" height={35}/>
                  </div>
                  {/* <TextField id="outlined-basic" label="search destinations" variant="outlined" /> */}
                  <input type="search" placeholder="search destination"></input>
                  </div>
                  
            </div>
			

      </div>
	  <div className="nvbar"></div>
		<div className="navbar">
			<nav>
			    <div className="links1">
				<Link to="/home">
					<h2 className="white">Home</h2>
				</Link>
					{/* <li> */}
				<Link to="/">
					<h2 className="white">Login</h2>
				</Link>
				
				{/* <li> */}
				<Link to="/register">
					<h2 className="white">Register</h2>
				</Link>
				{/* </li> */}			
			</div>
			</nav>
			
		 </div>
         </div>
		
		{/* </Outlet> */}
		</>
	);
}

export default Navbar2;
