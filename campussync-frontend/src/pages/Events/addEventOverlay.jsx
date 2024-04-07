import React from "react";
import "./overlay.css";
import axios from "axios";
import Endpoint from "../../api";
import { useState } from "react";
const AddEventOverlay = ({ showOverlay, setshowOverlay }) => {
  const [eventData, setData] = useState({
    host: 2,
    event_date: "",
    poster: "",
    name: "",
    description: "",
    address: "string",
  });
  const handleImage = (e) => {
    const poster_overlay = document.querySelector(".overlay-poster");
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      poster_overlay.style.backgroundImage = `url(${fileUrl})`;
    }
    setData({ ...eventData, poster: file });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...eventData, [name]: value });
  };
  document.body.style.overflow = "hidden"; // stop  backgroud scrolling when modal open

  const handleSubmit = async (e) => {
    const formData = new FormData();
    e.preventDefault();
    formData.append("host", eventData.host);
    formData.append("event_date", eventData.event_date);
    formData.append("poster", eventData.poster);
    formData.append("name", eventData.name);
    formData.append("description", eventData.description);
    formData.append("address", eventData.address);
    try {
      const response = await axios.post(`${Endpoint()}event/events/`, formData);
      console.log(response)
    }

    catch (e) {
      console.log(e)
    }
  };
  return (
    <>
      <div className="overlay-container">
        <div className="overlay-box">
          <i
            onClick={() => {
              document.body.style.overflowY = "scroll";
              setshowOverlay(!showOverlay);
            }}
            class="fa-solid fa-x"
          ></i>
          <form
            onSubmit={handleSubmit}
            className="event-form"
            encType="multipart/form-data"
          >
            <div className="overlay-poster">
              <div className="upload-icon">
                <label htmlFor="poster">
                  <i className="fa-solid fa-upload"></i>
                  <p style={{ color: "black", fontSize: "1.5rem" }}>
                    Event Poster
                  </p>
                </label>
              </div>

              <input
                onChange={handleImage}
                type="file"
                id="poster"
                name="poster"
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <div className="event-inputs">
              <i className="fa fa-pen"></i>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                className="event-input"
                name="name"
                placeholder="your event ..."
              />
            </div>

            <div className="event-inputs">
              <i class="fa-solid fa-calendar-days"></i>

              <input
                onChange={(e) => handleChange(e)}
                type="date"
                className="event-input"
                name="event_date"
                placeholder="event date ..."
              />
            </div>
            <div className="event-inputs">
              <i class="fa-solid fa-location-dot"></i>

              <input
                onChange={(e) => handleChange(e)}
                type="text"
                className="event-input"
                name="address"
                placeholder="location ..."
              />
            </div>
            <div className="event-inputs">
              <textarea
                onChange={(e) => handleChange(e)}
                type="text"
                className="event-desc"
                name="description"
                placeholder="description ..."
              ></textarea>
            </div>
            <button className="create-event-btn">Create Event</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEventOverlay;
