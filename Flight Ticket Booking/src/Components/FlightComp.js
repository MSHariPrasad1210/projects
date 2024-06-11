import air from "./image/airplane.png";
import "./Flight.css";
import { Link, useNavigate } from "react-router-dom";
function FlightComp(props) {

  // axios.get("http://localhost:8080/getdetail")
  // .then(res=>{
  //   const imgurl=res.data.imagurl;

  // })
  const navigate=useNavigate();
  function getTimeFromDate(timestamp) {
 
    const date = new Date(timestamp);

    // Extracting hours, minutes, and seconds from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Formatting the time to HH:MM:SS format (e.g., 08:35:21)
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  
  }
  return (
    <>
      <div className="flight-comp">
        <div className="flight-comp-child">
          <div className="flight-comp-img">
            <img src={props.val.imagurl}></img>
          </div>
          <div className="flight-comp-cont">
            <h2>{props.val.flightname}</h2>
            <div className="flight-comp-dest">
              <div className="flight-comp-dest-child1">
                <div className="flight-comp-dest-child">
                  <h3>From</h3>
                  <p>{props.val.fromdest}</p>
                </div>
                <div className="flight-flight">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child">
                  <h3>To</h3>
                  <p>{props.val.todest}</p>
                </div>
              </div>
              <div className="flight-comp-dest-child1">
                <div
                  style={{ borderLeft: "2px solid black" }}
                  className="flight-comp-dest-child"
                >
                  <h3>Start</h3>
                  <p>{getTimeFromDate(props.val.fromtime)}</p>
                </div>
                <div className="flight-flight">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child">
                  <h3>End</h3>
                  <p>{getTimeFromDate(props.val.totime)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flight-comp-cont1"
            style={{ borderLeft: "2px solid gray" }}
          >
            <div className="flight-comp-dest-child2 ">
              <h3>Rs.{props.val.cost}</h3>
              <div className="flight-comp-dest-child2-button ">
                {/* <Link to="/booknow/2"> */}
                <button onClick={(e)=>{
                  navigate(`/booknow/${props.val.flightId}`)}
                }>
                  Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightComp;