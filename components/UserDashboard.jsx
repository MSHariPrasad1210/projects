import React, { Component } from 'react';
import "../assets/css/Userdashboard.css";
import Sidebar from './Sidebar1';
import log from "../assets/images/log.png";
import { useEffect,useState } from 'react';
import axios from 'axios';
function UserDashboard() {

  const [Applicants,setApplicants]=useState([]);
  const user=JSON.parse(localStorage.getItem('user'));
  useEffect(()=>{
    axios.get(`http://localhost:8081/getAppliedJob/${user.email}`)
.then(res=>{
    setApplicants(res.data);
})
},[])
   const tableData = [
      { no: 1, companyName: 'ABC Corp', jobRole: 'Software Engineer', status: 'Pending', appliedDate: '2024-02-01' },
      { no: 2, companyName: 'XYZ Ltd', jobRole: 'UX Designer', status: 'Approved', appliedDate: '2024-02-05' },
      { no: 3, companyName: 'Google', jobRole: 'UX Designer', status: 'Pending', appliedDate: '2024-02-05' },
      { no: 4, companyName: 'Drop box', jobRole: 'UX Designer', status: 'Rejected', appliedDate: '2024-02-05' },
      { no: 5, companyName: 'Zomato', jobRole: 'UX Designer', status: 'Rejected', appliedDate: '2024-02-05' },
      { no: 6, companyName: 'Netflix', jobRole: 'UX Designer', status: 'Rejected', appliedDate: '2024-02-05' },
      // Add more data as needed
    ];
    return ( <>
         <Sidebar />
         <div className='userdash1'>
         <h1 className='userver23'>Welcome to Dashboard</h1>
           <h3 className='userver45'>Home / Project Dashboard</h3>
           <div className='img23'>
            <div><img className='te' src={log}></img></div>
            <div>
                <h2 style={{color:"white"}}>Hari Prasad !</h2>
                <h3 style={{color:"white"}}>You have two projects to finish,you had completed 57% from your monthly level,keep going to your level.</h3>
            </div>
            </div>
            <div className='userdash11'>
               <div className='userdash111'>
               <h5 style={{size:"1vh"}} className='h55' >TOTAL APPLIED</h5>
                  <h3 className='h33'>10</h3>
               </div>
               <div className='userdash111'>
               <h5 style={{size:"1vh"}} className='h55' >TOTAL APPROVED</h5>
                  <h3 className='h33'>4</h3>
               </div>
               <div className='userdash111'>
               <h5 style={{size:"1vh"}} className='h55' >TOTAL REJECTED</h5>
                  <h3 className='h33'>6</h3>
               </div>
            </div>
            <div className='udi'>
               <h1 className='appu'>Applications</h1>
            <table className='tb'>
        <thead>
          <tr>
            <th className='hea'>No</th>
            <th className='hea'>Job Title</th>
            <th className='hea'>Job Location</th>
            <th className='hea'>Status</th>
            <th className='hea'>Job Type</th>
          </tr>
        </thead>
        <tbody>
          {Applicants.map((row) => (
            <tr key={row.appliedjobid}>
              <td>{row.appliedjobid}</td>
              <td>{row.jobtitle}</td>
              <td>{row.joblocation}</td>
              <td status="Approved">Approved</td>
              <td>{row.jobtype}</td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
         </div>
    </> );
}

export default UserDashboard;