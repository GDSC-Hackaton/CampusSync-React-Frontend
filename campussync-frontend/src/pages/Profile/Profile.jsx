import { useContext, useEffect, useState } from "react";
import "./profile.css";
import React from "react";
import axios from "axios";
import Endpoint from "../../api";
import AuthContext from "../../context/AuthContext";

const Following = () => {
  const { user } = useContext(AuthContext);

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
      <div className="event-card-prof">
        <img className="event-img" src="cod.jpg" />
        <div className="event-detail">
          <p style={{ fontSize: "1.5rem" }}>Alx campus Event</p>
          <p> Place : Block 44</p>
          <p> when : 1:00 pm Lt</p>
          <button className="view-details">View Details</button>
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
const ProfileDetail = ({ ProfileDetail }) => {
  return (
    <div className="profile-detail">
      <span>Username : {ProfileDetail.name}</span>
      <span>Email : {ProfileDetail.email}</span>
      <button style={{ width: "30%" }} className="view-details">
        Edit
      </button>
    </div>
  );
};
const Profile = () => {
  const [selectedDetail, setSelectedDetail] = useState("events");
  const [profile, setprofile] = useState([]);
  const { user } = useContext(AuthContext);
  const updateProfilePic = async (e) => {
    const file = e.target.files[0];
    const picData = new FormData();
    picData.append("profile_pic", file);
    console.log(picData)
    const response = await axios.patch(`${Endpoint()}user/users/${user.user_id}/`,picData);
    console.log(picData)

    fetchProfileDetail();
  };
  const fetchProfileDetail = async () => {
    const response = await axios.get(
      `${Endpoint()}user/users/${user.user_id}/`
    );
    setprofile(response.data);
    console.log(response);
  };
  useEffect(() => {
    fetchProfileDetail();
  }, []);
  const renderDetail = () => {
    switch (selectedDetail) {
      case "events":
        return <AppointedEvents />;
      case "details":
        return <ProfileDetail ProfileDetail={profile} />;
      case "following":
        return <Following />;
      default:
        return <AppointedEvents />;
    }
  };
  return (
    <div className="profile-container">
      <div className="banner-card">
        <img className="banner-card-img-back" src={profile.profile_pic} />
        <div className="banner-card-for">
          <img className="banner-img" src={profile.profile_pic}></img>
        </div>
        <input
          onChange={updateProfilePic}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="edit-pic"
        />
        <label htmlFor="edit-pic" className="edit-pic">
          <i className="fa fa-pen"></i>
        </label>
      </div>
      <div className="profile-name">
        <span>{profile.name}</span>
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
            <p> {selectedDetail}</p>
          </div>
          {renderDetail()}
        </div>
      </div>
    </div>
  );
};
export default Profile;
