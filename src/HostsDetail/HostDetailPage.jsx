import React from "react";
import NavBar from "./NavFoot/NavBar";
import Footer from "./NavFoot/Footer";
import HostDetailCard from "./HostDetailCard";
import "./HostDetail.css";

const HostDetailPage = () => {
  return (
    <div className="host-detail-page">
      <NavBar />
      <div className="host-detail-content">
        <HostDetailCard />
      </div>
      <Footer />
    </div>
  );
};

export default HostDetailPage;
