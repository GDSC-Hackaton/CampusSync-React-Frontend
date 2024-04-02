import React, { useState } from "react";
import logo from "../../assets/back_3.jpg";
import Comment from "../Comment/Comment";
import { IoSend } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdAddComment } from "react-icons/md";
import "./Details.css";

function Details() {
  const [comment, setComment] = useState("");

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={logo} alt="" />
      </div>
      <div className="details-content">
        <div className="details-description">
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam
            enim, congue quis ex in, convallis mollis nulla. Pellentesque dui
            leo, tristique dignissim enim ac, rutrum pharetra nisl. Curabitur
            malesuada nunc nibh, eget vestibulum orci gravida quis. Aenean
            ligula ligula, cursus ultrices leo vitae, efficitur vulputate diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam
            enim, congue quis ex in, convallis mollis nulla. Pellentesque dui
            leo, tristique dignissim enim ac, rutrum pharetra nisl. Curabitur
            malesuada nunc nibh, eget vestibulum orci gravida quis. Aenean
            ligula ligula, cursus ultrices leo vitae, efficitur vulputate diam.
          </p>
        </div>
        <div className="details-address">
          <h1>Details</h1>
          <div className="details-address-detail">
            <IoLocationSharp />
            <span>Block-51 Red Carpet</span>
          </div>
          <div className="details-address-detail">
            <IoIosTimer />
            <span>4:00 pm LT</span>
          </div>
          <div>
            <h3>Hosted By:</h3>
            <button>RSVP for Event</button>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "130px", marginTop: "75px" }}>
        <h1>Comments</h1>
        <MdAddComment size="3rem" />
      </div>

      <div className="details-comment">
        <input
          type="text"
          placeholder="Comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <div style={{ paddingRight: "50px" }}>
          <IoSend size="2rem" />
        </div>
      </div>
      <Comment />
    </div>
  );
}

export default Details;
