import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Main from './Main'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  AOS.init();
  return (
    <div class='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Main/>
    </div>
  )
}

export default About