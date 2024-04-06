import "./nav&foot.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img className="navbar-logo " src="/logocampus.png"></img>
        </Link>
      </div>
      <div className="navbar-list">
        <ul>
          <Link to="/events">
            <li className="navitem">Events</li>
          </Link>
          <Link to='/hosts'>
            <li className="navitem">Hosts</li>
          </Link>
          <Link to="/discussion">
            <li className="navitem">Discussion</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-last">
        <Link to="/profile">
          <img className="navbar-profile" src="/default.jpg" />
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
