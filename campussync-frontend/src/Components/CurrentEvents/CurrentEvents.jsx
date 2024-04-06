import React, { useState } from 'react';
import "../CurrentEvents/CurrentEvents.css"

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
    </div>
  );
};

export default CurrentEvents;