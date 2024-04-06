import React from 'react'
import { Navbar } from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/Home/Home'
import TopEvents from '../../Components/TopEvents/TopEvents'
import TopHosts from '../../Components/TopHosts/TopHosts'

const HomePage = () => {
  return (
    <div>
     <Navbar />
      <Home />
    <TopEvents />
    <TopHosts />
      <Footer />
    </div>
  )
}
export default HomePage