import React from "react";
import bg from "../../public/images/background3.webp";
const Hero = () => {
  return (
    <div
      class="flex justify-center items-center w-screen h-[30rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1
        data-aos="fade-down"
        data-aos-duration="1500"
        class="text-white sm:text-8xl text-5xl font-title"
      >
        Menu
      </h1>
    </div>
  );
};

export default Hero;
