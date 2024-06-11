import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Register from "./Components/Register";
import HomePage from "./Components/Homepage";
import Sidebar from "./Components/sidebar";
import Navbar2 from "./Components/navbar2";
import BookTicket from "./Components/BookTicket";
import Ticket from "./Components/ticket";
import React from "react";
import BookNow from "./Components/BookNow";
import CustomerSupport from "./Components/customersupport";

function App() {
	return (
		<BrowserRouter>
			 {/* <Navbar2 />
			 <Sidebar/> */}
		{/* <HomePage/> */}
			<Routes>
		 		<Route path="/" element={<Login />} />
		 		<Route path="/home" element={<Home />} />
				 <Route path="/bookticket" element={<BookTicket />} />
		 		<Route path="/register" element={<Register />} />
				 <Route path="/ticket" element={<Ticket />} />
				 <Route path="/booknow/:id" element={<BookNow />} />
				 <Route path="/customer" element={<CustomerSupport />} />
				 <Route path={'*'} element={<h1>error Invalid url</h1>} />
		 	</Routes>
		 </BrowserRouter>
	// 	<div className="App">
	// 		<div>
    //              <h1>tailwindcss</h1>
	// 		</div>
	// 	</div>
	);
}

export default App;
