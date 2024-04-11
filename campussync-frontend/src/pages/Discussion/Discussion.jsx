import { useContext, useEffect, useState } from "react";
import "./discussion.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Endpoint from "../../api";
import AuthContext from "../../context/AuthContext";
import EditQuestion from "./Edit";
import DeleteQuestion from "./Delete";
const Discussion = () => {
  const { user } = useContext(AuthContext);
  const [isQuestionOverlay, setQuestionOverlay] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [editOverlay, setEditOverlay] = useState(false);
  const [deleteOverlay, setdeleteOverlay] = useState(false);
  const [questionToBeDeleted, setquestionToBeDeleted] = useState("");
  const [questionTobeEdited, setQuestionToBeEdited] = useState("");
  const [questionData, setQuestionData] = useState({
    question: "",
    author_id: user.user_id,
  });
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  };
  const shareLink = (link) => {
    navigator.clipboard.writeText(link);
    alert(`${link}"Link copied to clipboard!"`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(questionData);
    try {
      const response = await axios.post(
        `${Endpoint()}forum/questions/`,
        questionData
      );
      setQuestionOverlay(!isQuestionOverlay);
      fetchQuestions();
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchQuestions = async () => {
    const response = await axios.get(`${Endpoint()}forum/questions`);
    setQuestions(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div className="discussion-container">
      <div className="discussion-grid">
        {editOverlay && (
          <EditQuestion 
           choice="edit-question"
            editOverlay={editOverlay}
            setEditOverlay={setEditOverlay}
            questionTobeEdited={questionTobeEdited}
            fetchQuestions={fetchQuestions}
          />
        )}
        {deleteOverlay && (
          <DeleteQuestion
            deleteOverlay={deleteOverlay}
            setdeleteOverlay={setdeleteOverlay}
            questionToBeDeleted={questionToBeDeleted}
            fetchQuestions={fetchQuestions}
          />
        )}
        <div className="grid-column" style={{ position: "sticky", top: 0 }}>
          
          <span>Start a discussion </span>
          <button
            onClick={() => setQuestionOverlay(!isQuestionOverlay)}
            className="add-question"
          >
            <i className="fa fa-plus"></i>
          </button>
          <div>
            <img style={{width:"100%", height:"100%" , margin:"4px"}} src="question.gif" />
          </div>
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
                  <form
                    onSubmit={handleSubmit}
                    className="event-form"
                    encType="multipart/form-data"
                  >
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
                      Start Discussion
                    </button>
                  </form>
                </div>
              </div>
            )}

            {questions &&
              questions.map((question) => (
                <div key={question.id} className="question-card">
                  <div className="q-head">
                    <img
                      src={question.author.profile_pic}
                      className="q-creator"
                    />
                    <span>
                      {question.author.name}{" "}
                      <small style={{ color: "gray" }}>asked</small>
                      <br /> <small>{question.created_date}2</small>
                    </span>
                  </div>

                  <div className="q-content">
                    <div className="question">
                      <Link id="q-answers" to={`/answers/${question.id}`}>
                        {question.question}
                      </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                      <button className="answer-btn">
                        <Link id="q-answers" to={`/answers/${question.id}`}>
                          <i className="fas fa-pen"></i> Answer
                        </Link>
                      </button>
                      <button className="share-btn">
                        {user.user_id === question.author.id ? (
                          <>
                            <i
                              onClick={() => {
                                setQuestionToBeEdited(question),
                                  setEditOverlay(!editOverlay);
                              }}
                              title="edit"
                              class="fa-regular fa-pen-to-square"
                            ></i>
                            <i
                              onClick={() => {
                                setquestionToBeDeleted(question),
                                  setdeleteOverlay(!deleteOverlay);
                              }}
                              title="delete"
                              class="fa-solid fa-trash"
                            ></i>
                          </>
                        ) : (
                          ""
                        )}
                        <i
                          title="share"
                          onClick={() =>
                            shareLink(
                              `${window.location.origin}/answers/${question.id}/`
                            )
                          }
                          className="fas fa-share"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discussion;
