import React from 'react'

const Rent = () => {
  return (
    <div className='w-screen'>
        <div class='flex justify-center align-center w-screen pt-10 pb-10 text-5xl text-gold bg-darkgreen font-title lg:text-8xl lg:pb-20 lg:pt-20'>
            <h1 data-aos="fade-up" data-aos-duration="2000">Wynajem sali weselnej</h1>
        </div>
        <div class='flex flex-col lg:flex-row lg:w-screen lg:h-full bg-darkgreen gap-4'>
            <div class='w-4/5 m-auto pt-8 pb-8 pl-4 pr-2 text-2xl bg-lightgreen text-gold  lg:h-[34rem] lg:max-w-[28rem] lg:translate-y-[10%]'>
                <h1 data-aos="fade-up" data-aos-duration="2000" class='pb-8 font-title text-5xl lg:pl-10 lg:mb-[10rem]'>Chrzciny</h1>
                <h1 data-aos="fade-up" data-aos-duration="2000" class='pb-4 font-regular'>Chrzest dziecka to wydarzenie, które zasługuję na wyjątkową oprawę.</h1>
                <h1 data-aos="fade-up" data-aos-duration="2000">Przeżyjmy ten dzień wspólnie w Hacjendzie.</h1>
            </div>
            <div class='w-4/5 m-auto pt-8 pb-8 pl-4 pr-2 text-2xl bg-lightgreen text-gold  lg:h-[34rem] lg:max-w-[28rem] '>
                <div class='flex w-full lg:justify-center'><h1 data-aos="fade-up" data-aos-duration="2000" class='pb-8 font-title text-5xl lg:mb-[10rem]'>Imprezy okolicznościowe</h1></div>
                <h1 data-aos="fade-up" data-aos-duration="2000" class='pb-4 font-regular'>Wszelkie imprezy okolicznościowe będą przeżyciem niezapomnianym takie jak komunie lub chrzest</h1>
            </div>
            <div class='w-4/5 m-auto pt-8 pb-8 pl-4 pr-2 text-2xl bg-lightblue text-gold  lg:h-[34rem] lg:max-w-[28rem] lg:translate-y-[10%]'>
                <h1 data-aos="fade-up" data-aos-duration="2000" class='pb-8 font-title text-5xl lg:pl-10'>Wesela</h1>
                <h1 data-aos="fade-up" data-aos-duration="2000" class='pb-4 font-regular'>Każda Para Młoda pragnię, aby jej przyjęcie weselne było przeżyciem niezapomnianym dlatego organizację tego wyjątkowego wydarzenia rozpoczyna od wyboru idealnego miejsca na wesele. Takim miejscem jest nasza Hacjenda, do którego serdecznie Państwa zapraszamy.</h1>
                <h1 data-aos="fade-up" data-aos-duration="2000">Odwiedź Hacjendę i zapoznaj się z naszą ofertą</h1>
            </div>
        </div>
    </div>
  )
}

export default Rent