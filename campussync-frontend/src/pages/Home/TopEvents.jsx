import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./TopEvents.css";
import EventCard from "./EventCard";

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
    </div>
  );
};

export default TopEvents;
