import React, { Component } from 'react';
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import FlightComp from './FlightComp';
import axios from 'axios';
import { useState,useEffect } from 'react';

import "./Bookticket.css";

// if(fromdest!=null){
    //     axios.get(`http://localhost:8080/getfrom/${fromdest}`)
    //     .then(res=>setFlights(res.data))
    // }
    // else{
function BookTickets() {
    const[flights,setFlights]=useState([])
    const[fromdest,setFromDest]=useState('');
    //console.log(fromdest);

    useEffect(()=>{
        axios.get("http://localhost:8080/getflight")
    .then(res=>{
        setFlights(res.data);
    })
    },[])


    if(fromdest.length==0){
    axios.get("http://localhost:8080/getflight")
    .then(res=>{
        setFlights(res.data);
    })
// }
}
   const SubmitFrom=()=>{
    if(fromdest.length>0){
              axios.get(`http://localhost:8080/getfrom/${fromdest}`)
        .then((res)=>{
            setFlights(res.data);
        })
    }
   }

  

    return ( 
        <>
        <Navbar2 />
			 <Sidebar/>
        <div className='top'>
            <h1 className='tet'>Book Your's!</h1>
            <div className='bookcard'>
                <div className='ter'>
                    <h4 className='word'>Leaving from</h4>
                 <input type="text"  className='ticket' value={fromdest} onChange={(e)=>{setFromDest(e.target.value)}}
                 onKeyDown={SubmitFrom}></input>
                 </div>
                 <div className='ter'>
                 <h4 className='word'>Going to</h4>
                 <input type="text"  className='ticket'></input>
                 </div>
                 <div className='ter'>
                 <h4 className='word'>Departure</h4>
                 <input type="date"  className='ticket'></input>
                 </div>
                 
                 <a href="/" className="ticket-button">
						        {/* <button className="ticketsearch">Search</button> */}
                                <button type="submit" className="ticketsearch"><i class="fa fa-search"></i></button>
					    </a>
            </div>
            { flights.map((m)=> 
            <FlightComp val={m} />)
            }
            {
                flights.length==0 && (
                    <h1 style={{"font-family":"georgia","font-size": "25px"}}>No Match Found</h1>
                )
            }
        </div>
        </>
     );
}

export default BookTickets;