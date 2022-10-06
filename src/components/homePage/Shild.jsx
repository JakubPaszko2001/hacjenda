import React from 'react'
import shild from '../../public/images/tarcza.webp'
const Shild = () => {
  return (
    <div>
        <div class='w-screen h-14 bg-darkgreen lg:h-24'></div>
        <div class='flex flex-col items-center justify-between w-screen h-[15rem] sm:flex-row p-2'>
          <div class='flex justify-center w-full h-1/2 lg:h-full pr-2'>
            <img class='object-cover h-full w-full max-w-[26rem]' src={shild} alt="tarcza photo"/>
          </div>
          <div class='flex justify-center items-center w-full h-1/2'>
            <h1 class='lg:text-lg font-regular'>Nasza firma jest beneficjentem programu rządowego „Tarcza Finansowa 2.0 Polskiego Funduszu Rozwoju”</h1>
          </div>
        </div>
    </div>
  )
}

export default Shild