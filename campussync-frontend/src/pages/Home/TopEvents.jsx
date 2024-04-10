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

  return (
    <div className="event-container">
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
    </div>
  );
};

export default TopEvents;
