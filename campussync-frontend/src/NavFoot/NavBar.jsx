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
          <li className="navitem">Events</li>
          <li className="navitem">Hosts</li>
          <li className="navitem">Discussion</li>
        </ul>
      </div>
      <div className="navbar-last">
        <img className="navbar-profile" src="/default.jpg" />
      </div>
    </div>
  );
};
export default NavBar;
