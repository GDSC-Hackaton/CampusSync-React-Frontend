import React from 'react' 
import "./TopEvents.css"
import EventCard from './EventCard';
const eventsData = [
    
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    { title: 'GDSC HACKATHON EVENT', time: 'TODAY 9:00 PM', location: 'block 47', postedBy: 'posted by gdsc club', imageSrc: 'present.png' },
    // ... other events
  ];
  
const TopEvents = () => {

  return (
    <div className="event-container">
    <h2>Top events Now</h2> <hr />
    <div className="events-grid">
      {eventsData.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
    <button className="view-more">view more</button>
  </div>
  )
}

export default TopEvents;