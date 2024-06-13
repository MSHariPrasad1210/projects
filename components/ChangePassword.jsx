import React, { Component } from 'react';
import "../assets/css/ChangePassword.css";
import Sidebar from './Sidebar1';
function ChangePassword() {
    return ( <>
    <Sidebar />
        <div className='prof'>
        <h1 className='ver23a'>Change Password</h1>
           <h3 className='ver45a'>Home / Dashboard / My Profile</h3>
           <div className='proform1c'>
           <div class="formgroupc">
                    <label class="text-dark">Old Password</label>
                    <input type="text" class="form-control" placeholder="****" required=""/>
                    </div>
           <div class="formgroupc">
                    <label class="text-dark">New password</label>
                    <input type="text" class="form-control" placeholder="****" required=""/>
                    </div>
           <div class="formgroupc">
                    <label class="text-dark">Conform Password</label>
                    <input type="text" class="form-control" placeholder="****" required=""/>
                    </div>
           <center><button className="but2jj" >Submit</button></center>
           </div>
        </div>

    </> );
}

export default ChangePassword;