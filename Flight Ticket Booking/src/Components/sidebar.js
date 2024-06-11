import React from "react";
import {Link,Outlet} from "react-router-dom";
function Sidebar() {
    return ( 
        <>
        <nav className="main-menu">
            <ul>
                <li>
                <Link to="/home">
                        <i className="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Home
                        </span>
                    </Link>
                  
                </li>
                <li className="has-subnav">
                <Link to="/bookticket">
                        <i className="fa fa-ticket fa-2x"></i>
                        <span className="nav-text">
                            Book Tickets
                        </span>
                   </Link>
                    
                </li>
                <li className="has-subnav">
                <Link to="/ticket">
                        <i className="fa fa-globe fa-2x"></i>
                        <span className="nav-text">
                            My Bookings
                        </span>
                  </Link>
                    
                </li>
                <li className="has-subnav">
                <Link to="/customer">
                       <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Customer Support
                        </span>
                  </Link>
                    
                </li>
            </ul>
               
              
                 
            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
      
        </>
     );
}

export default Sidebar;