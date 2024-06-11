import React from "react";
import search from "./image/sea.png";
import pay from "./image/pay.png";
import flex from "./image/flex.png";
import "./extra.css";
function Extra() {
    return ( <>
    <div className="box1">
         <div className="box2">
             <div className="box3">
               <img src={search} alt="search" className="sear"></img>
             </div>
             <div className="box4">
                  <h1 className="one">
                  Search a huge selection
                  </h1>
                  <h3 className="two">
                  Easily compare flights, airlines and
prices - all in one place
                  </h3>
             </div>
         </div>
         <div className="box2">
             <div className="box3">
             <img src={pay} alt="search" className="sear"></img>
             </div>
             <div className="box4">
                 <h1 className="one">Pay no hidden fees</h1>
                 <h3 className="two">Get a clear price breakdown, every step
of the way</h3>
             </div>
         </div>
         <div className="box2">
             <div className="box3">
             <img src={flex} alt="search" className="sear"></img>
             </div>
             <div className="box4">
                 <h1 className="one">Get more flexibility</h1>
                 <h3 className="two">Change your travel dates with the
Flexible ticket option*</h3>
             </div>
         </div>
    </div>
    </> );
}

export default Extra;<>
</>