import React from "react";

const HostOverlay = ({ showOverlay, setshowOverlay }) => {
  const handleChange = (e) => {
    const poster_overlay = document.querySelector(".overlay-poster");
    poster_overlay.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;
  };
  document.body.style.overflow = "hidden"; // stop  backgroud scrolling when modal open
  const handleSubmit = () => {

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
          <h3 style={{textAlign:"center"}}>Be a Host</h3>
          <form className="event-form" encType="multipart/form-data">
            <div className="overlay-poster">
              <div className="upload-icon">
                <label htmlFor="poster">
                  <i className="fa-solid fa-upload"></i>
                  <p style={{ color: "black", fontSize: "1.5rem" }}>
                    Host Poster
                  </p>
                </label>
              </div>

              <input
                onChange={(e) => handleChange(e)}
                type="file"
                id="poster"
                name="account_pic"
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <div className="event-inputs">
              <i className="fa fa-pen"></i>
              <input
                type="text"
                className="event-input"
                name="hostname"
                placeholder="host name ..."
              />
            </div>

            <div className="event-inputs">
              <textarea
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

export default HostOverlay;
