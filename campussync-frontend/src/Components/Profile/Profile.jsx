import React from 'react'
import "./profile.css"
import alx from "../../assets/alx.jpeg"
import alxevent from "../../assets/alx-event.jpg"
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";


const Profile = () => {

   
  return (
    <div>
          <section className="organization-profile">
      <img src={alx} alt="Organization Logo" className="organization-logo" />
     <div className="organization-description">
     <h1>ALX AASTU</h1>
      <p>A group dedicated to hosting alx campus events and training programs</p>
      <button className="Follow-btn">Follow</button>
        </div> 
    </section>

   <section className="events-wrapper">
   <div className="event-card">
        <img src={alxevent} alt="" />
      <div className="event-details">
        <h3>ALX ON CAMPUS EVENT</h3>
        <p>Join us to explore opportunities and learn about ALX education programs.</p>
        <p>Date: March 27, 2024</p>
        <p>Time: 11:00 LT</p>
        <p>Location: virtual </p>
        <p>Hosted by: Alx aastu</p>
      </div>
      <div className="event-actions">
        <button onClick={() => {/* Handle upvote */}}><FaThumbsUp /></button>
       
        <button onClick={() => {/* Handle downvote */}}><FaThumbsDown /></button>
      </div>
    </div>
<div className="Recent-container"> 
    <h1>Recent events</h1><hr />
  <div className="recent-event">Alx Campus event 1 </div>
</div>

   </section>
    </div>

  )

}

export default Profile
