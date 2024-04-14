<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, imageSrc, title, description, time, }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/eventdetailpage/${id}`);
  };

  return (
    <div className="event-card" onClick={handleClick}>
=======
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ id, imageSrc, title, description, location, time }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event-detail/${id}`);
  };

  return (
    <Link to={`/event-detail/${id}`}>
        <div className="event-card" onClick={handleClick}>
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
      <img src={imageSrc} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
<<<<<<< HEAD
        <p> Date : {time} </p>
=======
        <p><i className='fa-solid fa-location-dot'></i> {location}</p>
        <p><i className='fa-regular fa-clock'></i> {time} </p>
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
      </div>
    </div>
    </Link>

  );
};

<<<<<<< HEAD
export default EventCard;
=======

export default EventCard;
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
