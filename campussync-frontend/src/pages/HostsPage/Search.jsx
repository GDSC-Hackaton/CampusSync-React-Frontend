import React, { useState } from "react";
import "./search.css";

function Search({ choicefunction }) {
  const [choice, setChoice] = useState("");
  console.log(choice);

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(choice);
    choicefunction(choice);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setChoice(e.target.value);
  };
  return (
    <>
      <div className="search-container">
      <form
            onSubmit={handleEvent}
            className="search-form"
          >
            <input
              type="text"
              className="search-input"
              placeholder="search for questions ..."
              onChange={handleSubmission}
              value={choice}
            />
            <button className="search-btn">Search</button>
          </form>
   
        
      </div>
    </>
  );
}

export default Search;
