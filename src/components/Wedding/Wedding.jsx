import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Main from './Main'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Wedding = () => {
  AOS.init();
  return (
    <div class='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Wedding