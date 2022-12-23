import React from "react";
import bgg1 from "../../public/images/background3.webp";
// import bgg2 from "../../public/images/andrzejkiMobile.webp";
// import bgg3 from "../../public/images/andrzejki.webp";
import bgg2 from "../../public/images/sylwester.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
const Hero = () => {
  return (
    <div class="w-screen h-screen flex flex-col justify-center items-center bg-cover text-white text-5xl font-title sm:text-8xl bg-center">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, autoplay: true }}
        className="w-screen h-screen relative"
      >
        <SwiperSlide
          className="bg-center bg-cover w-full h-full flex justify-center item-center"
          style={{ backgroundImage: `url(${bgg1})` }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 data-aos="fade-down" data-aos-duration="1500" data-aos-once>
              Sala Bankietowa
            </h1>
            <h1 data-aos="fade-down" data-aos-duration="1500" data-aos-once>
              Hacjenda
            </h1>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide
          className="bg-center bg-cover 2xl:hidden"
          style={{ backgroundImage: `url(${bgg2})` }}
        ></SwiperSlide> */}
        <SwiperSlide
          className="bg-center bg-cover flex justify-center item-center"
          style={{ backgroundImage: `url(${bgg2})` }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center backdrop-blur-sm">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once
                className="text-4xl sm:text-6xl lg:text-8xl"
              >
                Zapraszamy na sylwestra 2023 !
              </h1>
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once
                className="text-4xl sm:text-6xl lg:text-8xl"
              >
                Ostatnie miejsca wolne !
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
