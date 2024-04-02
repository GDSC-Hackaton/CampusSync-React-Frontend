import React from "react";
import "./comment.css"
import { FaCircleUser } from "react-icons/fa6";

function Comment() {
  return (
    <div className="comment-container">
      <div className="comment-topic">
        {" "}
        <FaCircleUser size="2rem" />
        <h1>John Cena</h1>
      </div>
      <div className="comment-content">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam
          enim, congue quis ex in, convallis mollis nulla. Pellentesque dui leo,
          tristique dignissim enim ac, rutrum pharetra nisl. Curabitur malesuada
          nunc nibh, eget vestibulum orci gravida quis. Aenean ligula ligula,
          cursus ultrices leo vitae, efficitur vulputate diam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nulla diam enim, congue quis ex
          in, convallis mollis nulla. Pellentesque dui leo, tristique dignissim
          enim ac, rutrum pharetra nisl. Curabitur malesuada nunc nibh, eget
          vestibulum orci gravida quis. Aenean ligula ligula, cursus ultrices
          leo vitae, efficitur vulputate diam.
        </p>
      </div>
    </div>
  );
}

export default Comment;
