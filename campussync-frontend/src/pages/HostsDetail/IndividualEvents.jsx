import React from "react";
import "./individual.css";
import { TbDirectionSignFilled } from "react-icons/tb";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import logo from "../../assets/seamles.jpg";
import { Link } from "react-router-dom";

function IndividualEvents() {
  return (
    <>
      <div className="individual-container">
        <div className="individual-container-pic">
          {" "}
          <img src={logo} alt="" />
        </div>
        <div className="individual-details-container">
          <h1>ALX Campus Event</h1>
          <div className="individual-details">
            <div className="individual-content">
              <p>Place: Virtual</p>
              <p>Time: 1:00 LT</p>
              <p>Hosted By: ALX AASTU</p>
            </div>
            <Link to={`/eventdetailpage/1`}>
              <div>
                <TbDirectionSignFilled size="3rem" className="custom-icon" />
              </div>
            </Link>
          </div>
          <div className="individual-like">
            <BiSolidLike size="2rem" className="custom-icon" />
            <BiSolidDislike size="2rem" className="custom-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualEvents;
