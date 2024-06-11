import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import { useState,useEffect } from "react";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import PostJob from "./components/PostJob";
import Profile from "./components/Profile";
import Searchjob from "./components/Searchjob";
import AddProfile from "./components/AddProfile";
import DashBoard from "./components/DashBoard";
import AdminSidebar from "./components/AdminSidebar";
import UserDashboard from "./components/UserDashboard";
import ChangePassword from "./components/ChangePassword";
import AppliedJobs from "./components/AppliedJobs";
import ViewJobsAdmin from "./components/ViewJobsAdmin";
import ViewApplicants from "./components/ViewApplicants";
import ChangePasswordadmin from "./components/ChangePasswordadmin";
import MyProfile from "./components/MyProfile";
import AddResume from "./components/AddResume";
import Contact from "./components/Contact";
import ApplyJob from "./components/ApplyJob";
import LogOut from "./components/LogOut";
import NotFound from "./components/NotFound";
import ViewPremiumJobs from "./components/ViewPremiumJobs";
import Premium from "./components/Premium";
// import Signin2 from "./components/Signin2";
function App() {
 
  const [local, setLocal] = useState(null);

  useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      setLocal(userData);
  }, []);



  return (
    <>
 
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/member" element={<Premium/>}/>

        <Route path="/searchjob" element={<Searchjob/>}/>
        {local && local.role === 'user' ? (
                      <>
                         <Route path="/userdashboard" element={<UserDashboard/>}/>
                         <Route path="/appliedjobs" element={<AppliedJobs/>}/>
                         <Route path="/addresume" element={<AddResume/>}/>
                         <Route path="/profile" element={<MyProfile/>}/>
                          
                      </>
                  ) : (
                    <>

<Route path="/adminsidebar" element={<AdminSidebar/>}/>
        <Route path="/postjob" element={<PostJob/>}/>
        <Route path="/viewjobsadmin" element={<ViewJobsAdmin/>}/>
        <Route path="/viewpremiumjobs" element={<ViewPremiumJobs/>}/>
        <Route path="/viewapplicants" element={<ViewApplicants/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/changepasswordadmin" element={<ChangePasswordadmin/>}/>
                     
                      </>
                  )}
        
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/addprofile" element={<AddProfile/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
       
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/applyjob" element={<ApplyJob/>}/> */}
        <Route path="/logout" element={<LogOut/>}/>
        {/* <Route path="/signin2" element={<Signin2/>}/> */}
        <Route path="*" element={<NotFound />} />
       
      
      </Routes>
     </Router>
    
    </>
  );
}

export default App
