import React from "react";
import "./home.css";
import TopEvents from "./TopEvents";
const Home = () => {
  return (
    <div>
      <div className="events-container">
        <div className="overlay">
          <h1>Big Events are underway</h1>
          <p>Don’t miss out on opportunities</p>
        </div>
        <button className="explore-button">Explore more</button>
      </div>
      <TopEvents />
    </div>
  );
};
export default Home;
