import React, {useEffect} from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Main from './Main'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
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

export default About