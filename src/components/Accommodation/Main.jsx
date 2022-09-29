import React, { useState, useEffect } from 'react'
import pokoj from '../Galery/Photos/22.jpg'
import pokoj1 from '../Galery/Photos/24.jpg'
const Main = () => {
  const [room,setRoom] = useState(pokoj)
  return (
    <div class='w-screen'>
      <div class='flex flex-col w-4/5 m-auto font-regular mt-10 mb-10 lg:flex-row'>
        <div class='flex flex-col justify-center bg-darkgreen p-4 lg:w-1/2'>
          <h1 class='text-gold font-title text-5xl mb-2'>Pokoje noclegowe</h1>
          <h1 data-aos="fade-up" data-aos-duration="2000" class='text-gold lg:text-xl'>Zapraszamy do korzystania z naszego pensojantu znajdującego się na terenie malowniczej wsi Jasionówka. Zaledwie 30km od Białegostoku. Na naszym terenie znajduję sie 5 hektarowy ogród, zarybiony staw z możliwością wędkowania, altany oraz miejsce do grilowania i na ognisko. Zapewniamy cieszę i spokój daleko od zgiełku miasta, otoczeni zielenią w przyjemnej i miłej atmosferze. Pokojem które proponujemy naszym gościom zostały starannie przygotowane i wyposażone we wszelkie niezbędne udogodnienia, takie jak telewizor z płaskim ekranem, lodówką oraz łazienkę z prysznicem. Do dyspozycji gości jest mini bar, przytulny kominek oraz część wypoczynkowa wraz z bufetem.</h1>
          <button data-aos="fade-up" data-aos-duration="2000" data-aos-once class='w-full mt-8 bg-gold p-2 lg:w-1/3'><a href='https://www.booking.com/hotel/pl/hacjenda-jasionowka.pl.html' target="_blank" rel="noreferrer">BOOKING</a></button>
        </div>
        <div class='flex flex-col lg:flex-row'>
          <img src={room} class='w-full' alt='rooms'></img>
          <div class='flex justify-center items-center w-full h-10 lg:flex-col lg:h-full'>
            <div onClick={() => {setRoom(pokoj)}} class='w-5 h-5 lg:ml-4 lg:mr-4 mr-2 lg:mr-[-2] lg:mb-2 rounded-full bg-gold cursor-pointer'></div>
            <div onClick={() => {setRoom(pokoj1)}} class='w-5 h-5 lg:ml-4 lg:mr-4 rounded-full bg-gold cursor-pointer'></div>
            <div onClick={() => {setRoom(pokoj)}} class='w-5 h-5 lg:ml-4 lg:mr-4 ml-2 lg:ml-[-2] lg:mt-2 rounded-full bg-gold cursor-pointer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main