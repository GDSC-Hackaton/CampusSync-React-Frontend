import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./TopHosts.css";

const EventHostCard = ({ name, eventsCount, imageUrl }) => {
  return (
    <div className="event-host-card">
      <img src={imageUrl} alt={name} />
      <div className="host-info">
        <h3>{name}</h3>
        <p>Posted: {eventsCount} events</p>
      </div>
    </div>
  );
};

const TopHosts = () => {
  const [hostsData, setHostsData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://natty.pythonanywhere.com/user/hosts/");
        console.log(response.data);
        setHostsData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <section className="top-event-hosts">
      <h2>Top Event Hosts</h2> <hr />
      <div className="hosts-container">
        {hostsData.map((host, index) => (
          <EventHostCard key={index} imageUrl= {host.poster} name={host.hostname} eventsCount={host.length} />
        ))}
      </div>
      <button className="view-more">View More</button>
    </section>
  );
};

export default TopHosts;
