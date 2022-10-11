import React, {useEffect} from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Rent from './Rent'
import Invite from './Invite'
import Shild from './Shild'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer'
const Main = () => {
  useEffect(() => {
    window.scrollTo(0, -10);
  },[])
  AOS.init();
  return (
    <div class='flex flex-col overflow-hidden'>
        <Navbar />
        <Hero />
        <Rent />
        <Invite />
        <Shild />
        <Footer/>
    </div>
  )
}

export default Main