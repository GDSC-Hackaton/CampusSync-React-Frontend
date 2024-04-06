import React from 'react' 
import "../TopHosts/TopHosts.css"
const hostsData = [
    {
      name: 'GOOGLE DEVELOPERS CLUB',
      eventsCount: 20,
      imageUrl: 'path-to-google-dev-club-image.jpg'
    },
    {
      name: 'CDI ANIMATIONS CLUB',
      eventsCount: 10,
      imageUrl: 'path-to-cdi-animations-club-image.jpg'
    },
    {
      name: 'AASTU ALX CLUB',
      eventsCount: 10,
      imageUrl: 'path-to-aastu-alx-club-image.jpg'
    },
    // Add more hosts as needed
  ];
  
  const EventHostCard = ({ name, eventsCount, imageUrl }) => {
    return (
      <div className="event-host-card">
        <img src={imageUrl} alt={name} />
        <div className="host-info">
          <h3>{name}</h3>
          <p>posted: {eventsCount} events</p>
        </div>
      </div>
    );
  };
  
const TopHosts = () => {

    return (
        <section className="top-event-hosts">
          <h2>Top Event Hosts</h2> <hr />
          <div className="hosts-container">
            {hostsData.map((host, index) => (
              <EventHostCard key={index} {...host} />
            ))}
          </div>
          <button className="view-more">view more</button>
        </section>
      );

}
export default TopHosts;