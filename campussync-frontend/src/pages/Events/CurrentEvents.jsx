import React, { useEffect, useState } from "react";
import "./CurrentEvents.css";
import AddEventOverlay from "./addEventOverlay";
import { Link } from "react-router-dom";
import axios from "axios";
import Endpoint from "../../api";
const eventData = [
  {
    title: "Women in Tech",
    image: "cod.jpg",
    place: "Virtual",
    time: "11:00 LT",
    host: "GDSC",
    votes: { upvote: 120, downvote: 3 },
  },
  {
    title: "CISCO Registration",
    image: "cod.jpg",
    place: "Virtual",
    time: "11:00 LT",
    host: "CISCO Astu",
    votes: { upvote: 80, downvote: 5 },
  },
  {
    title: "ALX Campus Event",
    image: "cod.jpg",
    place: "Virtual",
    time: "11:00 LT",
    host: "ALX",
    votes: { upvote: 250, downvote: 7 },
  },
  // ... additional events
];

const CurrentEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOverlay, setshowOverlay] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  const handleFilter = (filter) => {
    console.log("Filtering by:", filter);
    // Implement filter functionality
  };
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${Endpoint()}event/events`);
      console.log(response.data);
      setEvents(response.data);
      setloading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      {showOverlay && (
        <AddEventOverlay
        fetchEvents={fetchEvents}
          showOverlay={showOverlay}
          setshowOverlay={setshowOverlay}
        />
      )}
      <div className="current-events">
        <h2>Current Events</h2>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for events..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <div className="filters">
          <button onClick={() => handleFilter("recent")}>recent</button>
          <button onClick={() => handleFilter("old")}>old</button>
          <button onClick={() => handleFilter("upvote")}>upvote</button>
          <button onClick={() => handleFilter("downvote")}>downvote</button>
        </div>
        <button
          onClick={() => setshowOverlay(!showOverlay)}
          className="add-event-btn"
        >
          <i className="fa fa-plus"></i>
        </button>

        {loading ? (
          <img src="loading.gif" />
        ) : (
          events.length > 0 ?
          events.map((event, index) => (
            <div key={event.id} className="event_card">
              <img
                src={event.poster}
                style={{ width: "400px", height: "100%" }}
                alt={event.title}
              />

              <div className="event_detail">
                <Link to="/event-detail/1/">
                  <h3>{event.name}</h3>
                  <p>Place: {event.place}</p>
                  <p>Time: {event.date_posted}</p>
                  <p>Hosted by: {event.host}</p>
                </Link>
              </div>

              <div className="voting">
                <button>
                  <i className="fa-solid fa-thumbs-up"></i> {event.upvotes}
                </button>
                <button>
                  <i className="fa-solid fa-thumbs-down"></i> {event.downvotes}
                </button>
              </div>
            </div>
          )):<div className="event_detail">
          <Link to="/event-detail/1/">
            <h3>No Events Yet</h3>
            
          </Link>
        </div>
        )}
      </div>
    </>
  );
};

export default CurrentEvents;
