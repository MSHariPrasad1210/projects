import React, { Component } from 'react';
import "../assets/css/Premium.css";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useState } from 'react';

function Premium() {
    const [Premium,setPremium]=useState("free");
    const premium=localStorage.getItem('premium');
    const handleClick = async(e)=>{
        console.log(Premium);
        e.preventDefault();
        localStorage.setItem('premium', Premium);
        toast.success("Upgraded to premium");
    };

    const handlePlanChange = (e) => {
        setPremium(e.target.value);  
    };


    return ( <>
     <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
    <div className='prem'>
    <form class="plan-chooser">
  <div class="header">
  <span class="title">Choose your plan</span>
  {/* <p class="desc">Amet minim mollit non deserunt ullamco est sit .</p> */}
  </div>
  <div class="plan-option">
      {/* <input value="paid" id="annual" name="plan" type="radio" checked={Premium === "paid"}  onChange={handlePlanChange} /> */}
    <label for="annual">
       <div class="plan-info">
      <span class="plan-cost">Current plan</span>
      <span class="plan-name">{premium}</span>
      </div>
      {/* <span class="reduction"> Save 20% </span> */}
    </label>
  </div>
  <div class="plan-option">
      <input value="free" id="free" name="plan" type="radio" checked={Premium === "free"}  onChange={handlePlanChange}  />
    <label for="free">
      <div class="plan-info">
      <span class="plan-cost">$0</span>
      <span class="plan-name">Try Free</span>
      </div>
    </label>
  </div>
  <div class="plan-option">
      <input value="paid" id="monthly" name="plan" type="radio" checked={Premium === "paid"}  onChange={handlePlanChange} />
    <label for="monthly">
      <div class="plan-info">
      <span class="plan-cost">$29/month</span>
      <span class="plan-name">Monthly plan</span>
      </div>
    </label>
  </div>
  
            <button className="choose-btn" onClick={handleClick}> Upgrade </button>

</form>

    </div>
    </> );
}

export default Premium;