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
