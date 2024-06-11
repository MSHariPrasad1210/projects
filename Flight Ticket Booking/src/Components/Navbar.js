import React from "react";
import {Link,Outlet} from "react-router-dom";
//navbar
function Navbar() {
	return (
		<>
		<div className="navbar">
			<nav>
			    <div className="links1">
				<Link to="/home">
					<h2 className="white">Home</h2>
				</Link>
					{/* <li> */}
				<Link to="/login">
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
		{/* </Outlet> */}
		</>
	);
}

export default Navbar;
