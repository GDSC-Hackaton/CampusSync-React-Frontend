// Card.jsx
import React from "react";
import "./Card.css";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <div className="overlay-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
