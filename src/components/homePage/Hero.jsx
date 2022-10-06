import React from 'react'
import patern from '../../public/images/patern2.png'
import wesele from '../../public/images/wesele.webp'
const Hero = () => {
  return (
    <div class='h-96 w-screen bg-white lg:h-[40rem] relative z-[1]'>
        <div class='flex w-10/12 h-[40rem] bg-white z-20 translate-y-[-50%]'>
          <div class='w-1/6 bg-darkgreen bg-contain' style={{backgroundImage: `url(${patern})`}}>

          </div>
          <div class='w-5/6 bg-darkgreen responsive'>
            <div class='h-1/2 p-2 text-gold font-regular lg:p-10 sm:text-xl sm:pr-16 sm:pl-16 lg:w-3/4 lg:flex lg:justify-center lg:items-center lg:m-auto'>
              <h1 class='break-words'>Sala bankietowa Hacjenda znajduje się w miejscowości Jasionówka  zaledwie 30 km od Białegostoku. Zajmujemy się organizacją wesel, komunii i innych przyjęć okolicznościowych. Sala znajduje się na uboczu otoczona przepięknym ogrodem. Podmiejski charakter okolicy oraz przyjezdna atmosfera stwarzają świetne miejsce wypoczynku. Sala jest klimatyzowana. Obiekt pomieści nawet 250 osób.</h1>
            </div>
            <div class='h-1/2 w-[83.4%] lg:w-3/4 right-0 absolute lg:h-4/5'>
              <div class='h-[100%] lg:h-[110%] bg-cover bg-center pl-2 lg:w z-[40]' style={{backgroundImage: `url(${wesele})`}}></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero