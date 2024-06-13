import React, { Component, useState } from 'react';
import Sidebar from './Sidebar1';
import "../assets/css/AddProfile.css";
import "../assets/css/AddResume.css";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

function AddResume() {
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[phoneNumber,setPhoneNumber]=useState(0);
    const[age,setAge]=useState(0);
    const[language,setLanguage]=useState('');
    const[middleName,setMiddleName]=useState('');
    const[preferingjob,setPreferingJob]=useState('');
    const[experience,setExperience]=useState('');
    const[tellAboutYourself,setTellAboutYourself]=useState('');
    const[role,setRole]=useState('');
    const[fulladdress,setAddress]=useState('');
    const[facebook,setFacebook]=useState('');
    const[linkedin,setLinkedin]=useState('');
    const[twitter,setTwitter]=useState('');
    const[country,setCountry]=useState('');
    const[state,setState]=useState('');
    const[googleplus,setGooglePlus]=useState('');
    const[pincode,setPincode]=useState('');
    // const [loading, setLoading] = useState(false);
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(`http://localhost:8081/postresume`,{firstName,lastName,phoneNumber,age,language,middleName,preferingjob,experience,tellAboutYourself,
        role,fulladdress,facebook,linkedin,twitter,country,state,googleplus,pincode});
            console.log('response',response.data);
            console.log(firstName,lastName);
        }
        catch(error) {
			console.error('Error sending data:', error);
		}
        toast.success("Resume Added Successfully");
    }


    // useEffect(() => {
	// 	setLoading(true);
	// 	setTimeout(() => {
	// 	  setLoading(false);
	// 	},7000);
	//   }, []);

    return ( <>
    <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
        <Sidebar/>
        <div className='profres'>
        <h1 className='ver23a'>Add Resume</h1>
           <h3 className='ver45a'>Home / Dashboard / Add resume</h3>
           <div className='proform1re'>
               <div className='proform11'>
               <h3 className='ver23aa'>Basic Info</h3>
               </div>
               <div className='prof11re'>
                   <div className='prof111'>

                   </div>
                   <div className='prof112'>
                   <div class="form-group">
                    <label class="text-dark">First Name</label>
                    <input type="text" class="form-control" placeholder=" Hari" required="" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Last Name</label>
                    <input type="text" class="form-control" placeholder=" Prasad" required="" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Phone Number</label>
                    <input type="number" class="form-control" placeholder=" 91 9874872" required="" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Age</label>
                    <input type="number" class="form-control" placeholder=" 21" required="" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Language</label>
                    <input type="text" class="form-control" placeholder="Tamil English" required="" value={language} onChange={(e)=>{setLanguage(e.target.value)}}/>
                    </div>
                   </div>
                   <div className='prof113'>
                   <div class="form-group">
                    <label class="text-dark">Email</label>
                    <input type="text" class="form-control" placeholder="Optional" required="" value={middleName} onChange={(e)=>{setMiddleName(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Prefering Job</label>
                    <input type="text" class="form-control" placeholder="Developer" required="" value={preferingjob} onChange={(e)=>{setPreferingJob(e.target.value)}}/>
                    </div>
                   
                   <div class="form-group">
                    <label class="text-dark">Experience in Years</label>
                    <input type="number" class="form-control" placeholder="4" required="" value={experience} onChange={(e)=>{setExperience(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Professional Role</label>
                    <input type="software engineer" class="form-control" placeholder="Software Engineer" required="" value={role} onChange={(e)=>{setRole(e.target.value)}}/>
                    </div>
                   </div>
               </div>
               <div className='tearea'>
               <div class="form-group">
                    <label class="text-dark">Tell About Yourself</label>
                    <textarea type="number" class="form-controll" placeholder="e.x about your skills and Educational details" required="" value={tellAboutYourself} onChange={(e)=>{setTellAboutYourself(e.target.value)}}/>
                    </div>
               </div>
              
           </div>
           <div className='proform1re2'>
           <div className='proform11'>
               <h3 className='ver23aa'>Social Accounts</h3>
               </div>
               <div className='prof11re2'>
               <div className='prof112res'>
                   <div class="form-group">
                    <label class="text-dark">FaceBook</label>
                    <input type="text" class="form-control" placeholder="www.facebook.com" required="" value={facebook} onChange={(e)=>{setFacebook(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">LinkedIn</label>
                    <input type="text" class="form-control" placeholder="www.linkedIn.com" required="" value={linkedin} onChange={(e)=>{setLinkedin(e.target.value)}}/>
                    </div>

               </div>
               <div className='prof112res'>
                   <div class="form-group">
                    <label class="text-dark">Twitter</label>
                    <input type="text" class="form-control" placeholder="www.twitter.com" required="" value={twitter} onChange={(e)=>{setTwitter(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">GooglePlus</label>
                    <input type="text" class="form-control" placeholder="www.googleplus.com" required="" value={googleplus} onChange={(e)=>{setGooglePlus(e.target.value)}}/>
                    </div>
                    </div>
               </div>
           </div>
           <div className='proform1re2'>
           <div className='proform11'>
               <h3 className='ver23aa'>Contact Information</h3>
               </div>
               <div className='prof11re2'>
               <div className='prof112res'>
                   <div class="form-group">
                    <label class="text-dark">Country</label>
                    <input type="text" class="form-control" placeholder="www.facebook.com" required="" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">State</label>
                    <input type="text" class="form-control" placeholder="www.linkedIn.com" required="" value={state} onChange={(e)=>{setState(e.target.value)}}/>
                    </div>

               </div>
               <div className='prof112res'>
                   <div class="form-group">
                    <label class="text-dark">Address</label>
                    <input type="text" class="form-control" placeholder="www.twitter.com" required="" value={fulladdress} onChange={(e)=>{setAddress(e.target.value)}}/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Pincode</label>
                    <input type="text" class="form-control" placeholder="628005" required="" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
                    </div>
                    </div>
               </div>
           </div>
           <div className='byt'>
                     <center><button className="but2gh" onClick={handleSubmit}>Submit</button></center>
                     </div>
        </div>
    </> );
}

export default AddResume;