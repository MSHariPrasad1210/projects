import React from "react";
import se from "../assets/images/search.svg";
import "../assets/css/Searchjob.css";
import CardJob from "./CardJob"

function Searchjob() {

    return ( <>

      <div className="job">
            <div className="search">
                <div className="im"><img src={se}/></div>
                 <div className="oner"><input type="value" placeholder="Job Title" className="q"></input></div>
                 <div className="oner i"><input type="value" placeholder="Category" className="q"></input></div>
                 <div className="oner"><input type="value" placeholder="Location" className="q"></input></div>
                 <div className="oner"><button className="bl">Search</button></div>
                 
                 <div></div>
            </div>
      </div>
      <div className="crf">
      <CardJob />
      
      </div>
     
    </>
     );
}

export default Searchjob;