import { useContext } from "react";
import "./nav&foot.css"
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const NavBar = () => {
  const { user , logoutUser} = useContext(AuthContext);
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
        </ul>
      </div>
      <div className="navbar-last">
<<<<<<< HEAD
        <Link to="/profile">
          <img className="navbar-profile" src="/default.jpg" />
        </Link>
=======
       
          <img
            className="navbar-profile"
            src={profile.profile_pic ? profile.profile_pic : "default.jpg"}
          />
        <div className="dropdown">
          <div className="dropdown-menu">
            {user ? (
              <>
                <div className="" >
                  <img
                    className="drop-profile"
                    src={
                      profile.profile_pic ? profile.profile_pic : "default.jpg"
                    }
                  />
                </div>

                <ul style={{ padding: "10px" }}>
                  {user &&  <Link to={`/profile/${user.user_id}`}><li> Your Profile </li></Link>}
                  <li className="logout" onClick={logoutUser}>
                    Logout
                  </li>
                </ul>
              </>
            ) : (
              <Link to="/login">
                <ul style={{padding:"10px"}}>
                  <li>login</li>
                </ul>
              </Link>
            )}
          </div>
        </div>
>>>>>>> parent of b39af38 (final frontend push)
      </div>
    </div>
  );
};
export default NavBar;
