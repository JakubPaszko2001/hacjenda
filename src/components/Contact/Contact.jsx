import React, {useEffect} from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Main from './Main'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div class='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Main/>
    </div>
  )
}

export default Contact