import "./App.css";
import Signup from "./pages/Authentication/SignUp";
import Signin from "./pages/Authentication/SignIn";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./pages/NavFoot/NavBar";
import Profile from "./pages/Profile/Profile";
import Footer from "./pages/NavFoot/Footer";
import Discussion from "./pages/Discussion/Discussion";
<<<<<<< HEAD
import HostDetailPage from "./pages/HostsDetail/HostDetailPage";
import EventDetails from "./utils/Events/EventDetails/EventDetails";
=======
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
import Home from "./pages/Home/Home";
import CurrentEvents from "./utils/Events/CurrentEvents";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
<<<<<<< HEAD
import HostsPage from "./pages/HostsPage/HostsPage";
// import Hosts from "./pages/HostsPage/Hosts";
// import CardContainer from "./pages/HostsPage/CardContainer";
=======
import Answer from "./pages/Discussion/Answer";
import HostsPage from "./pages/HostsPage/HostsPage";
import HostDetailPage from "./pages/HostsDetail/HostDetailPage";
import EventDetails from "./pages/Events/EventDetails/EventDetails";
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
function App() {
  return (
    <>
      {/* <HostDetailPage />
      <HostsPage /> */}
      {/* <CurrentEvents /> */}
      {/* <Route path="/currentevent" element={<CurrentEvents />}></Route>  */}
        {/* <Router>
          {" "}
          <Routes>
            {/* <Route path="/home" element={<Home />}></Route> 
            <Route path="/hostspage" element={<HostsPage />}></Route>
            <Route
              path="/hostdetailpage/:id1"
              element={<HostDetailPage />}
            ></Route>
             <Route path="/eventdetailpage/:id" element={<EventDetails />}></Route> *
          </Routes>
        </Router> */}

      <Router>
        <AuthProvider>
          <div className="wrapper">
            <div className="main-content">
              <NavBar />
              <Routes>
                <Route path="/login" element={<Signin />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<PrivateRoute />}>
<<<<<<< HEAD
                  <Route
                    path="/"
                    element={<Navigate to="/home"></Navigate>}
                  ></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route
                    path="/hostdetailpage/:id1"
                    element={<HostDetailPage />}
                  ></Route>
=======
                 
                  <Route path="/profile/:user_id" element={<Profile />}></Route>
                  <Route path="/hosts" element={<HostsPage />}></Route>
                  <Route path="/hosts/:hostid" element={<HostDetailPage />}></Route>
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
                  <Route path="/events" element={<CurrentEvents />}></Route>
                  <Route path="/event-detail/:id" element={<EventDetails />}></Route>
                  <Route path="/discussion" element={<Discussion />}></Route>
                  <Route path="/answers/:question_id/" element={<Answer/>}></Route>
                  <Route
                    path="/eventdetailpage/:id"
                    element={<EventDetails />}
                  ></Route>
                  <Route path="/hostspage" element={<HostsPage />}></Route>
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
