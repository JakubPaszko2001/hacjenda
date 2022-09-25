import React from 'react'
import patern from '../../public/images/patern2.png'
const Main = () => {
  return (
    <div class='w-screen'>
      <div class='flex flex-col mt-10'>
        <div class='w-4/5 h-[25rem] m-auto bg-darkgreen relative'>
          <div class='w-1/2 h-full object-contain m-auto bg-contain' style={{backgroundImage: `url(${patern})`}}></div>
          <div class='absolute top-0 left-0 h-[15%] w-[15%] bg-gold'></div>
          <div class='absolute top-0 right-0 h-[15%] w-[15%] bg-gold'></div>
          <div class='absolute bottom-0 left-0 h-[15%] w-[15%] bg-gold'></div>
          <div class='absolute bottom-0 right-0 h-[15%] w-[15%] bg-gold'></div>
        </div>
      </div>
    </div>
  )
}

export default Main