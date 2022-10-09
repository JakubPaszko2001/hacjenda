import React from 'react'
import bg from '../../public/images/background.webp'
const Hero = () => {
  return (
    <div class='flex justify-center items-center w-screen h-[30rem] bg-cover bg-center' style={{backgroundImage: `url(${bg})`}}>
        <h1 data-aos="fade-down" data-aos-duration="2000" class='text-white font-title sm:text-8xl text-5xl'>O nas - Hacjenda</h1>
    </div>
  )
}

export default Hero