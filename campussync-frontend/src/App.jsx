import { useState } from "react";
import "./App.css";
import Signup from "./pages/Authentication/SignUp";
import Signin from "./pages/Authentication/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavFoot/NavBar";
import Profile from "./pages/Profile/Profile";
import Footer from "./pages/NavFoot/Footer";
import AddEventOverlay from "./pages/Events/addEventOverlay";
import Discussion from "./pages/Discussion/Discussion";
import HostDetailCard from "./pages/HostsDetail/HostDetailCard";
import HostDetailPage from "./pages/HostsDetail/HostDetailPage";
import EventDetails from "./pages/Events/EventDetails";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="main-content">
            <NavBar />
            <Routes>
              <Route path="/" element={<Signin />}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/register" element={<Signup />}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/hosts" element={<HostDetailPage/>}></Route>
              <Route path="/add" element={<AddEventOverlay />}></Route>
              <Route path="/discussion" element={<Discussion/>}></Route>
              <Route path="/event-detail/1/" element={<EventDetails/>}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
