import React from 'react'
import patern from '../../public/images/patern2.png'
const Main = () => {
  return (
    <div class='flex justify-center items-center w-screen h-[calc(100vh_-_15rem)]'>
        <div class='flex w-4/5 h-4/5 bg-darkgreen'>
            <div class='flex flex-col justify-around w-2/3 h-full p-2 bg-darkgreen text-white'>
                <h1 data-aos="fade-in" data-aos-duration="2000" class='font-title text-2xl lg:text-5xl lg:pl-10'>Mail: <span class='font-regular text-base lg:text-xl'>mpiatkowski3@o2.pl</span></h1>
                <h1 data-aos="fade-in" data-aos-duration="2000" class='font-title text-2xl lg:text-5xl lg:pl-10'>Numer telefonu: <span class='font-regular text-base lg:text-xl'>693 720 887</span></h1>
                <h1 data-aos="fade-in" data-aos-duration="2000" class='font-title text-2xl lg:text-5xl lg:pl-10'>Miejscowosc: <span class='font-regular text-base lg:text-xl'>Jasionówka 19-122 ul.Korycińska 32</span></h1>
            </div>
            <div class='flex flex-col justify-between w-1/3 h-full p-4 bg-contain relative'>
                <div class='absolute top-0 left-0 h-full w-full bg-contain z-10' style={{backgroundImage: `url(${patern})`}}></div>
                <div class='h-1/4 w-1/2 bg-gold'></div>
                <div class='h-1/4 w-1/2 bg-gold translate-x-[100%]'></div>
                <div class='h-1/4 w-1/2 bg-gold'></div>
            </div>
        </div>
    </div>
  )
}

export default Main