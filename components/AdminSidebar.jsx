import React from 'react';
import '../assets/css/Sidebar.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile">
          {/* <img
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="profile_picture"
          /> */}
          <h3>Hari Prasad M S</h3>
          <p>Designer</p>
        </div>
        <ul>
          <li>
          <Link to="/dashboard">
              <span className="icon">
                <i className="fas fa-desktop"></i>
              </span>
              <span className="item">My Dashboard</span>
              </Link>
          </li>
          <li>
            <Link to={"/viewapplicants"}>
              <span className="icon">
                <i className="fas fa-user-friends"></i>
              </span>
              <span className="item">View Applicants</span>
            </Link>
          </li>
          {/* <li>
          <Link to="/myprofile">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">My Profile</span>
              </Link>
          </li> */}
          <li>
            <Link to="/postjob">
              <span className="icon">
                <i className="fas fa-database"></i>
              </span>
              <span className="item">Post Jobs</span>
              </Link>
          </li>
          <li>
          <Link to="/viewpremiumjobs">
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span className="item">View Premium Jobs</span>
              </Link>
          </li>
          <li>
          <Link to="/viewjobsadmin">
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span className="item">View Jobs</span>
              </Link>
          </li>
          {/* <li>
          <Link to={"/viewapplicants"}>
              <span className="icon">
                <i className="fas fa-user-shield"></i>
              </span>
              <span className="item">View resumes</span>
              </Link>
          </li> */}
          <li>
          <Link to="/changepasswordadmin">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              <span className="item">Change Password</span>
            </Link>
          </li>
          <li>
          <Link to="/logout">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              <span className="item">LogOut</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;