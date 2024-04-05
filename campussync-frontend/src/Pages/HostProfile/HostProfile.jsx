import React from 'react'
import "./HostProfile.css"
import { Navbar } from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Profile from '../../Components/Profile/Profile';

 const HostProfile = () => {
  return (
    <div className="HostProfile-container" >
      <Navbar />
      <Profile/>
      <Footer />
    </div>
  )
}

export  default HostProfile