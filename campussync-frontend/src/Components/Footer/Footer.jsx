import React from "react";
import "./footer.css";
import logo from "../../assets/campusSync.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-copyright">
        <FaFacebook />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
    </div>
  );
}

export default Footer;
