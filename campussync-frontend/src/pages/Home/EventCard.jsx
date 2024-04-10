<<<<<<< HEAD
import React from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";

const EventCard = ({ title, time, location, postedBy, imageSrc, id }) => {
  return (
    <Link to={`/eventdetailpage/${id}`}>
      <div className="event-card">
        <img src={imageSrc} alt="Event" />
        <h3>{title}</h3>
        <p className="time">{time}</p>
        <p className="location">{location}</p>
        <p className="posted-by">{postedBy}</p>
      </div>
    </Link>
  );
};

export default EventCard;
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ id, imageSrc, title, description, time }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event-detail/${id}`);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img src={imageSrc} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p> Date : {time} </p>
      </div>
    </div>
  );
};


export default EventCard;
>>>>>>> main
