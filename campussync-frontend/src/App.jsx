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
import HostDetailPage from "./pages/HostsDetail/HostDetailPage";
import EventDetails from "./utils/Events/EventDetails/EventDetails";
import Home from "./pages/Home/Home";
import CurrentEvents from "./utils/Events/CurrentEvents";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import HostsPage from "./pages/HostsPage/HostsPage";
// import Hosts from "./pages/HostsPage/Hosts";
// import CardContainer from "./pages/HostsPage/CardContainer";
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
                <Route path="/" element={<PrivateRoute />}>
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
                  <Route path="/events" element={<CurrentEvents />}></Route>
                  <Route path="/discussion" element={<Discussion />}></Route>
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
