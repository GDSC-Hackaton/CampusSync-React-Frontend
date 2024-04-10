import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import logo from "../../assets/pexels.jpg";
import { IoSend } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdAddComment } from "react-icons/md";
import "./event-details.css";
import Comment from "./Comments";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
function EventDetails() {
  const { id } = useParams();
  const [choice, setChoice] = useState({});
  const [comment, setComment] = useState([]);
  const { user, AuthUser } = useContext(AuthContext);
  console.log(user);
  const [postcomment, setPostComment] = useState({
    content: "",
    event: null,
  });
  useEffect(() => {
    setPostComment({ ...postcomment, event: id });
  }, [id]);
  const handleCommentChange = (e) => {
    setPostComment({ ...postcomment, content: e.target.value });
  };

  const handlereserve = (e) => {
    // e.preventDefault();
    // let form_data = new FormData();
    // form_data.append("id", postcomment.content);
    // form_data.append("event", postcomment.event);
    // console.log(form_data);
    let url = "https://natty.pythonanywhere.com/event/events/${id}/attendees/";
    axios
      .post(url, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        // handleSucess();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postcomment);
    let form_data = new FormData();
    form_data.append("content", postcomment.content);
    form_data.append("event", postcomment.event);
    console.log(form_data);
    let url = "https://natty.pythonanywhere.com/event/comments/new/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        // handleSucess();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://natty.pythonanywhere.com/event/events/${id}/`
        );
        console.log(response.data);
        response.data.date_posted = response.data.date_posted.slice(0, 10);
        setChoice(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchdata1 = async () => {
      try {
        const response = await axios.get(
          `https://natty.pythonanywhere.com/event/events/${id}/comments/`
        );
        console.log(response.data);
        setComment(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata1();
  }, []);

  return (
    <div className="details-container">
      <div className="details-image">
        {/* <img src={choice.poster} alt="" /> */}
        <img src={logo} alt="" />
      </div>
      <div className="details-content">
        <div className="details-description">
          <h1>Description</h1>
          <p>
            {/* {choice.description} */}
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
            {/* <span>{choice.address}</span> */}
            <span>Block-51 Red Carpet</span>
          </div>
          <div className="details-address-detail">
            <IoIosTimer />
            {/* <span>{choice.date_posted}</span> */}
            <span>4:00 pm LT</span>
          </div>
          <div>
            <h3>Hosted By:</h3>
            <button onClick={handlereserve}>RSVP for Event</button>
          </div>
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
          comment.map((item) => (
            <Comment key={item.id} item1={item} user={user.name} />
          ))}
      </div>
    </div>
  );
}

export default EventDetails;
