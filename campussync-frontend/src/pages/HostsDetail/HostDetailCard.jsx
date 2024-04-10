import React from "react";
import "./HostDetail.css";

const HostDetailCard = ({ item2 }) => {
  return (
    <div className="host-detail-card">
      <div className="host-detail-image">
        {/* <img src="/cod.jpg" alt="Host Profile" /> */}
        <img src={item2.account_pic} alt="Host Profile" />
      </div>
      <div className="host-detail-info">
        {/* <h2>ALX Ethiopia</h2> */}
        <h2>{item2.hostname}</h2>
        <p>
          {item2.description}
          {/* Host Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. */}
        </p>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default HostDetailCard;
