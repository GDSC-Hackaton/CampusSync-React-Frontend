import { useState } from "react";
import "./profile.css";
import React from 'react'


const Following = () => {
  return (
    <div className="following-hosts">
      <div className="following-box">
        <img src="cod.jpg" className="host-pic" />
        <p>Alx</p>
      </div>
      <div className="following-box">
        <img src="cod.jpg" className="host-pic" />
        <p>Alx</p>
      </div>
      <div className="following-box">
        <img src="cod.jpg" className="host-pic" />
        <p>Alx</p>
      </div>

      <div className="following-box">
        <img src="cod.jpg" className="host-pic" />
        <p>Alx</p>
      </div>
    </div>
  );
};
const AppointedEvents = () => {
  return (
    <div className="event-cards">
<<<<<<< HEAD
      <div className="event-card-prof">
        <img className="event-img" src="cod.jpg" />
        <div className="event-detail">
          <p style={{ fontSize: "1.5rem" }}>Alx campus Event</p>
          <p> Place : Block 44</p>
          <p> when : 1:00 pm Lt</p>
          <button className="view-details">View Details</button>
=======
      {events.length > 0 ? (
        events.map((event) => (
          <div className="event-card-prof">
            <img
              className="event-img"
              src={`http://natty.pythonanywhere.com/${event.poster}`}
            />
            <div className="event-detail">
              <p style={{ fontSize: "1.5rem" }}>{event.name}</p>
              <p>
                <i class="fa-solid fa-location-dot"></i> {event.address}
              </p>
              <p>
                <i class="fa-regular fa-clock"></i> :{" "}
                {timeFormater(event.event_date)}
              </p>
              <Link to={`/event-detail/${event.id}`}>
                <button className="view-details">View Details</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div style={{ margin: "20px", boxShadow: "none" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "20px" }}>
              you haven no Scheduled events add some
              <Link to="/events">
                <button
                  style={{
                    margin: "5px",
                    padding: "10px",
                    borderRadius: "25px",
                    border: "none",
                    background: "purple",
                    color: "white",
                  }}
                >
                  here
                </button>
              </Link>
            </span>
            <div className="answer">
              <img src="/empty.gif" />
            </div>
          </div>
>>>>>>> parent of b39af38 (final frontend push)
        </div>
      </div>
      <div className="event-card-prof">
        <img className="event-img" src="cod.jpg" />
        <div className="event-detail">
          <p style={{ fontSize: "1.5rem" }}>Alx campus Event</p>
          <p> Place : Block 44</p>
          <p> when : 1:00 pm Lt</p>
          <button className="view-details">View Details</button>
        </div>
      </div>{" "}
      <div className="event-card-prof">
        <img className="event-img" src="cod.jpg" />
        <div className="event-detail">
          <p style={{ fontSize: "1.5rem" }}>Alx campus Event</p>
          <p> Place : Block 44</p>
          <p> when : 1:00 pm Lt</p>
          <button className="view-details">View Details</button>
        </div>
      </div>
    </div>
  );
};
const ProfileDetail = () => {
  return (
    <div className="profile-detail">
<<<<<<< HEAD
      <span>Username : cenajohn</span>
      <span>Email : cena@gmail.com</span>
      <span>Password : *******</span>
      <button className="view-details">Edit</button>
=======
      <span style={{ padding: "20px" }}>Username : {ProfileDetail.name}</span>
      <span style={{ padding: "20px" }}>Email : {ProfileDetail.email}</span>
>>>>>>> parent of b39af38 (final frontend push)
    </div>
  );
};
const Profile = () => {
  const [selectedDetail, setSelectedDetail] = useState("");

  const renderDetail = () => {
    switch (selectedDetail) {
      case "events":
        return <AppointedEvents />;
      case "details":
        return <ProfileDetail />;
      case "following":
        return <Following />;
      default:
        return <AppointedEvents />;
    }
  };
  return (
    <div className="profile-container">
      <div className="banner-card">
        <img className="banner-card-img-back" src="cod.jpg" />
        <div className="banner-card-for">
          <img className="banner-img" src="cod.jpg"></img>
        </div>
      </div>
      <div className="profile-name">
        <span>John Cena</span>
      </div>
      <div className="profile-grid">
        <div className="content-choices">
          <ul className="choices-list">
            <li onClick={() => setSelectedDetail("events")} className="choice">
              Scheduled Events
            </li>
            <li
              onClick={() => setSelectedDetail("following")}
              className="choice"
            >
              Following
            </li>
            <li onClick={() => setSelectedDetail("details")} className="choice">
              Profile Details
            </li>
          </ul>
        </div>
        <div className="contents-detail">
          <div className="detail-title">
            <p> Scheduled Events</p>
          </div>
          {renderDetail()}
        </div>
      </div>
    </div>
  );
};
export default Profile;
