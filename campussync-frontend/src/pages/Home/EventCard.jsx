import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ id, imageSrc, title, description, location, time }) => {
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
        <p>Location: {location}</p>
        <p> Date : {time} </p>
      </div>
    </div>
  );
};


export default EventCard;