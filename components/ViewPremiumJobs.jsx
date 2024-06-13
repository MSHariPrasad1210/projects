import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import cog from "../assets/images/cog.gif";
import rupee from "../assets/images/Rupee.png";
import loc from "../assets/images/location.png";
import year from "../assets/images/year.png";
import axios from 'axios';
import "../assets/css/ViewJobsAdmin.css";
import { toast,ToastContainer } from 'react-toastify';
import SweetAlert2 from "react-sweetalert2";
const Jobs=[
  {
    "title":"Cognizant",
    "location":"remote",
    "experience":"0-1 yrs",
    "salary":"Not disclosed",
    "message":"Should have 3-5 years of experience in PHP development."
  }
  ,
  {
    "title":"Cognizant",
    "location":"remote",
    "experience":"0-1 yrs",
    "salary":"Not disclosed",
    "message":"Should have 3-5 years of experience in PHP development."
  }
]
function ViewPremiumJobs() {
  const [jobs1,setJobs1]=useState([]);
  // const[jobs,setJobs]=useState([...Jobs]);
  // const[editMode,setEditMode]=useState(-1);
  const [swalProps, setSwalProps] = useState({});

  const handleDelete = async (jobId) => {
    console.log(jobId);
    setSwalProps({
      show: true,
      title: 'Delete Job',
      text: 'Are you sure you want to delete this job?',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      icon: 'warning',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          await axios.delete(`http://localhost:8081/job/deletejobById/${jobId}`);
          setJobs1(prevJobs => prevJobs.filter((job) => job.jobId !== jobId));
          toast.success("Job Has Been Deleted Successfully");
          return true;
        } catch (error) {
          console.error("Error deleting job:", error);
          toast.error("Something Went Wrong");
          return false;
        }
        finally {
            
          setSwalProps({ show: false });
        }
      },
    });
  };
    
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData.email);

    useEffect(()=>{
      axios.get("http://localhost:8081/job/getjobs")
  .then(res=>{
      setJobs1(res.data);
  })
  },[])
  
  
  return ( <>
    <SweetAlert2 {...swalProps} />
         <AdminSidebar />
         <div className='prof'>
         <h1 className='ver23a'>Jobs Added By You</h1>
           <h3 className='ver45a'>Home / Dashboard / JobsAdded</h3>
           {jobs1.map((job) => (
            job.premium ? (
        <div key={job.id} className='jobcard23'>
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
              <button className="but2" onClick={() => handleDelete(job.jobId)}>
                Delete
              </button>
            </center>
          </div>
        </div>
      ): null
      ))}
         </div>
    </> );
}

export default ViewPremiumJobs;