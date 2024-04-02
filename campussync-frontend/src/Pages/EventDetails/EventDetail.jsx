import React from 'react'
import { Navbar } from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Details from '../../Components/Details/Details';

function EventDetail() {
  return (
    <>
      <Navbar />
      <Details/>
      <Footer />
    </>
  );
}

export default EventDetail