import React, { Component } from 'react'
import AdminSidebar from './AdminSidebar';
import "../assets/css/Dashboard.css"
import log from "../assets/images/log.png";
import Chart from 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';

function DashBoard() {
    const chartData2 = {
        labels: ['Filled', 'Remaining'],
        datasets: [
          {
            data: [50, 50], // 50% filled, 50% remaining
            backgroundColor: ['#6259ca', '#eaedf7'], // Color of the filled and empty parts
            borderWidth: 0, // No border
          },
        ],
      };
    const chartData = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Developer',
            data: [20, 38, 38, 72, 55, 63, 43,76,85,80,40],
            borderColor: '#d0cdef', // Specify the color of the line
            borderWidth: 2,
            borderDash: [5, 5], // Make the line appear as dotted
            // fill: false, // Ensure the line is not filled
          },
          {
            label: 'UI/UX Designer',
            data: [85, 65, 75, 38, 85, 35, 62,40,40,64,50,89],
            color:'#6259ca',
            borderColor: '#6259ca',
            borderWidth: 2,
          },
          
        ],
      };
    return ( <>
    <AdminSidebar/>
       <div className='prnt'>
        <div className='prnt1'>
           <h1 className='ver23'>Welcome to Dashboard</h1>
           <h3 className='ver45'>Home / Project Dashboard</h3>
           <div className='img23'>
            <div><img className='te' src={log}></img></div>
            <div>
                <h2 style={{color:"white"}}>Hari Prasad !</h2>
                <h3 style={{color:"white"}}>You have two projects to finish,you had completed 57% from your monthly level,keep going to your level.</h3>
            </div>
            </div>
            <div className='thr'>
               <div className='thr1'>
                  <h5 style={{size:"1vh"}} className='h55' >TOTAL APPLICATIONS</h5>
                  <h4 className='h44'></h4>
                  <h3 className='h33'>5974</h3>
               </div>
               <div className='thr1'>
                  <h5 style={{size:"1vh"}} className='h55' >SHORTLISTED CANDIDATES</h5>
                  <h4 className='h44'></h4>
                  <h3 className='h33'>1974</h3>
               </div>
               <div className='thr1'>
                  <h5 style={{size:"1vh"}} className='h55' >REJECTED CANDIDATES</h5>
                  <h4 className='h44'></h4>
                  <h3 className='h33'>4000</h3>
               </div>
            </div>
            <div className='cht1'>
            <h5 style={{size:"1.3vh"}} className='h551' >STATS OF APPLICATIONS</h5>
            <h4 className='h441'>The Project Budget is a tool used by project managers to estimate the total cost of a project</h4>
            <Box sx={{ width: '80%', mx: 'auto',height:'80%' }}>
          <Line data={chartData} />
        </Box>
            </div>
            <div className='cht2'>
                <div className='thr2'>
                   <div className=''>
                   <h5 style={{size:"1.3vh"}} className='h551' >TODAY TASKS
                         </h5>
            <h4 className='h441'>UX UI & Backend Developement.</h4>
                   </div>
                   <div className='dsh45'>
                    <div className='dsh46'>
                    <h5 style={{size:"1vh"}} className='h55' >TOTAL REVENUE</h5>
                  <h4 className='h44'>Previous month vs this months</h4>
                  <h3 className='h333'  style={{color:"#9059ca"}} >$5,900.00</h3>
                    </div>
                    <div className='dsh46'>
                    <Box sx={{ width: '80%', mx: 'auto',height:'80%' }}>
          <Doughnut data={chartData2} />
        </Box>
                    </div>
                   </div>
                </div>
                <div className='thr2'>
                <h5 style={{size:"1vh"}} className='h55' >TOP INQUIRIES</h5>
                  <h4 className='h44'>Previous month vs this months</h4>
                </div>
            </div>
        </div>
        <div className='prnt2'>
               <div className='cth1'>
               <h5 style={{size:"1vh"}} className='h55' >RECENT TRANSCATIONS</h5>
                  <h4 className='h44'>Projects where development work is on completion</h4>
                  <div className='dshp1'>
                    <div className='dshp2'>
                        <div className='dshp3'>
                        <h5 style={{size:"1vh"}} className='h55' >Flicker   $45.234</h5>
                  <h4 className='h442'>App improvement  12 Jan 2020</h4>
                        </div>
                        <div className='dshp3'></div>
                    </div>
                  </div>
               </div>
        </div>
       </div>
    </> );
}

export default DashBoard;