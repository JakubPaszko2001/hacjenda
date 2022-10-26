import React from "react";
import bgg1 from "../../public/images/background3.webp";
import bgg2 from "../../public/images/andrzejki.webp";
import { useState } from "react";
import { useEffect } from "react";
const Hero = () => {
  const [state, setState] = useState(true);

  function changeBackground() {
    console.log(state);
    setInterval(() => {
      setState((prevState) => !prevState);
    }, 3000);
  }
  useEffect(() => {
    changeBackground();
  });
  return (
    <div
      class="w-screen h-screen flex flex-col justify-center items-center bg-cover text-white text-5xl font-title sm:text-8xl bg-center"
      style={{ backgroundImage: `url(${state ? bgg1 : bgg2})` }}
    >
      <h1 data-aos="fade-down" data-aos-duration="1500">
        Sala Bankietowa
      </h1>
      <h1 data-aos="fade-down" data-aos-duration="1500">
        Hacjenda
      </h1>
      {/* <button className="absolute top-0 bottom-0 right-0">gas</button> */}
    </div>
  );
};

export default Hero;
