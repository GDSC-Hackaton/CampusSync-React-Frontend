import React, { useState } from 'react';
import "../CurrentEvents/CurrentEvents.css" 



// Sample data for the events
const eventData = [
    {
      title: 'Women in Tech',
      image: '../../assets/alx-event.jpg',
      place: 'Virtual',
      time: '11:00 LT',
      host: 'GDSC',
      votes: { upvote: 120, downvote: 3 }
    },
    {
      title: 'CISCO Registration',
      image: '/images/cisco.jpg',
      place: 'Virtual',
      time: '11:00 LT',
      host: 'CISCO Astu',
      votes: { upvote: 80, downvote: 5 }
    },
    {
      title: 'ALX Campus Event',
      image: '/images/alx-campus.jpg',
      place: 'Virtual',
      time: '11:00 LT',
      host: 'ALX',
      votes: { upvote: 250, downvote: 7 }
    },
    // ... additional events
  ];
  

const CurrentEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Implement search functionality
  };

  const handleFilter = (filter) => {
    console.log('Filtering by:', filter);
    // Implement filter functionality
  };

  return (
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
        <button onClick={() => handleFilter('recent')}>recent</button>
        <button onClick={() => handleFilter('old')}>old</button>
        <button onClick={() => handleFilter('upvote')}>upvote</button>
        <button onClick={() => handleFilter('downvote')}>downvote</button>
      </div>
      <button className="add-event-button">+</button> <hr /> 
      
      {eventData.map((event, index) => (
        <div key={index} className="event_card">
          <img src={event.image} alt={event.title} />
         <div className="event_detail">
         <h3>{event.title}</h3>
          <p>Place: {event.place}</p>
          <p>Time: {event.time}</p>
          <p>Hosted by: {event.host}</p>
         </div>
          <div className="voting">
            <button>👍 {event.votes.upvote}</button>
            <button>👎 {event.votes.downvote}</button>
          </div>
        </div>
      ))} 
      </div>
   
  );
};

export default CurrentEvents;