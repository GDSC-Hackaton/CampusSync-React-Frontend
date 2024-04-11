import React, { useEffect, useState } from "react";
import "./CurrentEvents.css";
import AddEventOverlay from "./addEventOverlay";
import { Link } from "react-router-dom";
import axios from "axios";
import Endpoint from "../../api";

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
  console.log(events)
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
            // value={searchTerm}
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
            <div key={index} className="event_card">
              <img
                src={event.poster}
                style={{ width: "400px", height: "100%" }}
                alt={event.name}
              />

              <div className="event_detail">
                <Link to="/event-detail/1/">
                  <h3>{event.name}</h3>
                  <p>Place: {event.address}</p>
                  <p>Time: {event.event_date}</p>
                  <p>Hosted by: {event.host ? event.host.hostname : ""}</p>
                </Link>
              </div>

              <div className="voting">
                <button>
                  <i  className="fa-solid fa-thumbs-up"></i> {event.upvotes}
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
