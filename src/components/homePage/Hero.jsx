import React from 'react'
import bgg from '../../public/images/background3.webp'
const Hero = () => {
  return (
        <div class='w-screen h-screen flex flex-col justify-center items-center bg-cover text-white text-5xl font-title sm:text-8xl bg-center' style={{backgroundImage: `url(${bgg})`}}>
          <h1 data-aos="fade-down" data-aos-duration="2000">Sala Bankietowa</h1>
          <h1 data-aos="fade-down" data-aos-duration="2000">Hacjenda</h1>
        </div>
  )
}

export default Hero