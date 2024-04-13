import React from "react";
import "./individual.css";
import { Link } from "react-router-dom";

function IndividualEvents({ userid, item, name }) {
 const humanReadable = "https://natty.pythonanywhere.com/media/" + item.poster;
  const timestamp = item.date_posted;
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const humanReadableTime = `${formattedHours}:${formattedMinutes}`;

  return (
    <>
      <div className="individual-container">
        <div className="individual-container-pic">

          <img src={humanReadable} alt="" />
        </div>
        <div className="individual-details-container">
          <h1>{item.name}</h1>
          <div className="individual-details">
            <div className="individual-content">
              <p>Place: {item.address}</p>
              <p>Time: {humanReadableTime}</p>
              <p>Hosted By: {name}</p>
            </div>
            <Link to={`/eventdetailpage/${userid}`}>
              <div>
                <i className="fa fa-thrash"></i>
              </div>
            </Link>
          </div>
          <div className="individual-like">
          
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualEvents;
