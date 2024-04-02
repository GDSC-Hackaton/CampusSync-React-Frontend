import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import "./host.css"

function HostReg() {
  const [host, setHost] = useState("");
  const [description, setDescription] = useState("");

   function handleEvent(e) {
     e.preventDefault();
    //  addfunction({ title, type, text, id });
     setDescription("");
     setHost("");
   }

  return (
    <>
      <div className="host-container">
        <h1>Be a Host</h1>
        <div className="host-image">
          <FaImage size="5rem" />
        </div>
        <div className="host-form">
          <form className="host-form-fill" onSubmit={handleEvent}>
            <input
              type="text"
              placeholder="Host name eg. GDSC,CGI"
              value={host}
              onChange={(e) => setHost(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </form>
        </div>
        <div className="host-add">
          <button>Register</button>
          <button>Cancel</button>
          <div className="host-add-club">
            <IoIosAddCircle size="2rem" />
            <span>Add Club</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostReg;
