import React from "react";
import AdminSidebar from "./AdminSidebar";
import "../assets/css/ViewApplicants.css";
import cog from "../assets/images/cog.gif";
import rupee from "../assets/images/expe.png";
import loc from "../assets/images/location.png";
import year from "../assets/images/year.png";
import { useEffect,useState } from "react";
import axios from "axios";
function ViewApplicants() {

  const [Applicants,setApplicants]=useState([]);
  const [Applicants2,setApplicants2]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/getAppliedJob")
      .then(res => {
        setApplicants(res.data);
  
        // Fetch all resumes and wait for all requests to complete
        const resumePromises = res.data.map(app =>
          axios.get(`http://localhost:8081/getresume/${app.email}`)
        );
  
        Promise.all(resumePromises)
          .then(responses => {
            // Assuming responses is an array of resume data
            const resumes = responses.map(response => response.data);
            setApplicants2(resumes);
          })
          .catch(error => {
            console.error("Error fetching resumes:", error);
          });
      })
      .catch(error => {
        console.error("Error fetching applied jobs:", error);
      });
  }, []);
  
  


console.log(Applicants);
    return ( <>
    <AdminSidebar />
         <div className='prof'>
              
         <h1 className='ver23a'>View Applicants</h1>
           <h3 className='ver45a'>Home / Dashboard / ViewApplicants</h3>
           <div className="cht11">
           {Applicants2.map((app1) => (
  <div className="detd" key={app1.userId}>
    <h1 className='erdt'>{app1.firstName}</h1>
    <h1 className='erdt1'>Java developer</h1>
    <div className='infop'>
      <div className='infop11'>
        <div><img src={year} height={"100%"} /></div>
        <div className='vr45'><h3 className='vr45a'>{app1.preferingjob}</h3></div>
      </div>
      <div className='infop1'>
        <div><img src={rupee} height={"80%"} /></div>
        <div className='vr45'><h3 className='pvr45'>{app1.age}</h3></div>
      </div>
      <div className='infop1'>
        <div><img src={loc} height={"100%"} /></div>
        <div className='vr45'><h3 className='vr45a'>{app1.state}</h3></div>
      </div>
    </div>
  </div>
))}

             <div className="detdi">
             </div>
           </div>
         </div>
    </>
    );
    }
    export default ViewApplicants;