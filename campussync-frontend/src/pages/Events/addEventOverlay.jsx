import React from "react";
import "./overlay.css";
import axios from "axios";
import Endpoint from "../../api";
import { useState } from "react";
const AddEventOverlay = ({ showOverlay, setshowOverlay,fetchEvents }) => {
  const [eventData, setData] = useState({
    host_id: 1,
    name: "string",
    description: "string",
    event_date: "2024-04-09T12:43:02.725Z",
    poster: "string",
    address:"",
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
    formData.append("host_id", eventData.host_id);
    formData.append("event_date", eventData.event_date);
    formData.append("poster", eventData.poster);
    formData.append("name", eventData.name);
    formData.append("description", eventData.description);
    formData.append("address", eventData.address);

    try {
      const response = await axios.post(`${Endpoint()}event/events/`, formData);
      fetchEvents();

      setshowOverlay(!showOverlay);
      console.log(response);
    } catch (e) {
      console.log(e);
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
                onChange={handleChange}
                type="text"
                className="event-input"
                name="name"
                placeholder="your event ..."
                required
              />
            </div>

            <div className="event-inputs">
              <i class="fa-solid fa-calendar-days"></i>

              <input
                onChange={handleChange}
                type="date"
                className="event-input"
                name="event_date"
                placeholder="event date ..."
                required
              />
            </div>
            <div className="event-inputs">
              <i class="fa-solid fa-location-dot"></i>

              <input
                onChange={handleChange}
                type="text"
                className="event-input"
                name="address"
                placeholder="location ..."
                required
              />
            </div>
            <div className="event-inputs">
              <textarea
                onChange={handleChange}
                type="text"
                className="event-desc"
                name="description"
                placeholder="description ..."
              ></textarea>
            </div>
            <button onClick={() =>  document.body.style.overflowY = "scroll"}  type="submit" className="create-event-btn">
              Create Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEventOverlay;
