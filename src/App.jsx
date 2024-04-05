import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavFoot/NavBar";
import Footer from "./NavFoot/Footer";
import CardContainer from "./HostsPage/CardContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <div className="main-content">
          <CardContainer />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
