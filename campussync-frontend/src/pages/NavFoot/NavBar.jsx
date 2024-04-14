<<<<<<< HEAD
import { useContext } from "react";
import "./nav&foot.css"
=======
import { useEffect, useContext, useState } from "react";
import "./nav&foot.css";
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Endpoint from "../../api";
const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [profile, setprofile] = useState([]);
  const fetchProfileDetail = async () => {
    const response = await axios.get(
      `${Endpoint()}user/users/${user.user_id}/`
    );
    setprofile(response.data);
  };
  useEffect(() => {
    fetchProfileDetail();
  });
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img className="navbar-logo " src="/logocampus.png"></img>
        </Link>
      </div>
      <div className="navbar-list">
        <ul>
          <Link to="/home">
            <li className="navitem">Home</li>
          </Link>
          <Link to="/events">
            <li className="navitem">Events</li>
          </Link>
          <Link to="/hostspage">
            <li className="navitem">Hosts</li>
          </Link>
          <Link to="/discussion">
            <li className="navitem">Discussion</li>
          </Link>
<<<<<<< HEAD

          {user ? (
            <li className="navitem">
              <span onClick={logoutUser}>Logout</span>
              {user && <span> Hello {user.name} </span>}
            </li>
          ) : (
            <Link to="/login">
              <li className="navitem">login</li>
            </Link>
          )}
=======
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
        </ul>
      </div>
      <div className="navbar-last">
        {user ? (
          <img
            className="navbar-profile"
            src={profile.profile_pic ? profile.profile_pic : "default.jpg"}
          />
        ) : (
          <Link to="/login">
            <div style={{ margin: "20px" }}>
              <button  className="signin-btn">
                Sign In
              </button>
            </div>
          </Link>
        )}
        {user ? (
          <div className="dropdown">
            <div className="dropdown-menu">
              <>
                <div className="">
                  <img
                    className="drop-profile"
                    src={
                      profile.profile_pic ? profile.profile_pic : "default.jpg"
                    }
                  />
                </div>

                <ul style={{ padding: "10px" }}>
                  {user && (
                    <Link to={`/profile/${user.user_id}`}>
                      <li> Your Profile </li>
                    </Link>
                  )}
                  <li className="logout" onClick={logoutUser}>
                    Logout
                  </li>
                </ul>
              </>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default NavBar;
