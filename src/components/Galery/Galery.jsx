import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Grid from './Grid'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Galery = () => {
  AOS.init();
  return (
    <div class='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Grid/>
    </div>
  )
}

export default Galery