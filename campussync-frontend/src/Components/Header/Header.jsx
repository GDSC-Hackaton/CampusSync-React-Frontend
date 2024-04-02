import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/campusSync.png";
import { FaCircleUser } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

export const Navbar = () => {
  const [menu, setMenu] = useState("event"); // Corrected useState

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt=""></img>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("event");
          }}
        >
          Events
          {menu === "event" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("disc"); // Corrected setMenu
          }}
        >
          Discussions
          {menu === "disc" ? <hr></hr> : <></>}
        </li>
        {/* <li
          onClick={() => {
            setMenu("product"); // Corrected setMenu
          }}
        >
          <Link to="/product" style={{ textDecoration: "none" }}>
            Product
          </Link>
          {menu === "product" ? <hr></hr> : <></>}
        </li> */}
        <li
          onClick={() => {
            setMenu("hosts");
          }}
        >
          Hosts
          {menu === "hosts" ? <hr></hr> : <></>}
        </li>
        {/* <li
          onClick={() => {
            setMenu("confirm"); // Corrected setMenu
          }}
        >
          <Link to="/bought" style={{ textDecoration: "none" }}>
            Bought_items
          </Link>{" "}
          {menu === "confirm" ? <hr></hr> : <></>}
        </li> */}
      </ul>
      <div className="nav-icon">
        <FaCircleUser size="3rem" />
        {/* <FaFacebook />
        <FaInstagramSquare />
        <FaLinkedin />
        <IoIosAddCircle size="3rem" />
        <FaImage />
        <IoSend /> */}
      </div>
    </div>
  );
};
