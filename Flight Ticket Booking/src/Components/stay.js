import React from "react";
import "./stay.css";

function Stay() {
    return ( 
        <>
        <div className="staybox">
              <div className="box21">
                <h1 className="re">
                    Stay Connected
                </h1>
              </div>
              <div className="box31">
                <h3 className="he3">
                Save with our latest fares and offers. Leave us your e-mail<br></br>
                address and receive information about our special offers.
                </h3>
              </div>
     
              <div className="input2">
              <input type="type" placeholder="Type your email address" className="stayinput"></input>
             
              <a href="/" className="email-button">
						        <button className="ebutton">Subscribe</button>
					    </a>
           
              </div>
              
        
        </div>
        </>
     );
}

export default Stay;