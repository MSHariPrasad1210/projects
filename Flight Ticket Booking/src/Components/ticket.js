import React from 'react';
import "./ticket.css";
import air from "./image/airplane.png";
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import flight from "./image/booking.png";
import bar from "./image/bar1.avif";

function Ticket() {
    return ( <>
    <Navbar2 />
			 <Sidebar/>
    <div className='tickettop'>
         <div className='ticketcard'>
            <div className='ticketcard2'>
               <div className="imgf">
                  <img src={flight} alt='flight' height={50}/>
               </div>
               <div className="texts">
                  <h2 id="t2i"><span id="t21">Sky</span><span id="t22">Connect</span></h2>
               </div>
            </div>
            <div className="flight-comp-dest">
              <div className="flight-comp-dest-child1">
                <div className="flight-comp-dest-child10">
                  <h3>Delhi</h3>
                  <p>10:00 AM</p>
                </div>
                <div className="flight-flight1">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child10">
                  <h3>Chennai</h3>
                  <p>10:30 AM</p>
                </div>
              </div>
              </div>
              <div className='detail1'>
                <div className='detail2'>
                  
                     <h4 className='to'>Flight no</h4>
                     <h2 className='to2'>224MP</h2>
                   
                </div>
                <div className='detail2'>
                     <h4 className='to'>Class</h4>
                     <h2 className='to2'>Business</h2>
                </div>
                <div className='detail2'>
                     <h4 className='to'>TicketId</h4>
                     <h2 className='to2'>A098674</h2>
                </div>
         </div>
         <div className='detail12'>
                <div className='detail2'>
                  
                     <h4 className='to'>Passenger</h4>
                     <h2 className='to2'>1 Adult</h2>
                   
                </div>
                <div className='detail2'>
                     <h4 className='to'>Seat</h4>
                     <h2 className='to2'>Seat 3C</h2>
                </div>
                <div className='detail2'>
                     <h4 className='to'>Baggage</h4>
                     <h2 className='to2'>5 kg</h2>
                </div>
         </div>
         <div className='img23'>
           <img src={bar} className='u1'></img>
         </div>
         </div>
         <div className='cancel'>
         <button className="bookt">Cancel Ticket</button>
         </div>
        
    </div>
    </> 
    );
}

export default Ticket;