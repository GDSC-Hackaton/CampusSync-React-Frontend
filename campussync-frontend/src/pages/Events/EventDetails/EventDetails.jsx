

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdAddComment } from "react-icons/md";
import "./event-details.css";
import Comment from "./Comments/Comments";
import { useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import CongratulationPopout from "./CongratulationPopout/CongratulationPopout";
import AlreadyRegisteredPopout from "./AlreadyRegisteredPopout/AlreadyRegisteredPopout";

function EventDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [choice, setChoice] = useState({});
  const [comment, setComment] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [postcomment, setPostComment] = useState({
    commentor_id: user.user_id,
    content: "",
    event: null,
  });
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [showAlreadyRegistered, setShowAlreadyRegistered] = useState(false);
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  console.log("thsi is the param id",id);
  useEffect(() => {
    setPostComment({ ...postcomment, event: id });
  }, [id]);

  useEffect(() => {
    fetchData();
    fetchComments();
    fetchAttendees();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://natty.pythonanywhere.com/event/events/${id}/`
      );
      const { data } = response;
      let timestamp = data.date_posted;
      const date = new Date(timestamp);
      timestamp = timestamp.slice(0, 10);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const humanReadableTime = `${formattedHours}:${formattedMinutes}`;
      data.date_posted = timestamp + ",   " + humanReadableTime;
      setChoice(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://natty.pythonanywhere.com/event/${id}/comments/`
      );

      setComment(response.data?.reverse());
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  };

  const fetchAttendees = async () => {
    try {
      const response = await axios.get(
        `https://natty.pythonanywhere.com/event/events/${id}/attendees/`
      );
      setAttendees(response.data);
    } catch (error) {
      console.log("Error fetching attendees:", error);
    }
  };

  const handleCommentChange = (e) => {
    setPostComment({ ...postcomment, content: e.target.value });
  };

  const handleRSVP = (e, userId, eventId) => {
    const isAttending = attendees.some((attendee) => attendee.id === userId);
    if (isAttending) {
      setShowAlreadyRegistered(true);
    } else {
      RSVP(userId, eventId);
    }
  };

  const RSVP = (userId, eventId) => {
    const eventData = { id: userId };
    let form_data = new FormData();
    form_data.append("id", eventData.id);
    let url = `https://natty.pythonanywhere.com/event/events/${eventId}/attendees/`;
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setAttendees((prev) => [...prev, { id: userId }]);
        setShowCongratulation(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCommentSubmitted) {
      setIsCommentSubmitted(true);
      let form_data = new FormData();
      form_data.append("commentor_id", postcomment.commentor_id);
      form_data.append("content", postcomment.content);
      form_data.append("event", postcomment.event);
      let url = "https://natty.pythonanywhere.com/event/comments/new/";
      try {
        const res = await axios.post(url, form_data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(res.data);
      //  if (
      //    res.data.commentor &&
      //    typeof res.data.commentor === "object" &&
      //    res.data.commentor.profile_pic
      //  ) {
      //    // Concatenate the profile pic URL
      //    res.data.commentor.profile_pic =
      //      "https://natty.pythonanywhere.com" + res.data.commentor.profile_pic;
      //  }
        setComment((res.data || []).reverse());
        setPostComment({
          commentor_id: postcomment.commentor_id,
          content: "",
          event: id,
        });
        setIsCommentSubmitted(false);
      } catch (err) {
        console.log(err);
        setIsCommentSubmitted(false);
      }
    }
  };

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={choice.poster} alt="" />
      </div>
      <div className="details-content">
        <div className="details-description">
          <h1>Description</h1>
          <p>{choice.description}</p>
        </div>
        <div className="details-address">
          <h1>Details</h1>
          <div className="details-address-detail">
            <IoLocationSharp />
            <span>{choice.address}</span>
          </div>
          <div className="details-address-detail">
            <IoIosTimer />
            <span>{choice.date_posted}</span>
          </div>
          <div>
            {/* ************************************************************************************************** */}
            {choice.host?(<h3>Hosted By: {choice.host.hostname}</h3>):(<h3>Hosted By:</h3>)}
            
            {/* ************************************************************************************************** */}
            <button onClick={(e) => handleRSVP(e, user.user_id, id)}>
              RSVP for Event
            </button>
          </div>
          {showCongratulation && (
            <CongratulationPopout
              onClose={() => setShowCongratulation(false)}
            />
          )}
          {showAlreadyRegistered && (
            <AlreadyRegisteredPopout
              onClose={() => setShowAlreadyRegistered(false)}
            />
          )}
        </div>
      </div>
      <div style={{ paddingLeft: "130px", marginTop: "75px" }}>
        <h1>Comments</h1>
        <MdAddComment size="3rem" />
      </div>

      <div className="details-comment">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Comment..."
            value={postcomment.content}
            onChange={handleCommentChange}
          ></input>
        </form>
        <div style={{ paddingRight: "50px" }} onClick={handleSubmit}>
          <IoSend size="2rem" />
        </div>
      </div>
      <div>
        {comment &&
          comment.map((item) => <Comment key={item.id} item1={item} />)}
      </div>
    </div>
  );
}

export default EventDetails;

