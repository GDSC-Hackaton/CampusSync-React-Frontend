import React, { useEffect } from "react";
import "./answer.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Endpoint from "../../api";
const Answer = () => {
  const [isQuestionOverlay, setQuestionOverlay] = useState(false);
  const [answers , setAnswers ] = useState([]);
  const fetchAnswers = async ()=> {
    const response = await axios.get(`${Endpoint()}forum/questions/1/answers/`)
    console.log(response.data);
    setAnswers(response.data)
  }
  useEffect(()=> {
    fetchAnswers();
  },[])
  const navigate = useNavigate();
  return (
    <div className="answer-container">
      <i onClick={() => navigate(-1)} className="fas fa-arrow-left"></i>
      <div className="question-box">
        <div className="q-head">
          <img src="/cod.jpg" className="q-creator" />
          <span>
            amanuel <br />
            feb 20,2202
          </span>
        </div>
        <div style={{ margin: "20px", marginTop: "0", padding: "10px" }}>
          <span className="question">what is ALX?</span>
        </div>
        <div>
          <button
            onClick={() => setQuestionOverlay(!isQuestionOverlay)}
            className="ans-btn"
          >
            <i className="fas fa-pen"></i> <Link to="/answers/1">Answer</Link>
          </button>
        </div>
      </div>
      {isQuestionOverlay && (
        <div className="overlay-container">
          <div className="overlay-box">
            <i
              onClick={() => {
                document.body.style.overflowY = "scroll";
                setQuestionOverlay(!isQuestionOverlay);
              }}
              class="fa-solid fa-x"
            ></i>
            <form className="event-form" encType="multipart/form-data">
              <div className="event-inputs">
                <h2>Your Answer</h2>
                <h3>what is ALX?</h3>
                <textarea
                  type="text"
                  className="event-desc"
                  name="description"
                  placeholder="your answer ..."
                ></textarea>
              </div>
              <button
                onClick={() => (document.body.style.overflowY = "scroll")}
                type="submit"
                className="create-event-btn"
              >
                Answer
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="answer-box">
        <div className="answer-header">
          <span style={{ padding: "20px" }}>Answers</span>
          <span style={{padding: "20px" , marginLeft:"auto"}}>Recent </span>
        </div>
        <div
          style={{ margin: "20px", boxShadow: "none" }}
          className="answer-card"
        >
          <div className="q-head">
            <img src="/cod.jpg" className="a-creator" />
            <span>
              John Cena 
              <br /> <small>feb 22,2222</small>
            </span>
          </div>

          <div className="a-content">
            <div className="answer">
              what is mon?what is mon?what is mon?what is mon?what is mon?what

            </div>

            <button className="edit-btns" style={{ marginLeft: "auto" }}>
              <i class="fa-regular fa-pen-to-square"></i>
              <i class="fas fa-share"></i>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
