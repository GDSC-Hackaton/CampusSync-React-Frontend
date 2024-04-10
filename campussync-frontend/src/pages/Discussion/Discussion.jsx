import { useState } from "react";
import "./discussion.css";
const Discussion = () => {
  const [isQuestionOverlay, setQuestionOverlay] = useState(false);
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
                    class="fa-solid fa-x"
                  ></i>
                  <form className="event-form" encType="multipart/form-data">
                    <div className="event-inputs">
                      <h2>Your Question</h2>
                      <textarea
                        type="text"
                        className="event-desc"
                        name="description"
                        placeholder="description ..."
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
                <br/> <small >feb 22,2222</small></span>
              </div>

              <div className="q-content">
                <div className="question" >what is mon?</div>
                <div style={{display:"flex"}}>
                  <button className="answer-btn"><i className="fas fa-pen"></i>Answer</button>
                  <button  className="share-btn"><i class="fa-regular fa-pen-to-square"></i><i class="fas fa-share"></i><i class="fa-solid fa-trash"></i></button>
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
