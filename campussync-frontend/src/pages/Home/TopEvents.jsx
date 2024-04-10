<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./TopEvents.css";
import EventCard from "./EventCard";
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TopEvents.css';
import EventCard from './EventCard';

const timeFormater = ( isoDateString) => {
  
  const date = new Date(isoDateString);

  const formattedDate = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric', 
  });
  
  console.log(formattedDate); // Example: "April 9, 2024"
  return formattedDate;
  
}

const TopEvents = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://natty.pythonanywhere.com/event/events/");
        setEventsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);
>>>>>>> main

const TopEvents = () => {
  const [eventsData, setEventsData] = useState([]); // Initialize state to store events data

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.request(
          "https://natty.pythonanywhere.com/event/events/"
        );
        console.log(response.data);
        setEventsData(response.data); // Update the state with the fetched data
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  console.log(eventsData);
  return (
    <div className="event-container">
<<<<<<< HEAD
      <h2>Top events Now</h2> <hr />
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            poster={event.poster}
            title={event.name}
            date={event.date_posted}
            id={event.id}
          />
        ))}
      </div>
      <button className="view-more">view more</button>
=======
      <h2>Top Events Now</h2> <hr />
      <div className="events-grid">
        {eventsData.map((event, index) => (
          
            <EventCard 
              imageSrc={event.poster}
              title={event.name}
              time={timeFormater( event.date_posted )} 
              description= {event.description}
            />
         
        ))}
      </div>
      <button className="view-more">View More</button>
>>>>>>> main
    </div>
  );
};

export default TopEvents;
