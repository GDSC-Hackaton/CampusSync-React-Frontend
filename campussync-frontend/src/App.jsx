import { useState } from "react";
import "./App.css";
import Signup from "./Authentication/SignUp";
import Signin from "./Authentication/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavFoot/NavBar";
function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="main-content">
          <NavBar />

          <Routes>
            <Route path="/" element={<Signin />}></Route>
          </Routes>
          </div>
          <div className="footer"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
