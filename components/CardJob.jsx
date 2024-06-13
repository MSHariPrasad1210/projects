import React, { useState,useEffect } from 'react';
import axios from 'axios';  // Import Axios
import cog from "../assets/images/cog.gif";
import rupee from "../assets/images/Rupee.png";
import loc from "../assets/images/location.png";
import year from "../assets/images/year.png";
import "../assets/css/CardJob.css";
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

const CardJob = () => {
  const [jobs1,setJobs1]=useState([]);
  const user=JSON.parse(localStorage.getItem('user'));
  const premium=localStorage.getItem('premium');
  console.log(user);
  console.log(user.email);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      companyName: 'Cognizant',
      logo: cog,
      jobtitle:'webDeveloper',
      experience: '0-1 yrs',
      jobtype: 'Not disclosed',
      joblocation: 'Remote',
      description: 'Should have 3-5 years of experience in PHP development.',
    },
    {
      id: 2,
      companyName: 'Zoho',
      logo: cog,
      jobtitle:'webDeveloper',
      experience: '0-1 yrs',
      jobtype: 'Not disclosed',
      joblocation: 'Remote',
      description: 'Should have 3-5 years of experience in PHP development.',
    },
    {
      id: 3,
      companyName: 'Accenture',
      logo: cog,
      jobtitle:'webDeveloper',
      experience: '0-1 yrs',
      jobtype: 'Not disclosed',
      joblocation: 'Remote',
      description: 'Should have 3-5 years of experience in PHP development.',
    },
  ]);
  
  useEffect(()=>{
    axios.get("http://localhost:8081/job/getjobs")
.then(res=>{
    setJobs1(res.data);
})
},[])


  const handleApply = async (job) => {
    try {
        console.log(job);
        console.log(user.email);
      const response = await axios.post('http://localhost:8081/applyjob', {appliedjobid:job.id,jobtitle:job.title,jobtype:job.jobType,joblocation:job.city,email:user.email});
      console.log(response.data); 
      toast.success("Job Applied");
    
    } catch (error) {
      console.error('Error applying for job:', error);
    
    }
  };


  const filteredJobs = premium === "paid" ? jobs1 : jobs1.filter(job => !job.premium);

  return (
    <>
     <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
      {filteredJobs.map((job) => (
        <div key={job.id} className='jobcard2'>
          <img src={cog} height={"70%"} alt="Company Logo" />
          <div className='ingc'>
            <h2 className='ver23'>{job.title}</h2>
            <div className='infop'>
              <div className='infop11'>
                <div><img src={year} height={"100%"} alt="Years Icon" /></div>
                <div className='vr45'><h3 className='vr45a'>{job.experience}</h3></div>
              </div>
              
              <div className='infop1'>
                <div><img src={rupee} height={"80%"} alt="Rupee Icon" /></div>
                <div className='vr45'><h3 className='vr45aaa'>{job.jobType}</h3></div>
              </div>
              <div className='infop1'>
                <div><img src={loc} height={"100%"} alt="Location Icon" /></div>
                <div className='vr45'><h3 className='vr45a'>{job.city}</h3></div>
              </div>
            </div>
            <h3 className='verr45a'>{job.description}</h3>
            <center>
              <button className="but2" onClick={() => handleApply(job)}>
                Apply
              </button>
            </center>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardJob;
