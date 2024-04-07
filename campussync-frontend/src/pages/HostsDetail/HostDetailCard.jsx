import React from "react";
import "./HostDetail.css";
import HostOverlay from "./HostOverlay";
import { useState } from "react";
const HostDetailCard = () => {
  const [showOverlay, setshowOverlay] = useState(false);

  return (
    <div className="host-detail-card">
      {showOverlay && (
        <HostOverlay
          showOverlay={showOverlay}
          setshowOverlay={setshowOverlay}
        />
      )}

      <button
        onClick={() => setshowOverlay(!showOverlay)}
        className="add-event-btn"
      >
        <i className="fa fa-plus"></i>
      </button>
      <div className="host-detail-image">
        <img src="cod.jpg" alt="Host Profile" />
      </div>

      <div className="host-detail-info">
        <h2>ALX Ethiopia</h2>
        <p>
          Host Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default HostDetailCard;
