import React from "react";
import { Navbar } from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HostReg from "../../Components/Host/HostReg";
import "./EventOverlay.css";

function EventOverlay() {
  return (
    <div className="overlay-container">
      <Navbar />
      <HostReg />
      <Footer />
    </div>
  );
}

export default EventOverlay;
