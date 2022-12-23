import React from "react";
import szampan from "../../public/images/szampan.webp";
const Invite = () => {
  return (
    <div>
      <div class="w-4/5 m-auto h-[30rem] bg-white mt-10  lg:w-1/2 pt-10 mt-[8rem] mb-[4rem]">
        <div class="h-3/5 w-full bg-cover bg-center lg:h-4/5">
          <img
            src={szampan}
            alt="szampan"
            class="object-cover h-full w-full z-20"
          />
        </div>
        <div class="h-1/3">
          <div class="flex flex-col justify-center items-center text-4xl h-4/5 w-1/2 bg-lightgreen text-gold translate-x-[110%] translate-y-[-50%] lg:h-full  lg:text-6xl font-title">
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-once>
              Zapraszamy
            </h1>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-once>
              do Hacjendy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
