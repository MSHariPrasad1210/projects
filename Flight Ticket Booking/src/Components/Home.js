import React from "react";
import webuilder from "./image/airplane.avif";
import "./Home.css";
import Book from "./Book";
import Stay from "./stay";
import Extra from "./extra";
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectUser } from './Redux/userSlice.js';
function Home() {
	const user=useSelector(selectUser);
	console.log(user);
	const user1=localStorage.getItem("user");
	const use= JSON.parse(user1);
	console.log(use.pass)
	return (
		<>
		<Navbar2 />
			 <Sidebar/>
		<div className="content home">
			<div className="card-split">
				<div className="card home homeText ">
					<div className="homet1">
						<p className="welcome">Welcome Hari</p>
				<h1>DISCOVER YOUR DREAM <span id="homeword">DESTINATION</span></h1>
					<h3>To get the best of your adventure you just need to leave and go where you like,we are waiting for you</h3>
					</div>
					
					<Link to="/bookticket" className="link-button ">
						<button className="bookh">Book Tickets</button>
					</Link>
					</div>
					
				<div className="card home">
					<img src={webuilder} alt="fitness" height={400} />
					
				</div>
			</div>
		</div>
		<Book/>
		<Stay/>
		<Extra/>
		</>
		
	);
}

export default Home;
