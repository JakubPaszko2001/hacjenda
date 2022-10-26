import React, { useState, useEffect } from "react";
import pokoj from "../Galery/Photos/h1.webp";
import pokoj1 from "../Galery/Photos/h2.webp";
const Main = () => {
  const [room, setRoom] = useState(pokoj);
  function changeColor() {
    const y = document.getElementById("1");
    const x = document.getElementById("2");
    x.classList.remove("bg-gold");
    x.classList.add("bg-white");
    y.classList.remove("bg-white");
    y.classList.add("bg-gold");
  }
  function changeColor2() {
    const y = document.getElementById("1");
    const x = document.getElementById("2");
    x.classList.remove("bg-white");
    x.classList.add("bg-gold");
    y.classList.remove("bg-gold");
    y.classList.add("bg-white");
  }
  function photoChange() {
    setTimeout(() => {
      setRoom(pokoj1);
      changeColor();
      setTimeout(() => {
        setRoom(pokoj);
        changeColor2();
        photoChange();
      }, 3000);
    }, 3000);
  }
  useEffect(() => {
    photoChange();
  }, []);
  return (
    <div class="w-screen">
      <div class="flex flex-col w-4/5 m-auto font-regular mt-10 mb-10 lg:flex-row">
        <div class="flex flex-col justify-center bg-darkgreen p-4 lg:w-1/2">
          <h1 class="text-gold font-title text-5xl mb-2">Pokoje noclegowe</h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            class="text-gold lg:text-xl"
          >
            Zapraszamy do korzystania z naszego pensjonatu znajdującego się na
            terenie malowniczej wsi Jasionówka. Zaledwie 30 km od Białegostoku.
            Na naszym terenie znajduję się 5 hektarowy ogród, zarybiony staw z
            możliwością wędkowania, altany oraz miejsce do grillowania i na
            ognisko. Zapewniamy, cieszę i spokój daleko od zgiełku miasta,
            otoczeni zielenią w przyjemnej i miłej atmosferze. Pokoje, które
            proponujemy naszym gościom, zostały starannie przygotowane i
            wyposażone we wszelkie niezbędne udogodnienia, takie jak telewizor z
            płaskim ekranem, lodówką oraz łazienkę z prysznicem. Do dyspozycji
            gości jest mini bar, przytulny kominek oraz część wypoczynkowa wraz
            z bufetem.
          </h1>
          <button
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once
            class="w-full mt-8 bg-gold p-2 lg:w-1/3"
          >
            <a
              href="https://www.booking.com/hotel/pl/hacjenda-jasionowka.pl.html"
              target="_blank"
              rel="noreferrer"
            >
              BOOKING
            </a>
          </button>
        </div>
        <div class="flex flex-col lg:flex-row">
          <img src={room} class="w-full" alt="rooms"></img>
          <div class="flex bg justify-center items-center w-full h-10 lg:flex-col lg:h-full">
            <div
              onClick={() => {
                setRoom(pokoj);
              }}
              class="w-5 h-5 lg:ml-4 lg:mr-4 mr-2 lg:mr-[-2] lg:mb-2 rounded-full bg-gold cursor-pointer"
              id="1"
            ></div>
            <div
              onClick={() => {
                setRoom(pokoj1);
              }}
              class="w-5 h-5 lg:ml-4 lg:mr-4 rounded-full bg-gold cursor-pointer"
              id="2"
            ></div>
            {/* <div onClick={() => {setRoom(pokoj)}} class='w-5 h-5 lg:ml-4 lg:mr-4 ml-2 lg:ml-[-2] lg:mt-2 rounded-full bg-gold cursor-pointer' id='3'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
