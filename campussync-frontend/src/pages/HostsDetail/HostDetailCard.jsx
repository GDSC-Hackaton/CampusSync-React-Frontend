import React from "react";
import "./HostDetail.css";

const HostDetailCard = () => {
  return (
    <div className="host-detail-card">
      
      <div className="host-detail-image">
        <img src="/cod.jpg" alt="Host Profile" />
      </div>
     
      <div className="host-detail-info">
        <h2>ALX Ethiopia</h2>
        <p>Host Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default HostDetailCard;