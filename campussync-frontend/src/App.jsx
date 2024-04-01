import { useState } from "react";
import "./App.css";
import Signup from "./Authentication/SignUp";
import Signin from "./Authentication/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavFoot/NavBar";
import Footer from "./NavFoot/Footer";
function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="main-content">
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/register" element={<Signup />}></Route>

          </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
