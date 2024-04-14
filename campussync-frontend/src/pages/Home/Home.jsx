import React, { useContext } from "react";
import "./home.css";
import TopEvents from "./TopEvents";
<<<<<<< HEAD
import TopHosts from "./TopHosts"
=======
import TopHosts from "./TopHosts";
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Home = () => {
  return (
    <div>
      <div className="events-container">
        <div className="overlay">
          <h1>Big Events are underway</h1>
          <p>Don’t miss out on opportunities.</p>
        </div>
        <button className="explore-button">
          <Link to="/events">Explore more</Link>
        </button>
      </div>
      <TopEvents />
      <TopHosts />
    </div>
  );
};
export default Home;
