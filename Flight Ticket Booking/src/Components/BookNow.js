import { useState } from "react";
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
//import PatternComponent from "./PatternComponent";
import { TextField } from "@mui/material";
import "./seat.css";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookNow() {

  const data=useParams();
  console.log(data.id);

  const [request, setRequest] = useState("");
  const [passName, setPassName] = useState("");
  const [gender, setGender] = useState("");
  // const navigate = useNavigate();

  const submitHandle = () => {
    axios
      .post(
        "http://localhost:8080/postseat",
        {
          id: JSON.parse(localStorage.getItem("seatId")).seatId,
          seatno: JSON.parse(localStorage.getItem("seatId")).seatNo,
          status: true,
          flightid: data.id,
          name: passName,
          gender: gender,
          request: request,
          email: JSON.parse(localStorage.getItem("user")).email,
        }
      )
      alert("Your ticket is booked");
  };








  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className="home-container">
        <h1 style={{ marginLeft: "25%", paddingBottom: "70px" ,margintop:"10%", fontweight:"10px"}}>Select Seats</h1>
        <div className="booknow-comp">
          <PatternComponent fid={data.id}/>
          <div className="booknow-cont">
            <h1 style={{ marginTop: "30px" }}>Details</h1>
            
            <div className="passenger-form">
              <TextField
                id="outlined-basic"
                label="Passenger Name"
                variant="outlined"
                className="login-field"
                value={passName}
                onChange={(e) => {
                  setPassName(e.target.value);
                }}
              /><br></br>
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                className="login-field"
                type="text"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              /><br></br>
              <TextField
                id="outlined-basic"
                label="Request"
                variant="outlined"
                className="login-field"
                value={request}
                onChange={(e) => {
                  setRequest(e.target.value);
                }}
              /><br></br>
            </div>
            <div className="login-container2-button confirm">
              <button style={{backgroundColor:"#ffad01"}}  onClick={(e) => submitHandle()}>BookNow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


const PatternComponent = (props) => {
  
  const [seats, setSeats] = useState([]);
  const [colour, setColor] = useState(1);
  const colourSet = (e) => {
    setColor(e.id);
    localStorage.setItem(
      "seatId",
      JSON.stringify({ seatId: e.id, seatNo: e.seatno })
    );
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getseat/${props.fid}`)
      .then((r) => {
        console.log(r.data);
        setSeats(r.data);
      });
  }, []);
  function styling(id) {
    if (id.id === colour && id.status === false) return "green";
    else if (id.status === true) return "blue";
    else if (id.status === true) return "booked";
  }
  function stylingBooked(id) {
    if (id === true) return "booked";
  }


  

  const renderPattern = () => {
     

    const rows = 10; 
    const cols = 8; 
    const pattern = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {

        if ((j === 4) && i >= 0) {
          row.push(<div key={j} style={{ width: "100px" }} />);
        }

        row.push(
          // <button key={j} className="seat-button" onClick={(e)=>{alert("seat no "+(i*8+j+1)+" is selected")}}>
          // </button>
          <button
          className={`seat-button ${styling(seats[i * 8 + j])} }`}
          disabled={seats[i * 8 + j].status}
          onClick={(e) => {
            colourSet(seats[i * 8 + j]);
            // setSeatsId(e);
            alert("seat no "+(i*8+j+1)+" is selected")
            console.log(colour);
          }}
        ></button>
        );
      }
      pattern.push(
        <div key={i} className="row" st>
          {row}
        </div>
      );
    }

    return pattern;


  }
  return (
    <>
     {seats.length > 0 && (
        <div className="pattern-column">{renderPattern()}</div>
        )}
    </>
  );
}
export default BookNow;



