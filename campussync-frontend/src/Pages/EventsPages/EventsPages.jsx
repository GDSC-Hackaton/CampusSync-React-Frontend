import React from 'react'
import { Navbar } from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import CurrentEvents from '../../Components/CurrentEvents/CurrentEvents'

const EventsPages = () => {
  return (
    <div>
   <Navbar />
   <CurrentEvents />
   <Footer />
       </div>
  )
}

export default EventsPages