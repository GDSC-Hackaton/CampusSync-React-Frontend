import React from 'react';
import './EventCard.css';

const EventCard = ({ title, time, location, postedBy, imageSrc }) => {
  return (
    <div className="event-card">
      <img src={imageSrc} alt="Event" />
      <h3>{title}</h3>
      <p className="time">{time}</p>
      <p className="location">{location}</p>
      <p className="posted-by">{postedBy}</p>
    </div>
  );
};

export default EventCard;