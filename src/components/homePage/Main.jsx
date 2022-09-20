import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Rent from './Rent'
import Invite from './Invite'
import Shild from './Shild'
import bgg from '../../public/images/background.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
  AOS.init();
  return (
    <div class='flex flex-col overflow-hidden'>
        <Navbar />
        <div class='w-screen h-screen flex flex-col justify-center items-center bg-cover text-red text-5xl font-title sm:text-8xl' style={{backgroundImage: `url(${bgg})`}}>
          <h1 data-aos="fade-down" data-aos-duration="2000">Sala Bankietowa</h1>
          <h1 data-aos="fade-down" data-aos-duration="2000" class='pb-60'>Hacjenda</h1>
        </div>
        <Hero />
        <Rent />
        <Invite />
        <Shild />
    </div>
  )
}

export default Main