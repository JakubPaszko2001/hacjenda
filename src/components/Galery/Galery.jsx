import React, {useEffect} from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Grid from './Grid'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Galery = () => {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, -10);
  },[])
  return (
    <div class='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Grid/>
    </div>
  )
}

export default Galery