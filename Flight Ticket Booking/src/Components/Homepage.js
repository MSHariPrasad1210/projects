import React from "react";
import flight from "./image/booking.png";
import { TextField } from "@mui/material";
import { useFormControl } from '@mui/material/FormControl';
import Search from './image/search-removebg-preview.png';
import Sidebar from "./sidebar";
import webuilder from "./image/flight.png";

 function Homepage() {
    return ( 
      <>
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
                     <img src={Search} alt="search" height={35}/>
                  </div>
                  {/* <TextField id="outlined-basic" label="search destinations" variant="outlined" /> */}
                  <input type="search" placeholder="search destination"></input>
                  </div>
                  
            </div>

      </div>
      
      <div className="">
        <Sidebar/>
      </div>


       
        
      </>
     );
}

export default Homepage;