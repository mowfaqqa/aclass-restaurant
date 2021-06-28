import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Carousel from './Carousel'
import Highlight from './Highlight'
import About from './About'
import Reservation from './Reservation'
import Review from './Review'
import Footer from './Footer'
import Gallery from './Gallery'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Highlight />
      <About />
      <Reservation />
      <Gallery />
      <Review />
      <Footer />
    </div>
  )
}


export default Home;