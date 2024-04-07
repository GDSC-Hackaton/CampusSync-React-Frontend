import React from "react";
import HostDetailCard from "./HostDetailCard";
import "./HostDetail.css";
import HostOverlay from "./HostOverlay";
const HostDetailPage = () => {
  return (
    <div className="host-detail-page">
      <div className="host-detail-content">
        <HostDetailCard />
      </div>
    </div>
  );
};

export default HostDetailPage;