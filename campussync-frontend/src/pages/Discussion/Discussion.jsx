import { useContext, useEffect, useState } from "react";
import "./discussion.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Endpoint from "../../api";
import AuthContext from "../../context/AuthContext";
const Discussion = () => {
  const {user} = useContext(AuthContext);
  const [isQuestionOverlay, setQuestionOverlay] = useState(false);
  const [questions,setQuestions] = useState([])
  const [questionData, setQuestionData] = useState({
    question: "",
    author: user.user_id,
  });
  const handleChange =(e) => {
    const {name ,value} = e.target
    setQuestionData({...questionData,[name]:value})
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(questionData)
    try {
      const response = await axios.post(`${Endpoint()}forum/questions/`,questionData);
      console.log(response)
    }
    catch (e) {
      console.log(e)
    }

  }
  const fetchQuestions = async () => {
    const response =await axios.get(`${Endpoint()}forum/questions`);
    setQuestions(response.data)
    console.log(response.data)


  }
  useEffect(()=> {
    fetchQuestions()
  },[])
  return (
    <div className="discussion-container">
      <div className="discussion-grid">
        <div className="grid-column" style={{ position: "sticky", top: 0 }}>
          <span>Start a discussion </span>
          <button
            onClick={() => setQuestionOverlay(!isQuestionOverlay)}
            className="add-question"
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className="grid-column">
          <input
            type="text"
            className="search-input"
            placeholder="search for questions ..."
          />
          <button className="search-btn">Search</button>
          <div>
            {isQuestionOverlay && (
              <div className="overlay-container">
                <div className="overlay-box">
                  <i
                    onClick={() => {
                      document.body.style.overflowY = "scroll";
                      setQuestionOverlay(!isQuestionOverlay);
                    }}
                    className="fa-solid fa-x"
                  ></i>
                  <form onSubmit={handleSubmit} className="event-form" encType="multipart/form-data">
                    <div className="event-inputs">
                      <h2>Your Question</h2>
                      <textarea
                        onChange={handleChange}
                        type="text"
                        required
                        className="event-desc"
                        name="question"
                        placeholder="write question here ..."
                      ></textarea>
                    </div>
                    <button
                      onClick={() => (document.body.style.overflowY = "scroll")}
                      
                      type="submit"
                      className="create-event-btn"
                    >
                      Create Event
                    </button>
                  </form>
                </div>
              </div>
            )}

            <div className="question-card">
              <div className="q-head">
                <img src="/cod.jpg" className="q-creator" />
                <span>
                  John Cena <small style={{ color: "gray" }}>asked</small>
                  <br /> <small>feb 22,2222</small>
                </span>
              </div>

              <div className="q-content">
                <div className="question">
                  <Link to="/answers/1"> what is mon?</Link>
                </div>
                <div style={{ display: "flex" }}>
                  <button className="answer-btn">
                    <i className="fas fa-pen"></i>{" "}
                    <Link to="/answers/1">Answer</Link>
                  </button>
                  <button className="share-btn">
                    <i className="fa-regular fa-pen-to-square"></i>
                    <i className="fas fa-share"></i>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discussion;
