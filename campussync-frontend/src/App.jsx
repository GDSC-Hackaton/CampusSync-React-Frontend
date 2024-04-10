
import "./App.css";
import Signup from "./pages/Authentication/SignUp";
import Signin from "./pages/Authentication/SignIn";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./pages/NavFoot/NavBar";
import Profile from "./pages/Profile/Profile";
import Footer from "./pages/NavFoot/Footer";


import Discussion from "./pages/Discussion/Discussion";

import HostDetailPage from "./pages/HostsDetail/HostDetailPage";
import EventDetails from "./utils/Events/EventDetails"
import Home from "./pages/Home/Home";
import CurrentEvents from "./utils/Events/CurrentEvents"
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="wrapper">
            <div className="main-content">
              <NavBar />
              <Routes>
                <Route path="/login" element={<Signin />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/hosts" element={<HostDetailPage />}></Route>
                  <Route path="/events" element={<CurrentEvents />}></Route>
                  <Route path="/discussion" element={<Discussion />}></Route>
                  <Route path="/event-detail/:id" element={<EventDetails />}></Route>
                  <Route path="*" element={<Home/>}></Route>
                </Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
